// Code your solution in this file!
const drivers=['Sally', 'Bob', 'Freddy', 'Claudia']
function returnFirstTwoDrivers(){
    const firstDrivers= (dr)=>dr=drivers.slice(0,2)
    return firstDrivers()
}

function returnLastTwoDrivers(){
    const lastDrivers= (dr)=>dr=drivers.slice(2)
    return lastDrivers()
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(num){
    return function fn(fare){return fare * num
    }
}

function fareDoubler(createFareMultiplier){
    return createFareMultiplier*2
}

function fareTripler(createFareMultiplier){
    return createFareMultiplier*3
}

function selectDifferentDrivers(array,otherFn){
    if(otherFn===returnFirstTwoDrivers){
        return array.slice(0,2)
    }
    else if(otherFn===returnLastTwoDrivers){
        return array.slice(2)
    }
}