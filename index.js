const scruberHQ = 42;

function distanceFromHqInBlocks(streetNum) {
    if(streetNum >= scruberHQ) {
        return streetNum - scruberHQ;
    } else if(streetNum < scruberHQ) {
        return scruberHQ - streetNum;
    }
}

const blockLength = 264;

function distanceFromHqInFeet(streetNum) {
    return distanceFromHqInBlocks(streetNum) * blockLength;
}

function distanceTravelledInFeet(start, destination) {
    if(start >= destination) {
        return (start - destination) * 264;
    } else if(start < destination) {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let fare;
    if(distanceTravelledInFeet(start, destination) < 400) {
        fare = 0;
        return fare;
    } else if(distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        fare = (distanceTravelledInFeet(start, destination) - 400) * 0.02;
        return fare;
    } else if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        fare = 25;
        return fare;
    } else if(distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
}

