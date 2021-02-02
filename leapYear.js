const isLeapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);
console.log(isLeapYear(2016));

function isLeap(year) {
    return new Date(year, 1, 29).getDate() === 29;
  }


  const checkbox = isLeap(1700);
  console.log(checkbox);


//   function leapYear(years){
    
//     if (years/400){
//       result = true
//     }
//     else if(years/100){
//       result = false
//     }
//     else if(years/4){
//       result= true
//     }
//     else{
//       result= false
//     }
//     return result
//  }

//  const checkbox = leapYear(1700);
//  console.log(checkbox);
