// Code your solution in this file!
const hqLocation = 42;
const blockToFeet = 264;

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(hqLocation - pickupLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * blockToFeet;
}

function distanceTravelledInFeet(pickupLocation, destination) {
    return Math.abs(pickupLocation - destination) * blockToFeet;
}

function calculatesFarePrice(pickupLocation, destination) {
    const distance = distanceTravelledInFeet(pickupLocation, destination);
    if (distance <= 400) {
        return 0;
    }
    else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}

