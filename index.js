function distanceFromHqInBlocks (someValue) {
    //returns the number of blocks given a value
    if (someValue > 42){
        return someValue - 42;
    } else {
        return 42 - someValue; 
    }      
  }
   
function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
    if (startingBlock > endingBlock){
        return (startingBlock - endingBlock) * 264;
    } else {
        return (endingBlock - startingBlock) * 264;
    }
}

function calculatesFarePrice (startingBlock, endingBlock) {
    const distance = distanceTravelledInFeet (startingBlock, endingBlock);

    if (distance < 400){
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    } else if ( distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }

}