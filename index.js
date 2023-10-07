// Code your solution in this file!
function distanceFromHqInBlocks(blocks)
{
  return Math.abs(blocks-42)
}


function distanceFromHqInFeet(distance) {
  const blocks = distanceFromHqInBlocks(distance);
  return blocks * 264;
}


function distanceTravelledInFeet(a,b)
{

let distance= Math.abs(b-a)
return distance*264
}


function calculatesFarePrice(a ,b) {
  const distance = distanceTravelledInFeet(a,b);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}