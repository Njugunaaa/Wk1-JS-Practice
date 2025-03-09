function speedDetector(){
  const speed = parseInt(prompt("Enter the car's speed (in km/h):"));

  if (isNaN(speed) || speed < 0) {
    alert("Invalid input. Please enter a valid positive number.");
    //I mostly use alert because it is easier to check the program is working live on my browser
    return;
  }
  const speedLimit=70;
  const kmPerDemerit=5;
  const maxDemerit=12;
  let points = 0;
//Determning the speed limits and their respective demerits
  if (speed <= speedLimit) {
    alert(`Car is driving at ${speed} km/h, which is below the speed limit.`);
  } else {
    points = Math.floor((speed - speedLimit) / kmPerDemerit);
  }

  if (points > maxDemerit) {
    alert(`You have ${points} points. This license has been suspended.`);
  } else if (points > 0) { 
    alert(`You have: ${points} points`);
  }
}

//Initialize and calling of the function
speedDetector();
