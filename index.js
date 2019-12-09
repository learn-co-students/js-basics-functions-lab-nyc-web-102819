// Code your solution in this file!

function distanceInBlocks(block1, block2) {
    block2 - block1
}

blockInFeet = 264

function distanceFromHqInBlocks(street) {
    if (street > 42) {
       return street - 42
    } else {
       return 42 - street
    }
}

function distanceFromHqInFeet(street) {
    if (street > 42) {
        return (street - 42) * 264
     } else {
        return (42 - street) * 264
     }
}

function distanceTravelledInFeet(st1, st2) {
    if (st2 > st1) {
        return (st2 - st1) * 264
    } else {
        return (st1 - st2) * 264
    }
}

function fareCaluculator(start, destiantion) {
    //charges 2 cents per foot when total feet travelled is between 400 and 2000 
    //(remember the first 400 feet are free!)'
    let distance = distanceTravelledInFeet(start, destiantion)
            if (distance < 401) {
                return 0
            }else if (distance < 2001) {
               return (distance - 400) * 0.02
            } else if (distance < 2501) {
                return 25
            } else if (distance > 2500) {
                return "cannot travel that far"
            }
}

function calculatesFarePrice(start, destination) {

    if (destination > start) {
       return fareCaluculator(start, destination)
    } else {
       return fareCaluculator(destination, start)
    }
}