// Code your solution in this file!
function distanceFromHqInBlocks(block){
    const hq = 42
        return Math.abs(block - hq)
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264

}

function distanceTravelledInFeet(start , end){
    return Math.abs(start - end) * 264

}
function calculatesFarePrice(start , destination){
    let distance = Math.abs(start - destination) * 264;
        if (distance <= 400){
            return 0
        }
        else if (distance <= 2000){
            return (distance - 400) * .02
        }
        else if (distance <= 2500){
            return 25.00
        }
        else if (distance > 2500){
            return "cannot travel that far"
        }
    }