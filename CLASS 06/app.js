// // Chapter 21-25

document.write('<center><h1>Chapter No. 21-25 </h1></center>');

// //  Q 01

var fristName = prompt("Enter your Frist Name");

var lastname = prompt("Enter your last Name");

var Fullname =  fristName + " " + lastname;

document.write("<h1>Q 01 </h1>" +"Hyee " + Fullname + " !<br> <br>");

// //  Q 02

var fvtMobile = prompt("Enter your Favorite mobile phone model.");

document.write("<h1>Q 02 </h2> 1. favorite mobile is:  "+ fvtMobile+ "<br>");

document.write("2. Length of String: "+ fvtMobile.length +"<br>");

// //  Q 03



    var wordCountry = "Pakistani";

    var index = wordCountry.indexOf("n");

   document.write("<br><h1>Q 03</h1> 1. String " + wordCountry);
    document.write("<br>2. index no : " + index);


// // Q 04


var Hello = "Hello World";

var indexhello = Hello.lastIndexOf("l");

document.write("<br><h1>Q 04</h1> 1. String :" + Hello);
document.write("<br>2. index no : " + indexhello);

// // Q 05


 var   words = "Pakistani";
 var  character = words.charAt(3);


document.write("<br><h1>Q 05</h1>1. String : " + words)
document.write("<br> 2. Character at index 3 is: " + character);


// // Q 06

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
document.write("<h1>Q 06</h1>Hello, " + fullName + "! Welcome.");



// // Q 07

    var city = "Hyderabad";
  
    var update = city.replace("Hyder", "Islam");

    document.write("<h1>Q 07</h1> 1. City : "+city);
    document.write("<br>2. After Replacement is : "+ update);


// // Q 08


var msg = "Ali and Sami are best friends. They play cricket and football together.";

var newMsg = msg.replace(/and/g, "&");

document.write('<h1>Q 08</h1> 1) <i>' + newMsg + "</i>");


// // Q 09



var strt = "472";

var Num = Number(strt);


document.write("<h1>Q 09</h1> Value: " + strt + " <br> Type: " + typeof strt + "<br>");
document.write("Value: " + Num + " <br> Type: " + typeof Num);


// // Q 10


var userInput = prompt("Please enter some text:");

var upperCaseText = userInput.toUpperCase();

document.write("<h1>Q 10</h1> User input: " + userInput+'<br>'+ "Uppercase is: " + upperCaseText);


// // Q 11

var input = prompt("Enter your js full form");

var firstChar = input.slice(0, 1).toUpperCase();

var remainChar = input.slice(1).toLowerCase();

var updateInput = firstChar + remainChar;

document.write('<h1>Q 11</h1> User input: ' + input+'<br>'+ "Tittle case : " + updateInput);




// // Q 12


var numdecimal = 35.36;
var NumStr = numdecimal.toString();
var resultfinal = NumStr.replace('.', '');
document.write('<h1>Q 12</h1> Number: ' + numdecimal+ "<br> Result : " + resultfinal);

// Q 13
//  sir ne chorne ka bola hai


// // Q 14


arr  = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

var searchTerm = userInput.toLowerCase();

var foundIndex = arr.findIndex(arr => arr.toLowerCase() === searchTerm);

if (foundIndex !== -1) {
  document.write("<h1>Q 14</h1>"+userInput +' is <b>available</b>  at index '+ foundIndex +' in our bakery.');
}  

else {
  document.write("<h1>Q 14</h1> We are sorry."+ userInput+" is not available in our bakery.");
}



 
// // Q 15


// not a answer


// Q 16


var university = "<h1>Q 16</h1>U<br>n<br>i<br>v<br>e<br>r<br>s<br>i<br>t<br>y<br><br> o<br>f <br><br>K<br>a<br>r<br>a<br>c<br>h<br>i";
var universityArray = university.split(" ");

document.write(university);



// Q 17


var inputString = prompt("Please enter a string:");
var lastChar = inputString.charAt(inputString.length - 1)

document.write('<h1>Q 17</h1><b>User Input</b>: '+ inputString + '<br>')
document.write("<b>The last character is</b>: " + lastChar + '<br>');


// Q 18


var abc = "The quick brown fox jumps over the lazy dog";
var words = abc.split(" ");
var count = words.filter(word => word === "the").length;

document.write('<h1>Q 18</h1>Text: '+ abc +"<br>")
document.write("There are "+ count + ' occurrences of word “the”');
      


//     End 


//Chapter 26 to 30

document.write('<center><h1>Chapter No. 26-30</h1></center>');


// Q 01



var userInput = +prompt("Enter a positive integer:");
var num = parseFloat(userInput);

if (num > 0) {
  document.write('<h1>Q 01</h1>'+"<b>Number:</b>" + num +'<br>');
  document.write('<b>Round off value:</b>'+ Math.round(num)+' <br>');
  document.write("<b>Floor value:</b>"+ Math.floor(num)+ "<br>");
  document.write("<b>Ceil value:</b>"+ Math.ceil(num) +"<br>");
} else {
  document.write("Please enter a valid positive number.");
}



// Q 02

var usernput = -prompt("Enter a positive integer:");
var numb = parseFloat(usernput);

if (numb > 0) {
  document.write('<br><h1>Q 02</h1>'+"<b>Number:</b>" + -numb +'<br>');
  document.write('<b>Round off value:</b>'+ Math.round(-numb)+' <br>');
  document.write("<b>Floor value:</b>"+ Math.floor(-numb)+ "<br>");
  document.write("<b>Ceil value:</b>"+ Math.ceil(-numb) +"<br>");
} else {
  document.write("Please enter a valid positive number.");
}


// Q 03



var num3 = prompt("Enter a number:");


document.write('<br><h1>Q 03</h1>The absolute value of '+num3 +'is ' +Math.round(-num3));


// Q 04


var numdic = Math.floor(Math.random() * 6) + 1;

document.write('<br><h1>Q 04</h1>You rolled a '+numdic);



// Q 05 


var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

document.write(`<h2>Coin Toss Result: ${coinToss}</h2>`);



// Q 06


var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write(`<h2>Random Number (1-100): ${randomNumber}</h2>`);


// Q 07



var userWeight = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
var weight = parseFloat(userWeight);

if (!isNaN(weight)) {
  document.write('<br><h1>Q 07</h1>Your weight is:'+ weight+ 'kg');
} else {
  document.write("Invalid input. Please enter a valid weight.");
}


// Q 08

var pronum = prompt("Enter a numb ")

var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("<br><h1>Q 07</h1>Random number between 1 and 100: "+randomNumber);



//     End 


//Chapter 31 to 35

document.write('<center><h1>Chapter No. 31-35</h1></center>');


// Q 01


var now = new Date();

document.write("<br><h1>Q 01</h1>" + now);


// // Q 02


var Months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var MonthIndex = new Date().getMonth();

document.write("<br><h1>Q 02</h1>Current Month: " + Months[MonthIndex]);


// // Q 03



var days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];


var DayIndex = new Date().getDay();

var shortDay = days[DayIndex].slice(0, 3);

document.write("<br><h1>Q 03</h1>Today is: " + shortDay);


// // Q 04

var today = new Date();
var day = today.getDay();

if (day === 0 || day === 6) {
  document.write("<br><h1>Q 04</h1>It's Fun day");
} else {
  document.write("<br><h1>Q 04</h1>It's a regular day");
}


// // // Q 05


var currentDate = new Date().getDate();

if (currentDate < 16) {
  document.write("<br><h1>Q 04</h1>First fifteen days of the month");
} else {
  document.write("<br><h1>Q 05</h1>Last days of the month");
}

// // // Q 06

var msSinceEpoch = Date.now();
var minutesSinceEpoch = msSinceEpoch / (1000 * 60);

document.write("<br><h1>Q 06</h1>Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);



// // // Q 07

var currentHour = new Date().getHours(); 

if (currentHour < 12) {
  alert("Q 07 \n Its AM");
} else {
  alert("Q 07 \n Its PM");
}



// // // Q 08


var laterDate = new Date(2020, 12, 0);
document.write("<br><h1>Q 08</h1>Later Date:", laterDate);



// // // Q 09


var firstRamadan = new Date("June 18, 2015");
var now = new Date();

var diffInMs = now - firstRamadan;
var daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

document.write("<br><h1>Q 09</h1>Days passed since 1st Ramadan (June 18, 2015): " + daysPassed);




// // // Q 10


var beginning2015 = new Date("January 1, 2015");
var curtTime = new Date();

var secondsElapsed = Math.floor((curtTime - beginning2015) / 1000);

document.write("<br><h1>Q 09</h1> Seconds elapsed between January 1, 2015 and now: " + secondsElapsed);


// // // Q 11

var newDate = new Date();

var hours = newDate.getHours();
console.log("Current Hours:", hours);

newDate.setHours(newDate.getHours() + 1);

document.write("<br><h1>Q 09</h1> Date after adding one hour: " + currentDate);



// // // Q 12


var pastDate = new Date();

pastDate.setFullYear(pastDate.getFullYear() - 100);

alert("Q 12 \n Date 100 years back: " + pastDate);




// // // Q 13

var ageInput = prompt("Please enter your age:");

var age = parseInt(ageInput, 10);

var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

document.write("<br><h1>Q 09</h1> Your birth year is: " + birthYear);



// // // Q 13


var Name = prompt("Enter Customer Name:");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var bMonth = months[new Date().getMonth()];
var numberOfUnits = parseFloat(+prompt("Enter Units  Number of:"));
var chrgeperUnit = parseFloat(+prompt("Enter Per Unit Charges:"));
var paymentcharge = +prompt("Enter  Payment charge:");
var AmountPayable = (numberOfUnits * chrgeperUnit);
var totalAmount = (parseFloat(AmountPayable) + paymentcharge);

document.write("<h1>K-Electric Bill</h1>");
document.write("<br>Customer Name: " + Name );
document.write("<br>Current Month: " + bMonth );
document.write("<br>Number of Units: " + numberOfUnits );
document.write("<br>Charges per Unit: " + chrgeperUnit+ "</p>");
document.write("<br>Net Amount Payable (within Due Date): " + AmountPayable );
document.write("<br>Late Payment Surcharge: " + paymentcharge);
document.write("<br>Gross Amount Payable (after Due Date): " + totalAmount  );
