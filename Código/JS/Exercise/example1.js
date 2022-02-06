let first_name = 'Diogo';
let last_name = 'Franca';

let name = first_name + ' ' + last_name;
let age = {day: 26, month: 04, year: 1999};

console.log("What is your name?");
console.log(first_name);

console.log("What is your full name?");
console.log(name);

console.log("ok, how old are you?");

let today = {day: 13, month: 10, year: 2019};

let days = (today.year - age.year) * 365;
    console.log(days);

    let Month = today.month;
    
    while(Month != 0){
        if(Month == 01){
            days += 31;
        }

        if(Month == 02){
            days += 28;
        }

        if(Month == 03 || Month == 05 || Month == 07|| Month == 08 || Month == 10 || Month == 12){
            days += 31;
        }

        if(Month == 04 || Month == 06 || Month == 09 || Month == 11){
            days += 30;
        }

        console.log(Month);
        Month--;
    }
    
    days += age.day;
    console.log(days);
 
