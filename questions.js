const questions = [
  {
    id: 1,
    title: 'QUESTION 1',
    lead: 'You are creating a web page that tests a user’s ability to accurately type text. The validation should be case-insensitive.',
    code: `function validate() {
    var input = document.getElementById("tester").value;
    var text = document.getElementById("userText").innerHTML;

    if (input.toLowerCase() == text.toLowerCase()) {
        alert("Success");
    }
}`,
    prompt: 'How should you complete the code?',
    choices: [
      'value, innerHTML, toLowerCase(), toLowerCase()',
      'innerHTML, value, toLowerCase(), toLowerCase()',
      'value, innerHTML, toUpperCase(), toUpperCase()',
      'innerHTML, innerHTML, toLowerCase(), toLowerCase()'
    ],
    answer: 0,
    explanation: 'The input field uses value, the page text uses innerHTML, and both sides are converted with toLowerCase() for case-insensitive comparison.'
  },
  {
    id: 2,
    title: 'QUESTION 2',
    lead: 'You evaluate the following code and need to determine the values output by console.log().',
    code: `function change(student, course) {
    student = "JavaScript Student";
    course.name = "JavaScript";
    course.grade = 100;
}

var sampleCourse = { "name": "HTML", "grade": 90 };
var sampleStudent = "HTML Student";

change(sampleStudent, sampleCourse);
console.log(sampleStudent, sampleCourse.name, sampleCourse.grade);`,
    prompt: 'What are the final values for the three variables?',
    choices: [
      'sampleStudent = "HTML Student", sampleCourse.name = "JavaScript", sampleCourse.grade = 100',
      'sampleStudent = "JavaScript Student", sampleCourse.name = "JavaScript", sampleCourse.grade = 100',
      'sampleStudent = "HTML Student", sampleCourse.name = "HTML", sampleCourse.grade = 90',
      'sampleStudent = "JavaScript Student", sampleCourse.name = "HTML", sampleCourse.grade = 90'
    ],
    answer: 0,
    explanation: 'Strings are passed by value, so sampleStudent does not change. The object is modified through its reference.'
  },
  {
    id: 3,
    title: 'QUESTION 3',
    lead: 'A JavaScript array is initialized and then manipulated.',
    code: `var array = [20, 40, 60, 80];

array.shift();
array.pop();
array.push(10);
array.unshift(100);`,
    prompt: 'What is the final value of the array?',
    choices: [
      '[100, 40, 60, 10]',
      '[40, 60, 10]',
      '[100, 20, 40, 60]',
      '[20, 40, 60, 80]'
    ],
    answer: 0,
    explanation: 'shift removes 20, pop removes 80, push adds 10 to the end, and unshift adds 100 to the start.'
  },
  {
    id: 4,
    title: 'QUESTION 4',
    lead: 'You need to evaluate the data types returned by typeof.',
    code: `var n;
console.log(typeof n);

var a = "3.4";
console.log(typeof a);

var textArray = ["Welcome Back", "Enter a Name", "Incorrect Answer"];
console.log(typeof textArray);

var c = 2.4;
console.log(typeof c);

var tag = null;
console.log(typeof tag);`,
    prompt: 'Which sequence is correct?',
    choices: [
      'undefined, string, object, number, object',
      'undefined, string, array, number, null',
      'null, string, object, number, object',
      'undefined, string, object, string, object'
    ],
    answer: 0,
    explanation: 'typeof returns undefined for an uninitialized variable, string for text, object for arrays and null, and number for numeric values.'
  },
  {
    id: 5,
    title: 'QUESTION 5',
    lead: 'You need to round numbers to a specified number of decimal places.',
    code: `return value.toFixed(digits);`,
    prompt: 'Which function should you use?',
    choices: ['toPrecision', 'toString', 'toFixed', 'valueOf'],
    answer: 2,
    explanation: 'toFixed(digits) returns a number formatted with the specified number of digits after the decimal point.'
  },
  {
    id: 6,
    title: 'QUESTION 6',
    lead: 'You need to determine the results of the global and local multiply functions.',
    code: `"use strict";
var val1 = 25;
var val2 = 4;

function multiply() {
    return val1 * val2;
}

console.log("Global multiply returns(): " + multiply());
multiply();

function getProduct() {
    var val1 = 2;
    var val2 = 3;

    function multiply() {
        return val1 * val2;
    }

    return multiply();
}`,
    prompt: 'Which answer is correct?',
    choices: ['Line 09 → Yes, Line 19 → No', 'Line 09 → Yes, Line 19 → Yes', 'Line 09 → No, Line 19 → Yes', 'Line 09 → No, Line 19 → No'],
    answer: 0,
    explanation: 'The global multiply returns 25 * 4 = 100. The inner multiply in getProduct returns 2 * 3 = 6, not 100.'
  },
  {
    id: 7,
    title: 'QUESTION 7',
    lead: 'You are creating a JavaScript function that returns a date the specified number of months in the future of the current date.',
    code: `function adjustMonth(value) {
    var date = new Date();
    var month = date.getMonth();
    date.setMonth(month + value);
    return date;
}`,
    prompt: 'How should you complete the code?',
    choices: [
      'new Date(), date.getMonth(), date.setMonth(month + value)',
      'Date(), getMonth(), setMonth()',
      'new Date(), getMonth(), setMonth()',
      'Date.now(), month(), date.setMonth()'
    ],
    answer: 0,
    explanation: 'Create a Date object, get the current month, then set the month using the adjusted value.'
  },
  {
    id: 8,
    title: 'QUESTION 8',
    lead: 'You are writing a script that initializes an array, fills it with random integers, and adds every other number starting with the first element.',
    code: `var numbers = [];

for (var i = 0; i < 10; i++) {
    numbers.push(Math.round(Math.abs(Math.random() * 10)));
}

var sum = 0;

for (var j = 0; j < 10; j+=2) {
    sum += numbers[j];
}

console.log(sum);`,
    prompt: 'Which sequence correctly fills the blanks?',
    choices: [
      '[], push, j+=2, numbers[j]',
      '[], pop, j++, numbers[j]',
      '(), push, j+=2, numbers(i)',
      '[], push, j++, numbers[j]'
    ],
    answer: 0,
    explanation: 'The array starts as [], values are added with push, the loop advances by 2, and the indexed value is numbers[j].'
  },
  {
    id: 9,
    title: 'QUESTION 9',
    lead: 'You need to determine the data type of each variable.',
    code: `var flightDestination = "Denver";
var flight = 5;
var roundTrip = 2489.58;
var onTime = true;
var id = flight + flightDestination;`,
    prompt: 'What is the data type of id?',
    choices: ['String', 'Number', 'Boolean', 'Object'],
    answer: 0,
    explanation: 'Adding a number and a string results in a string.'
  },
  {
    id: 10,
    title: 'QUESTION 10',
    lead: 'You are evaluating Math functions.',
    code: `var ceil = Math.ceil(100.5);
var floor = Math.floor(100.5);
var round = Math.round(100.5);`,
    prompt: 'What is the final value of round?',
    choices: ['100', '101', '99', '102'],
    answer: 1,
    explanation: 'Math.round(100.5) rounds to 101.'
  },
  {
    id: 11,
    title: 'QUESTION 11',
    lead: 'You are initializing a Date object for January 1, 2017.',
    code: `var date = new Date(2017, 0, 1);`,
    prompt: 'What month value represents January?',
    choices: ['0', '1', '12', '-1'],
    answer: 0,
    explanation: 'JavaScript months are zero-based, so January is 0.'
  },
  {
    id: 12,
    title: 'QUESTION 12',
    lead: 'You are completing conditional logic for weather and fuel rules.',
    code: `if (temperature > 65 && !raining)
    advice = "Ride Bike";
else if (fuelTank <= .5)
    advice = "Take Train";
else
    advice = "Drive your car";`,
    prompt: 'Which operators are correct?',
    choices: ['&& and <=', '|| and >', '&& and >', '|| and <='],
    answer: 0,
    explanation: 'Use && for both conditions being true, and <= for half a tank or less.'
  },
  {
    id: 13,
    title: 'QUESTION 13',
    lead: 'You are writing a function that calculates ticket price by age.',
    code: `function ticketPrice(age) {
    var price = 20;

    if (age < 5 || age >= 65) {
        price = 0;
    }

    if (age >= 5 && age < 18) {
        price = 10;
    }

    return price;
}`,
    prompt: 'Which conditions are correct?',
    choices: [
      'age < 5 || age >= 65, and age >= 5 && age < 18',
      'age < 5 && age >= 65, and age >= 5 || age < 18',
      'age <= 5 || age > 65, and age > 5 && age <= 18',
      'age < 5, and age < 18'
    ],
    answer: 0,
    explanation: 'Free entry is for under 5 or 65 and older. The discounted range is 5 through 17.'
  },
  {
    id: 14,
    title: 'QUESTION 14',
    lead: 'You need to complete a switch statement for Wednesday discounts.',
    code: `function getDiscount(day) {
    var discount = 0;

    switch (day) {
        case "Wednesday":
            discount = .1;
            break;
        default:
            discount = 0;
            break;
    }

    return discount;
}`,
    prompt: 'Which line set is correct?',
    choices: [
      'switch(day), case "Wednesday":, default:',
      'if(day), else if "Wednesday", else:',
      'switch(day), if "Wednesday":, otherwise:',
      'case(day), case "Wednesday":, default:'
    ],
    answer: 0,
    explanation: 'The correct structure is switch(day), case "Wednesday":, and default:.'
  },
  {
    id: 15,
    title: 'QUESTION 15',
    lead: 'You are evaluating loop flow control.',
    code: `for (i = 0; i < list.length; i++) {
    if (list[i] == null)
        continue;

    if (list[i] == 'orange') {
        alert('found');
        break;
    }
}`,
    prompt: 'Which keywords are used to skip null and exit when orange is found?',
    choices: ['for, continue, break', 'while, continue, stop', 'forEach, skip, break', 'for, pass, exit'],
    answer: 0,
    explanation: 'The loop is a for loop, continue skips the current iteration, and break exits the loop.'
  },
  {
    id: 16,
    title: 'QUESTION 16',
    lead: 'You are completing a countdown loop.',
    code: `function countdown(start) {
    for (var i = start; i >= 0; --i) {
        console.log(i);
    }
}`,
    prompt: 'Which loop parts are correct?',
    choices: ['var i = start, i >= 0, --i', 'var i = 0, i <= start, ++i', 'i = start, i > 0, i++', 'var i = start, i > 0, ++i'],
    answer: 0,
    explanation: 'The counter starts at start, continues while i is at least 0, and decrements with --i.'
  },
  {
    id: 17,
    title: 'QUESTION 17',
    lead: 'You are completing a calendar switch statement.',
    code: `var daysInMonth;
var month;

month = new Date().getMonth();

switch (month) {
    case 1:
        daysInMonth = 28;
        break;

    case 3:
    case 5:
    case 8:
    case 10:
        daysInMonth = 30;
        break;
}`,
    prompt: 'Which answers complete the code?',
    choices: ['switch(month), break, break', 'switch(date), continue, break', 'if(month), break, continue', 'switch(month), continue, continue'],
    answer: 0,
    explanation: 'The code uses switch(month) and both answer groups end with break.'
  },
  {
    id: 18,
    title: 'QUESTION 18',
    lead: 'You are evaluating a function that performs safe division.',
    code: `function isSafeDivide(numerator, denominator) {
    if (denominator = 0) {
        return false;
    } else {
        return true;
    }
}`,
    prompt: 'Which statement pair is correct?',
    choices: [
      'Always return false → No, operator should be != → No',
      'Always return false → Yes, operator should be != → Yes',
      'Always return false → Yes, operator should be != → No',
      'Always return false → No, operator should be != → Yes'
    ],
    answer: 0,
    explanation: 'The provided analyzed answer is No for both statements.'
  },
  {
    id: 19,
    title: 'QUESTION 19',
    lead: 'Variable x has a value of 5. Variable y has a value of 7.',
    code: `x = 5;
y = 7;

x < 7 && y > 6
x == 6 || y == 6
x !== 7
!(x == y)`,
    prompt: 'Which sequence is correct?',
    choices: ['True, False, True, True', 'False, False, True, True', 'True, True, True, False', 'True, False, False, True'],
    answer: 0,
    explanation: 'These expressions evaluate to True, False, True, and True.'
  },
  {
    id: 20,
    title: 'QUESTION 20',
    lead: 'You are developing a web page that uses popup boxes.',
    code: `prompt();
alert();
confirm();`,
    prompt: 'Which popup function is used for user input?',
    choices: ['prompt', 'alert', 'confirm', 'messageBox'],
    answer: 0,
    explanation: 'prompt collects input from the user. alert shows a message, and confirm shows an OK/Cancel dialog.'
  },
  {
    id: 21,
    title: 'QUESTION 21',
    lead: 'You are designing a function that performs unit tests using eval and handles exceptions.',
    code: `function unitTest(expression) {
    try {
        eval(expression);
    } catch (err) {
        alert("The function does not exist.");
    }
}`,
    prompt: 'Which keywords complete the exception handling block?',
    choices: ['try, catch (err)', 'if, else', 'while, catch', 'try, finally'],
    answer: 0,
    explanation: 'The exception handling block uses try and catch (err).'
  }
];