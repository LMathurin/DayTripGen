"use strict";

    let userStartTrip = confirm('Would you like me to randomly generate a day trip for you?');
      if (!userStartTrip) alert ("Would you like me to display your trip?"); 
      else  { 
      alert ("Ok maybe next time.");
      }
    
  


let destinations = ["san diego", "Miami", "New York", "Austin", "Chicago" ];
let transportation = ["Car", "Bus", "Bicycle", "Scooter", "Skateboard"];
let restaurants = ["PF Changs", "Houstons", "Bonefish Grill", "Outback Steakhouse", "Carabas"];
let entertainment = ["Concernt", "Rodeo", "Boxing match", "Horseback Riding", "skydiving"];


//function for each leg of trip to display randomly selected 
function generateTrip (){
    let mydestination = (destinations[myNumber]);
    let myRestaurant = (restaurants[myNumber]);
    let myTrans = (transportation[myNumber]);
    let myEnter = (entertainment[myNumber]); 
    let myTrip = (mydestination,myRestaurant,myTrans,myEnter);
    return myTrip();
}  
console.log(generateTrip());


//function to generate random selected for each leg
function randomlySelectMyTrip (){
    let myNumber = Math.random() * 4;
    myTrip = Math.floor(Math.random() * 4 + 1);
    return myNumber; 
} 


randomlySelectMyTrip() = generateTrip(myNumber);



// Example : if (userselection === 1)
//regenerate destination, then generate new random number, call on dest array , then put
//new generated number,
