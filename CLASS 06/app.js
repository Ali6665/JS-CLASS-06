// Chapter 21-25

//  Q 01

// var fristName = prompt("Enter your Frist Name");

// var lastname = prompt("Enter your last Name");

// var Fullname =  fristName + " " + lastname;

// document.write("<h1>Q 01 </h1>" +"Hyee " + Fullname + " !<br> <br>");

//  Q 02

// var fvtMobile = prompt("Enter your Favorite mobile phone model.");

// document.write("<h1>Q 02 </h2> 1. favorite mobile is:  "+ fvtMobile+ "<br>");

// document.write("2. Length of String: "+ fvtMobile.length +"<br>");

//  Q 03


//     var wordCountry = "Pakistani";

//     var index = wordCountry.indexOf("n");

//    document.write("<br><h1>Q 03</h1> 1. String " + wordCountry);
//     document.write("<br>2. index no : " + index);


// Q 04


// var Hello = "Hello World";

// var indexhello = Hello.lastIndexOf("l");

// document.write("<br><h1>Q 03</h1> 1. String :" + Hello);
// document.write("<br>2. index no : " + indexhello);

// Q 05


//  var   words = "Pakistani";
//  var  character = words.charAt(3);


// document.write("<br><h1>Q 01</h1>1. String : " + words)
// document.write("<br> 2. Character at index 3 is: " + character);


// Q 06

// function repeatString(str, times) {
//     var result = ""; 
//     for (var i = 0; i < times; i++) {
//       result = result.concat(str); 
//     }
//     return result;
//   }
  
  
//   console.log(repeatString("Hello ", 2));


// Q 07

    // var city = "Hyderabad";
  
    // var update = city.replace("Hyder", "Islam");

    // document.write("<h1>Q 07</h1> 1. City : "+city);
    // document.write("<br>2. After Replacement is : "+ update);


// Q 08


// var msg = "Ali and Sami are best friends. They play cricket and football together.";

// var newMsg = msg.replace(/and/g, "&");

// document.write('<h1>Q 08</h1> 1) <i>' + newMsg + "</i>");


// Q 09



// var str = "472";

// var num = Number(str);


// document.write("<h1>Q 09</h1> Value: " + str + " <br> Type: " + typeof str + "<br>");
// document.write("Value: " + num + " <br> Type: " + typeof num);


// Q 10


// var userInput = prompt("Please enter some text:");

// var upperCaseText = userInput.toUpperCase();

// document.write("<h1>Q 10</h1> User input: " + userInput+'<br>'+ "Uppercase is: " + upperCaseText);


// Q 11

// var input = prompt("Enter your js full form");

// var firstChar = input.slice(0, 1).toUpperCase();

// var remainChar = input.slice(1).toLowerCase();

// var updateInput = firstChar + remainChar;

// document.write('<h1>Q 11</h1> User input: ' + input+'<br>'+ "Tittle case : " + updateInput);



// Q 12


// var numdecimal = 35.36;
// var NumStr = numdecimal.toString();
// var resultfinal = NumStr.replace('.', '');
// document.write('<h1>Q 11</h1> Number: ' + numdecimal+ "<br> Result : " + resultfinal);



// Q 14


// arr  = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

// var searchTerm = userInput.toLowerCase();

// var foundIndex = arr.findIndex(arr => arr.toLowerCase() === searchTerm);

// if (foundIndex !== -1) {
//   alert("<h1>Q 01</h1>"+userInput +' is <b>available</b>  at index '+ foundIndex +' in our bakery.');
// }  

// else {
//   alert(`We are sorry. ${userInput} is not available in our bakery.`);
// }



 
// Q 15


function getPassword() {
  let password = prompt("Enter your password:");
  if (validatePassword(password)) {
    alert("Password accepted.");
  } else {
    alert("Invalid password. Please enter a valid password.");
    getPassword(); // recursively prompt again
  }
}

function validatePassword(pass) {
  if (pass.length < 6) return false;
  let firstCharCode = pass.charCodeAt(0);
  if (firstCharCode >= 48 && firstCharCode <= 57) return false;
  
  let hasLetter = false;
  let hasDigit = false;
  for (let i = 0; i < pass.length; i++) {
    let code = pass.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      hasLetter = true;
    } else if (code >= 48 && code <= 57) {
      hasDigit = true;
    }
  }
  
  return hasLetter && hasDigit;
}

getPassword();



