// CAR FUNCTIONS

function moveCar(car, input){
  if(!car.inCar) return;

  let mx = input.right - input.left;
  let my = input.down - input.up;

  car.x += mx * car.speed;
  car.y += my * car.speed;
}

function isNearCar(player, car, radius){
  return Math.hypot(player.x - car.x, player.y - car.y) < radius;
}
