// BUILD FUNCTIONS

function placeBuilding(buildings, inventory, type, x, y){
  let cost = type === "wall" ? 1 : type === "fire" ? 2 : 3;

  if(inventory.wood < cost) return false;

  inventory.wood -= cost;
  buildings.push({ type, x, y });

  return true;
}
