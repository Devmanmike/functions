// WORLD FUNCTIONS

function generateChunk(chunks, cx, cy, size){
  const key = cx + "," + cy;
  if(chunks.has(key)) return;

  let trees = [];

  for(let i=0;i<10;i++){
    trees.push({
      x: cx * size + Math.random() * size,
      y: cy * size + Math.random() * size
    });
  }

  chunks.set(key, trees);
}
