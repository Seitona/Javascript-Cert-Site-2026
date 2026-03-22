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
  },
{
  id: 22,
  title: 'QUESTION 22',
  lead: 'You are building a function to calculate the sales tax of an order.',
  code: `function salesTax(subtotal, salesTaxRate) {
    var salesTaxAmount = subtotal * salesTaxRate;
    return salesTaxAmount;
}`,
  prompt: 'How should you build the function?',
  choices: [
    'function salesTax(subtotal, salesTaxRate) { var salesTaxAmount = subtotal * salesTaxRate; return salesTaxAmount; }',
    'function salesTax() { return subtotal + salesTaxRate; }',
    'function tax(subtotal, rate) { return subtotal / rate; }',
    'function salesTax(subtotal) { return subtotal; }'
  ],
  answer: 0,
  explanation: 'The function multiplies subtotal by tax rate and returns the result.'
},
{
  id: 23,
  title: 'QUESTION 23',
  lead: 'You debug a webpage and receive a "qty not defined" error.',
  code: `function decQty(field) {
    qty--;
    document.getElementById(field).value = qty;
}`,
  prompt: 'What are two possible solutions?',
  choices: [
    'Declare qty in decQty AND move qty above incQty',
    'Add error checking AND force numeric values',
    'Use parseInt AND console.log',
    'Only declare qty globally'
  ],
  answer: 0,
  explanation: 'qty must be defined either locally or globally before use.'
},
{
  id: 24,
  title: 'QUESTION 24',
  lead: 'You want to loop through an array to display items as a bulleted list.',
  code: `for (var i = 0; i < productList.length; i++) {
  document.getElementById('tuningList').innerHTML += "<li>" + productList[i] + "</li>";
}`,
  prompt: 'Which loop type is correct?',
  choices: [
    'for loop',
    'while loop',
    'do...while loop',
    'forEach only'
  ],
  answer: 0,
  explanation: 'A for loop is best for iterating a known-length array.'
},
{
  id: 25,
  title: 'QUESTION 25',
  lead: 'You are building a loop to display dates between two dates.',
  code: `do {
  document.getElementById("programList").innerHTML += "<li>" + programDate + "</li>";
  programDate.setDate(programDate.getDate() + 1);
} while (programDate < programEndDate);`,
  prompt: 'Which loop structure is correct?',
  choices: [
    'do...while loop',
    'for loop',
    'while loop',
    'forEach loop'
  ],
  answer: 0,
  explanation: 'A do...while loop ensures the start date is always displayed at least once.'
},
{
  id: 26,
  title: 'QUESTION 26',
  lead: 'You are using a switch statement to assign discount percentages.',
  code: `switch(true) {
  case (orderAmt >= 10000):
    discountPct = .05;
  case (orderAmt >= 5000):
    discountPct = .02;
  case (orderAmt >= 2000):
    discountPct = .01;
  default:
    discountPct = .00;
}`,
  prompt: 'Why does discount return 0 for 20000?',
  choices: [
    'Break statements are missing',
    'Switch syntax is wrong',
    'Comparison operators are wrong',
    'Default executes first'
  ],
  answer: 0,
  explanation: 'Without break, execution falls through all cases to default.'
},
{
  id: 27,
  title: 'QUESTION 27',
  lead: 'You are assigning a customer message based on order amount.',
  code: `if (orderAmt > 300) {
  customerMsg = "Thank you! You will get $10 off of your next order.";
} else if (orderAmt >= 100) {
  customerMsg = "Thank you! You will get $5 off of your next order.";
} else {
  customerMsg = "Thank you!";
}`,
  prompt: 'Which structure is correct?',
  choices: [
    'if / else if / else',
    'switch only',
    'nested loops',
    'try/catch'
  ],
  answer: 0,
  explanation: 'Conditional branching is required based on ranges.'
},
{
  id: 28,
  title: 'QUESTION 28',
  lead: 'You are determining activity based on weather conditions.',
  code: `if (temp >= 70 && weather == "clear") {
  activity = "golf";
} else if (temp < 50 || weather != "clear") {
  activity = "bowling";
} else {
  activity = "hiking";
}`,
  prompt: 'Which operators are used correctly?',
  choices: [
    '>=, &&, ==, <, ||, !=',
    '>, ||, ==',
    '<=, &&, !=',
    '==, && only'
  ],
  answer: 0,
  explanation: 'Correct combination of comparison and logical operators.'
},
{
  id: 29,
  title: 'QUESTION 29',
  lead: 'You are matching operators to their meanings.',
  code: `<= , != , || , &&`,
  prompt: 'Which mapping is correct?',
  choices: [
    '<= less than or equal, != not equal, || OR, && AND',
    '<= greater than, != equal, || AND, && OR',
    '<= equal, != less, || XOR, && NAND',
    '<= OR, != AND, || equal, && not'
  ],
  answer: 0,
  explanation: 'These are the correct logical and comparison operator meanings.'
},
{
  id: 30,
  title: 'QUESTION 30',
  lead: 'You are working with arrays and modifying values.',
  code: `locations = ["North", "South", "East", "West"];
newLocations = [];
locations.sort();
locations[0] = "HQ";
numberOfLocations = locations.length;`,
  prompt: 'Which statements are correct?',
  choices: [
    'Array declaration, empty array, sort(), index assignment, length',
    'Only push and pop are needed',
    'Use objects instead',
    'Use loops instead'
  ],
  answer: 0,
  explanation: 'All operations shown are correct array manipulations.'
},
{
  id: 31,
  title: 'QUESTION 31',
  lead: 'You are modifying an array using different methods.',
  code: `pop(), push(), shift(), unshift()`,
  prompt: 'Which mapping is correct?',
  choices: [
    'pop removes end, push adds end, shift removes start, unshift adds start',
    'pop adds, push removes, shift adds, unshift removes',
    'All do the same thing',
    'Only push works'
  ],
  answer: 0,
  explanation: 'These are standard array operations.'
},
{
  id: 32,
  title: 'QUESTION 32',
  lead: 'You are calculating the area of a circle.',
  code: `function getArea(radius) {
  var cirArea;
  cirArea = Math.PI * Math.pow(radius, 2);
  return cirArea;
}`,
  prompt: 'Which formula is correct?',
  choices: [
    'Math.PI * Math.pow(radius, 2)',
    'radius * 2',
    'Math.PI + radius',
    'radius / 2'
  ],
  answer: 0,
  explanation: 'Area of a circle is πr².'
},
{
  id: 33,
  title: 'QUESTION 33',
  lead: 'You are displaying distance between rounded integers.',
  code: `Math.floor(distance)
Math.ceil(distance)`,
  prompt: 'Which methods are correct?',
  choices: [
    'Math.floor and Math.ceil',
    'Math.round only',
    'Math.abs only',
    'parseInt only'
  ],
  answer: 0,
  explanation: 'floor gives lower bound, ceil gives upper bound.'
},
{
  id: 34,
  title: 'QUESTION 34',
  lead: 'You are evaluating assignment operators.',
  code: `var x = 5;
var y = 3;
x++;
y = ++x;
x += y;
x--;`,
  prompt: 'Which values of x occur?',
  choices: [
    '6, 7, 14, 13',
    '5, 6, 7, 8',
    '6, 8, 10, 12',
    '7, 9, 11, 13'
  ],
  answer: 0,
  explanation: 'Step-by-step evaluation leads to x values: 6 → 7 → 14 → 13.'
},
{
  id: 35,
  title: 'QUESTION 35',
  lead: 'You are completing arithmetic operations.',
  code: `var x = 10;
var y = 3;

x / y
x % y
y % x
x + y * x
(x + y) * x`,
  prompt: 'Which operations match results?',
  choices: [
    'Division, modulus, modulus, precedence, grouped expression',
    'Only addition',
    'Only multiplication',
    'Only subtraction'
  ],
  answer: 0,
  explanation: 'Each operation demonstrates arithmetic behavior and operator precedence.'
},
// ===================== 36–49 =====================

{
  id: 36,
  title: 'QUESTION 36',
  prompt: 'Fill in the keywords to ask for a name and display a welcome message.',
  code: `function welcome() {
  var username = ___("Enter your name.");
  ___("Welcome, " + username + "!");
}`,
  choices: ['prompt & alert', 'alert & prompt', 'confirm & alert', 'prompt & confirm'],
  answer: 0,
  explanation: 'prompt() gets input, alert() displays output.'
},
{
  id: 37,
  title: 'QUESTION 37',
  prompt: 'Add correct comment symbols.',
  code: `var grandTotal = amount + shipping; ___ comment
___ multi-line start
comment text
___ multi-line end`,
  choices: ['//, /*, */', '/*, //, */', '//, //, //', '/*, */, //'],
  answer: 0,
  explanation: '// for single-line, /* */ for multi-line.'
},
{
  id: 38,
  title: 'QUESTION 38',
  prompt: 'Which alerts will display?',
  code: `try {
 var orderTotal = amount + salesTax;
 alert(ordertotal);
} catch(err) {
 alert(err.message);
} finally {
 alert("If there are no errors, you should have your total.");
}`,
  choices: [
    'Error message and final message',
    'Order total only',
    'Error only',
    'Order total and final message'
  ],
  answer: 0,
  explanation: 'ordertotal is undefined → error → catch + finally run.'
},
{
  id: 39,
  title: 'QUESTION 39',
  prompt: 'What is logged to console?',
  code: `var x = 5;
var y = 12;
var z = x * y;
console.log(z);`,
  choices: ['60', 'z', '12', '5'],
  answer: 0,
  explanation: '5 * 12 = 60.'
},
{
  id: 40,
  title: 'QUESTION 40',
  prompt: 'Reference external JS file in scripts folder.',
  choices: [
    '<script src="scripts/calculations.js"></script>',
    '<script href="scripts/calculations.js"></script>',
    '<link src="scripts/calculations.js">',
    '<js src="scripts/calculations.js">'
  ],
  answer: 0,
  explanation: 'Correct script tag uses src.'
},
{
  id: 41,
  title: 'QUESTION 41',
  prompt: 'Which variable names are valid?',
  choices: [
    '$alertMsg, alertMsg, alert_Msg',
    'alert Msg, alert',
    'alert Msg only',
    'alert only'
  ],
  answer: 0,
  explanation: 'No spaces, cannot use reserved words like alert.'
},
{
  id: 42,
  title: 'QUESTION 42',
  prompt: 'Build object and display property.',
  code: `car1 = ___
color: "blue",
type: "sedan"
___
"The featured car color is " + ___`,
  choices: [
    '{ }, car1.color',
    '[ ], car1[color]',
    '( ), car1.color',
    '{ }, color'
  ],
  answer: 0,
  explanation: 'Object uses {} and accessed via dot notation.'
},
{
  id: 43,
  title: 'QUESTION 43',
  prompt: 'Match variable types.',
  choices: [
    'territory → undefined, inStock → number, serialNumber → string, inProduction → boolean',
    'All strings',
    'All numbers',
    'All undefined'
  ],
  answer: 0,
  explanation: 'Based on declarations.'
},
{
  id: 44,
  title: 'QUESTION 44',
  prompt: 'Force variables to be declared.',
  choices: ['"use strict";', '"strict";', 'var strict;', 'enforce();'],
  answer: 0,
  explanation: 'Strict mode enforces variable declarations.'
},
{
  id: 45,
  title: 'QUESTION 45',
  prompt: 'Declare dates properly.',
  choices: [
    'new Date("October 2, 2017") and new Date()',
    'Date("October 2, 2017")',
    'new Date only',
    'string only'
  ],
  answer: 0,
  explanation: 'Date objects require new Date().'
},
{
  id: 46,
  title: 'QUESTION 46',
  prompt: 'Format number to 2 decimal places.',
  choices: ['toFixed(2)', 'round(2)', 'parseFloat()', 'toPrecision(2)'],
  answer: 0,
  explanation: 'toFixed formats decimals.'
},
{
  id: 47,
  title: 'QUESTION 47',
  prompt: 'Retrieve values from form inputs.',
  choices: [
    'getElementById().value',
    'getElementById().innerHTML',
    'getElementsByTagName().value',
    'querySelectorAll().value'
  ],
  answer: 0,
  explanation: 'Form inputs use .value.'
},
{
  id: 48,
  title: 'QUESTION 48',
  prompt: 'Retrieve all elements from first form.',
  choices: [
    'document.forms[0].elements',
    'document.forms[1].elements',
    'document.forms.elements',
    'document.getElementsByTagName("form")'
  ],
  answer: 0,
  explanation: 'First form index is 0.'
},
{
  id: 49,
  title: 'QUESTION 49',
  prompt: 'Convert text case.',
  choices: [
    'toUpperCase() and toLowerCase()',
    'toUpper() and toLower()',
    'upper() and lower()',
    'caseUpper() and caseLower()'
  ],
  answer: 0,
  explanation: 'Correct string methods.'
},

  {
    id: 50,
    title: 'Question 50',
    lead: 'Examine the following function:',
    code: `function getCityState() {\n  city = document.getElementById('city').value;\n  state = document.getElementById('state').value;\n}`,
    prompt: 'Which property is used to retrieve the value from a form input field?',
    choices: [
      'innerHTML',
      'value',
      'getAttribute("value")',
      'textContent'
    ],
    answer: 1,
    explanation: 'The .value property retrieves the current value entered in a form input field.'
  },

  {
    id: 51,
    title: 'Question 51',
    lead: '',
    prompt: 'Which statement about HTML output is TRUE?',
    choices: [
      'innerHTML must be used within document.write',
      'document.write is best for writing HTML to a new document',
      'innerHTML cannot read content between tags',
      'document.write and innerHTML work exactly the same way'
    ],
    answer: 1,
    explanation: 'document.write is best suited for writing HTML to a new document. innerHTML reads or sets content between HTML tags and does not require document.write.'
  },

  {
    id: 52,
    title: 'Question 52',
    lead: 'Examine the following code:',
    code: `for (i in car2) {\n  carOutput += car2[i] + " ";\n}`,
    prompt: 'What type of loop is being used to iterate over the object\'s properties?',
    choices: [
      'for...of loop',
      'for...in loop',
      'while loop',
      'forEach loop'
    ],
    answer: 1,
    explanation: 'The for...in loop iterates over the enumerable properties of an object, making it suitable for looping through object keys like those in car2.'
  },

  {
    id: 53,
    title: 'Question 53',
    lead: 'Examine the following form tag:',
    code: `<form action="thankyou.html" method="post" id="requestForm" onsubmit="checkFields();">`,
    prompt: 'Which attribute specifies where the form data is sent when submitted?',
    choices: [
      'method',
      'id',
      'action',
      'onsubmit'
    ],
    answer: 2,
    explanation: 'The action attribute specifies the URL where the form data is sent upon submission. The method attribute specifies how (get/post), and onsubmit runs a function on submit.'
  },

  {
    id: 54,
    title: 'Question 54',
    lead: '',
    prompt: 'Which HTTP method exposes form data in the URL?',
    choices: [
      'put method',
      'get method',
      'patch method',
      'post method'
    ],
    answer: 1,
    explanation: 'The GET method appends form data to the URL as query parameters, making it visible. POST sends data in the request body, keeping it hidden from the URL.'
  },

  {
    id: 55,
    title: 'Question 55',
    lead: 'Examine the following HTML:',
    code: `<body onload="saleItemByDay();">\n\n<button id="sale" onclick="showSaleItem();">Show another sale item</button>\n\n<img src="item.jpg"\n     onmouseover="doubleSize();"\n     onmouseout="restoreSize();"\n     alt="item" />`,
    prompt: 'Which event fires when the page finishes loading?',
    choices: [
      'onclick',
      'onmouseover',
      'onload',
      'onmouseout'
    ],
    answer: 2,
    explanation: 'The onload event fires when the page (or element) has fully loaded. onclick fires on click, onmouseover when the mouse enters, and onmouseout when it leaves.'
  },

  {
    id: 56,
    title: 'Question 56',
    lead: '',
    prompt: 'Which event fires when a user updates a value in a form field?',
    choices: [
      'onFocus',
      'onBlur',
      'onChange',
      'onKeyPress'
    ],
    answer: 2,
    explanation: 'onChange fires when a form field\'s value changes. onFocus fires when a field is selected, onBlur when it loses focus, and onKeyPress when a key is pressed.'
  },

  {
    id: 57,
    title: 'Question 57',
    lead: 'Examine the following function:',
    code: `function listItems() {\n  var itemList = ["Widget A","Widget C","Widget E"];\n\n  for (i = 0; i < itemList.length; i++) {\n    document.getElementById("list").innerHTML += itemList[i] + "<br />";\n  }\n}`,
    prompt: 'Which construct is used to iterate through all items in the array?',
    choices: [
      'while loop with itemList.size',
      'for loop with itemList.length',
      'for...in loop',
      'forEach with a callback'
    ],
    answer: 1,
    explanation: 'A standard for loop using itemList.length iterates through each index of the array. The .length property returns the number of elements in the array.'
  },

  {
    id: 58,
    title: 'Question 58',
    lead: 'Examine the following function:',
    code: `function setAltParaClass() {\n  document.getElementsByTagName("p")[0].setAttribute("class", "altPara");\n}`,
    prompt: 'Which method is used to apply a class to the first paragraph element?',
    choices: [
      'getElementById and className',
      'getElementsByTagName and setAttribute',
      'querySelector and classList.add',
      'getElementsByClassName and setAttribute'
    ],
    answer: 1,
    explanation: 'getElementsByTagName("p") returns all <p> elements; [0] selects the first one, and setAttribute("class", "altPara") applies the CSS class to it.'
  },

  {
    id: 59,
    title: 'Question 59',
    lead: '',
    prompt: 'Which statement about the DOM is TRUE?',
    choices: [
      'forms object is part of the window object',
      'getElementsByClassName is part of the document object',
      'open and close methods are part of the document object',
      'The DOM and window object are the same thing'
    ],
    answer: 1,
    explanation: 'getElementsByClassName is a method of the document object. The forms collection belongs to document, not window. open() and close() belong to window, not document.'
  },

  {
    id: 60,
    title: 'Question 60',
    lead: 'Examine the following function:',
    code: `function showBrowserSize() {\n  document.getElementById("size").innerHTML =\n    "Width: " + window.innerWidth +\n    " Height: " + window.innerHeight;\n}`,
    prompt: 'Which object provides the innerWidth and innerHeight properties for the browser viewport?',
    choices: [
      'document',
      'navigator',
      'window',
      'screen'
    ],
    answer: 2,
    explanation: 'The window object exposes innerWidth and innerHeight, which return the interior width and height of the browser viewport in pixels.'
  },

  {
    id: 61,
    title: 'Question 61',
    lead: 'Examine the following code:',
    code: `contestants = "Robin, Shawn, Patsy";\nwinner = contestants.substr(7,6);`,
    prompt: 'What is the value of winner after this code runs?',
    choices: [
      'S',
      'Shawn',
      'Shawn,',
      'hawn, P'
    ],
    answer: 2,
    explanation: 'substr(7, 6) starts at index 7 (the "S" in "Shawn") and extracts 6 characters: "Shawn," — including the comma that follows.'
  },

  {
    id: 62,
    title: 'Question 62',
    lead: '',
    prompt: 'Which HTML tag and attribute combination shows a popup message when the page loads?',
    choices: [
      '<body onload="alert(\'Welcome!\')">',
      '<head onload="alert(\'Welcome!\')">',
      '<body onopen="alert(\'Welcome!\')">',
      '<head onopen="alert(\'Welcome!)\'>">'
    ],
    answer: 0,
    explanation: 'The onload event on the <body> tag fires when the page finishes loading. The <head> tag does not support onload, and onopen is not a valid HTML event.'
  },

  {
    id: 63,
    title: 'Question 63',
    lead: 'Examine the following expression:',
    code: `Math.floor((Math.random() * 10) + 1);`,
    prompt: 'What range of integer values can this expression produce?',
    choices: [
      '0 to 9',
      '0 to 10',
      '1 to 10',
      '1 to 11'
    ],
    answer: 2,
    explanation: 'Math.random() returns [0, 1). Multiplying by 10 gives [0, 10). Adding 1 gives [1, 11). Math.floor then truncates to an integer, producing values 1 through 10 inclusive.'
  }
];
