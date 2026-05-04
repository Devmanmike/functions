// ACTION BUTTON + UI

function handleAction(player, car, keys){
  if(typeof isNearCar !== "function") return;

  if(keys["e"] && isNearCar(player, car, 80)){
    car.inCar = !car.inCar;
  }
}

function updateCarHint(player, car){
  if(typeof isNearCar !== "function") return;

  const hint = document.getElementById("carHint");

  hint.style.display =
    isNearCar(player, car, 80) && !car.inCar ? "block" : "none";
}
