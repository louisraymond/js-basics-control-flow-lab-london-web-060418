
  
  //if gives customers a free sample if the ride is less than or equal to 400 feet
  //charges 30 dollars for a distance over 2000 feet
  //does not allow rides over 2500 feet
 
function scuberGreetingForFeet(ride){
    let greeting="";
   if  (ride <=  400) {
      greeting= 'This one is on me!';
      }
      
     if (ride > 2000){
        greeting='I will gladly take your thirty bucks.'  
  }
      
      if (ride >2500) {
        greeting="No can do."
      }
  return greeting
    
}
  
  
function  ternaryCheckCity(city) {
  
  let response= city==="NYC" ? "Ok, sounds good." : "No go.";
  return response
}

function switchOnCharmFromTip(tip){
  if (tip)
//   //should return "Thank you so much." if the tip is generous ‣
// //AssertionError: expected undefined to equal 'Thank you so much.'
//   // at Context.<anonymous> (test/indexTest.js:30:51)
// should return "Thank you." if the tip is not as generous ‣
// AssertionError: expected undefined to equal 'Thank you.'
//     at Context.<anonymous> (test/indexTest.js:34:58)
// should return "Bye." if anything else ‣
// AssertionError: expected undefined to equal 'Bye.'
//     at Context.<anonymous> (test/indexTest.js:38:64)
}