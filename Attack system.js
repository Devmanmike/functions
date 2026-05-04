// ATTACK SYSTEM

function attackTrees(player, chunks, inventory){

  for(let chunk of chunks.values()){
    for(let i = chunk.length - 1; i >= 0; i--){
      let t = chunk[i];

      let d = Math.hypot(player.x - t.x, player.y - t.y);

      if(d < 60){
        t.hp = (t.hp || 3) - 1;

        if(t.hp <= 0){
          chunk.splice(i, 1);
          inventory.wood++;
        }
      }
    }
  }
}
