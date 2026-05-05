// ===============================
// FIREBASE ONLINE SYSTEM (MODERN SDK)
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, onValue, onDisconnect, update, remove } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ===============================
// YOUR FIREBASE CONFIG
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyD4mubf9363B8HrEE3YSHWi_VroHNCArFE",
  authDomain: "online-game-1-ce955.firebaseapp.com",
  projectId: "online-game-1-ce955",
  storageBucket: "online-game-1-ce955.firebasestorage.app",
  messagingSenderId: "700182899721",
  appId: "1:700182899721:web:1d4259c1e0daa026badcd8",
  measurementId: "G-BMGT7Q24RF"
};

// ===============================
// INIT
// ===============================
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ===============================
// PLAYER STATE
// ===============================
const online = {
  id: crypto.randomUUID(),
  players: {},
  ready: false
};

const playersRef = ref(db, "players/" + online.id);
const allPlayersRef = ref(db, "players");

// Remove player on disconnect
onDisconnect(playersRef).remove();

// ===============================
// LISTEN FOR OTHER PLAYERS
// ===============================
onValue(allPlayersRef, (snapshot) => {
  const data = snapshot.val() || {};
  online.players = {};

  for (let id in data) {
    if (id !== online.id) {
      online.players[id] = data[id];
    }
  }
});

online.ready = true;
console.log("Online ready:", online.id);

// ===============================
// UPDATE PLAYER (CALL IN LOOP)
// ===============================
export function updateOnlinePlayer(x, y, extra = {}) {
  if (!online.ready) return;

  set(playersRef, {
    x,
    y,
    ...extra,
    t: Date.now()
  });
}

// ===============================
// GET OTHER PLAYERS
// ===============================
export function getOnlinePlayers() {
  return online.players;
}

// ===============================
// SET META (username, etc)
// ===============================
export function setOnlineMeta(meta) {
  if (!online.ready) return;
  update(playersRef, meta);
}

// ===============================
// DISCONNECT
// ===============================
export function disconnectOnline() {
  remove(playersRef);
}
