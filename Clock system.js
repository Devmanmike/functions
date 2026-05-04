// CLOCK SYSTEM

let gameTime = 0;

function updateGameTime(){
  gameTime += 0.3;
  if(gameTime > 1440) gameTime = 0;
}

function getClockString(){
  let h = Math.floor(gameTime / 60);
  let m = Math.floor(gameTime % 60);

  let period = h >= 12 ? "PM" : "AM";
  let dh = h % 12;
  if(dh === 0) dh = 12;

  let emoji = "";
  if(h === 12) emoji = " ☀️";
  if(h === 0 || h === 6) emoji = " 🌙";

  return `${dh}:${m.toString().padStart(2,"0")} ${period}${emoji}`;
}
