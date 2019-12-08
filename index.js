// Code your solution in this file!

const feetInBlock = 264
const hqLocation = 42

function distanceTravelledInFeet(start, destination) {
  let distInFeet
  if (start >= destination) {
    distInFeet = (start - destination) * feetInBlock
  }
  else {
    distInFeet = ( destination - start ) * feetInBlock
  }
  return distInFeet
} 

function distanceFromHqInBlocks(location) {
  let distInBlocks
  hqLocation <= location ?
    distInBlocks = location - hqLocation : distInBlocks = hqLocation - location;
  return distInBlocks
}

function distanceFromHqInFeet(location) {
  let distInFeet = distanceFromHqInBlocks(location) * feetInBlock
  return distInFeet
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}