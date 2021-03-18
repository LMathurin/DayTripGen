"use strict";

let welcome = alert("Welcome to Day Trip Generator! Where we help you plan a daytrip!");
    
  

function destinations() {
    let nameDestination = ["san diego", "Miami", "New York", "Austin", "Chicago" ];
    let randomDestination = nameDestination[Math.floor(Math.random() * 4 + 1)];
    return randomDestination;
} 

function transportation() {
    let typeOfTransportation = ["Rental Car", "Limo", "Motorcycle", "Uber", "Electric scooter"];
    let randomTransportation = typeOfTransportation[Math.floor(Math.random() * 4 + 1)];
    return randomTransportation;
}

function restaurants() {
    let typeOfRestaurants = ["PF Changs", "Houstons", "Bonefish Grill", "Outback Steakhouse", "Carabas"];
    let randomRestaurant = typeOfRestaurants[Math.floor(Math.random() * 4 + 1)];
    return randomRestaurant;
}

function entertainment() {
    let typeOfEntertainment = ["Tim McGraw Concernt", "LiveStock Show & Rodeo", "Live Boxing Match", "Monster Mini Golf", "K1 Speed Go Kart Racing"];
    let randomEntertainment = typeOfEntertainment[Math.floor(Math.random() * 4 + 1)];
    return randomEntertainment;
}


let genDayTrip = [destinations(), transportation(),restaurants(),entertainment()];
let selectedDestination = genDayTrip[0];
let selectedTransportation = genDayTrip[1];
let selectedRestaurant = genDayTrip[2];
let selectedEntertainment = genDayTrip[3];
    console.log(genDayTrip);

//function for each leg of trip to display randomly selected 
function reGenerateTrip () {
    selectedDestination = destinations();
    selectedTransportation = transportation();
    selectedRestaurant = restaurants();
    selectedEntertainment = entertainment();
    return selectedDestination, selectedTransportation, selectedRestaurant, selectedEntertainment; 
}

function displayUserTrip() {
    alert("Your day trip has been randomly selected to start in " + selectedDestination + ", you will travel by " + selectedTransportation + ", to eat at " + selectedRestaurant + ", then to have some fun with your booked evening event at " + selectedEntertainment + ".");
}
   
function userVerifysGeneratedTrip() {
    let userInput = parseInt(prompt("If you are fully satified with your Day Trip please enter 0 below. To change any part of your trip type 1 for destination, 2 for transportation, 3 for restaurant, 4 for entertainment and to generate a whole new trip type in 5. "));
    return userInput;
} 

displayUserTrip();

let userNewChoice = true;

while (userNewChoice) {
    let userInputNumber = userVerifysGeneratedTrip();
        
    if(userInputNumber === 1) {
        selectedDestination = destinations();
        displayUserTrip();
    } 
    else if (userInputNumber === 2) {
        selectedTransportation = transportation();
        displayUserTrip();
    }
    else if (userInputNumber === 3) {
        selectedRestaurant = restaurants();
        displayUserTrip();
    }
    else if (userInputNumber === 4) {
        selectedEntertainment = entertainment();
        displayUserTrip();
    }
    else if (userInputNumber === 5) {
        reGenerateTrip();
        displayUserTrip();
    }   
    else if (userInputNumber === 0) {
        alert("Your all set! You generated day trip is confirmed! Have Fun!! ");
        console.log("Your confirmed trip - destination location :  " + selectedDestination + "Your transportation : " + selectedTransportation + "Your restaurant : " + selectedRestaurant + "Your evening entertainment: " + selectedEntertainment + "." );
        userNewChoice = false;
    }
    else {
        console.log('Invalid choice');
    }

}


