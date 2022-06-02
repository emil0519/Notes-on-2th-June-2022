Javascript notes  
 
// String
-words that are not proceed by engine
	e.g.: “abc”
Formatting
JS is loosely typed language, therefore string of words and numbers can be add up
	e.g. ‘abc’+1 —> abc1
Index of string: 0 is the first character of string 
	e.g. ‘abc’[0]  —> a
The last character in string equals to string.length-1

Escape of string: Mainly use to
Formating: \n=new line, \t=new tab must use it inside a string
	e.g. ‘Hello\n\tworld’ —>
Hello
	World
Conversion 
Number(‘’) 
—> convert to number
String(‘’)

Function for string
.length
.toLowerCase()
.toUpperCase()
=== —> compare string, case sensitive 
string_name[2] —> access to second index of the string, start counting at 0
var_name.indexOf(‘words you wanna find’);—> return the index of word, starting from……, if case mismatch then return -1
var_name.startsWith(‘words)—> see if it start with this word
var_name.endsWith(‘words)—> see if it start with this word

const name= ‘Emil Lau’;
const array= Array.from(name);

const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthList.split(","); // `,` is the separator in monthList.
console.log(months[0]);  // "Jan"

const song=‘Honky Tonk’;
song.indexOf(‘onk’);//1
—> searching for the index in string, case sensitive 

—> check the start and end of string
const song = "Honky Tonk Women";

console.log(song.startsWith("Honk")); // true
console.log(song.startsWith("honk")); // false
console.log(song.endsWith("men")); // true
console.log(song.endsWith("Men")); // false




// Variable
 numbers that are proceed by engine, need definition
	var= 1
Variable should be name in clear way where one can identify the content easily, if one or more words are needed, each space should be replaced by capital letter
	varemilIsGreat=1

.toFixed() —> round up numbers, but will return in string 
Number(var)—> turn a variable/array with string into number

Booleans:
console.log(string or variable)= command the engine to print the message in a condition
if/else= create a condition with variables
	e.g. var a=1
var b=2
If (a>b)
	console.log(‘a is greater than b’)
else
	console.log(‘b is greater than a’)
== mean comparison
=== mean strict comparison, it’s becuz of type conversion, meaning that javascript converse the meaning into same type first before another move, and strict comparison avoid such conversion
Example of conversion is 1 equals to true, 0 or ‘’equals to false

//Loop

!== --> strict non-equality operator

; equals to commas, without it, two command clashes 

‘ ‘ space in javascript

var.toFixed(decimal number you want to round)

{} code inside this bracket will run in certain condition

Interaction with user
prompt() —> always return string variable, can turn to number through Number()
altert()

//Logic

Else if statement
if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}

More than one condition

var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
  console.log("go to the park");
}

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -325;
var checkBalance = true;
var isActive = true;

//if/ else if 順序：else if是指當if是false時，才會用到else if，所以如果有一個條件是要先滿足，就要放前面，如能夠被3及5整除的數字//

if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.");
    } 
    else if (isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }  
} 
else {
  console.log("Thank you. Have a nice day!");
}

Ternary operator
var isGoing = false;
var color = isGoing ? "green" : "red";
console.log(color)
//green= true, red= false”
—> red

Switch and break

var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;

First line define the value of option
Then switch means if option===3 { then the following action is:
Case is what to print when option = a value
if not break- it prints everything after 3
Break is halting the machine to print more

var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

Default will run if no value meets the condition

switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
        break;
}


console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");

Loops

While loop

Set a condition, and let the computer perform actions under this condition
var x=1;
while (x <=100) {
    console.log(x+ "hey")
    x= x+3
}

For loop
var x=0;
for ( start; stop; step ) { 
// do this thing 
}

for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}

Nested for loop
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}

Inner loop will run completely before outer loop run for one time

Increment or decrement operators
x++ or ++x // same as x = x + 1 (x++ and ++x have differences)
x++, already add but show later, ++x show you first
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5


3 ways to declare variables
Var x= 1 —> only global or local declaration, can be use anywhere
let a =10
a=9
—> can modify the value directly, can be block, local and global , can only be used in the function or boolean, if referring outside the boolean, then variable is undefined
e.g. 
let a = 10;
    function f() {
        if (true) {
            let b = 9
 
            // It prints 9
            console.log(b);
        }
 
        // It gives error as it
        // defined in if block
        console.log(b);
    }
    f()
 
    // It prints 10
    console.log(a)

const a=10 
Function f() {
	a=9
	console.log(a)
}
	f();
—> error, becuz constant can’t be changed, other than 

3 scope in JS
Global- can apply to everywhere
Local- specifically in a function, if define a variable through let inside a function, then var only exist inside it
Block- specifically in a boolean (need to clarify)

//Logical operators
&&= AND
||= OR
!= NOT
?true statement : false statement;

Formatting
var.toLocaleString(en-us) 

//Function

1. How a loop effect a function?
2. How a function could be placed in other function?

1.
function makeLine(length) {
  var line = "";
// function is in a different scope, so we need to declare a new variable inside a function first//
  for (var j = 1; j <= length; j++) {
    line += "* "
//after declaring a variable, when we want the loop to do something, the same variable have to be mentioned again, in the form of variable= (something to do), in this case line+=“*” equals to line= line+”*”, which means line=“*”//
//this is control by the loop when it’s under the bracket//
  }
  return line + "\n";
// additional order to the function//
}

2.
function buildTriangle(length){
// setting parameters as the same//
    var tri='';
//declare an empty function first//
    var number=1;
// can declare a function, then use in loop//
    for (number=1; number<=length; number++){
//condition base on the function declare above, can also apply the paramter//
        tri= tri+makeLine(number);
//again, to make the loop perform something, return to the variable we just declared//
    }
    return tri;
//no additional command in needed in the case//
}
    console.log(buildTriangle(3));
//for ordering the loop to do something, use the variable inside but not console.log, or else console.log will be run first and the final console.log cannot be run, only use it once in one shot.//

3. Arrow function




function add(x, y) {
//x,y is parameter, scope of function
  var sum = x + y;
//sum is a local function, can be anything, just a name to perform some action
  return sum;
//return statement —> makes the function work
}

var sum = add(1, 2);
//or can be add(1,2) —> have the same outcome
//(1,2) is the argument —> the input for the function to run 


() —> parameter, the scope of function, it could be a string, number or variable, it can also be empty when u just wanna perform a function
Return —> order to run the function
Argument —> 

Scope of function
Usually the most prominent source of bug if it’s not define clearly e.g.

var bookTitle='Le Petit Prince';
console.log(bookTitle);

function displayBook(){
    bookTitle='The Little Prince';
    console.log(bookTitle);
}
displayBook();
console.log(bookTitle);

—> 
Le Petit Prince
The Little Prince
The Little Prince

var bookTiitle in first line is global scope
But it can be replaced in functional scope, if a variable is not created, so in the third output, it’s replaced in English

Rule of setting up functional scope
- Have to be defined inside function
- Once defined, it can be referred inside the function and any subsequent function
e.g. 
var a=1
function x(){
	var b=2
function y(){
	var c=3
}
}
In this case, b can be used in function y

Hoisting 
Javascript can put the declaration of variable and function to the top of the script, even it’s declare at the bottom.
But it only consider the declaration, not the value
e.g.
Function abc(){
console.log(argument)
var argument =‘hi’;
}
This case, it will show undefined, as it only hoist var argument, not var argument=‘hi’;

Array

Use to store data

var a= [a,b,c]
—> array starts with 0

It can be changed by the following function
var a [0]=z
//a will be changed to z//

//Properties 
var_name.length
 check the length of elements
 can be used by .length or console.log(var_name.length)
var_name.push(‘abc’) <— abc will be added as last element of array
var_name.pop() <— remove last element
var_name.splice(starting index- if it’s 1, then add things after 1, can be in negative value, -1 equals the last element, removing index - remove how many element, 2=remove 2 elements from starting index/ if set to 0 then no index is removed, adding item 1, adding item x)
var_newname.map(function(new)){
new=new+100
return new;
});
—> new array will be formed

Loop the array
array_name,forEach—>A simplified form to represent a for loop function in array
for (const element of array1) {
	looping action
}
—> for(const could be anything, but better describe the content  of parameter_name){
	}

—> a could be anything, this function loops over the whole array

Original function:
function name(element, index, array){ 
//the sequence of parameter is fixed, each indicate the specific component in the array//

ex. 
Var donuts =[‘a’,’b’,’c’]

function printDounts(dount){
dount+= ‘hole’;
dount =dount.toUpperCase();
console.log(dount);
}

dounts.forEach(printDounts);

//dount in the parameter points directly to the element dount//
//dount +=’hole’ means adding hole after each dount//

Could be simplified to this:

dounts.forEach(function(dount){
dount+= ‘hole’;
dount =dount.toUpperCase();
console.log(dount);
}

Array in array
Simple loop will loop over the whole array
Nested loop can loop over row first, then column 先橫後直

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
for (var r=0; r<numbers.length; r++){
    for (var c=0; c<numbers.length; c++){
        if (numbers[r][c]%2===0){
        numbers[r][c]='even';
    }
else{
    numbers[r][c]='odd';
} 
    }
   }
console.log(numbers);

For the for loop, use []to indicate the scope of the code
Also make sure the var name in for loop is identical to the iteration below

-Don’t use number as the first name of properties in object
-No spaces and hyphen too 

Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

Object oriented programming
—> include a function in a object, and call for the function when needed
—> this prevent confusion with other function
e.g. object_name.function() —> is object oriented
function(object_name) —> function is external to the object

Class
Class provide a prototype as object

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points`;
  }
}
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

—> constructor

Functional programming

Aim: Restrict the scope of element, avoid using var and let to avoid modifying the content accidentally 
1. Use const
2. Avoid const [], use const name= ()=> {} —> function cannot 

Pure function
--> make the function more generic, the usage of function depends on parameter rather than 

Non-pure function
const titles = [];
for (const movie of movieList) {
  titles.push(movie.title);
}
console.log(titles);


Pure function
const titles = movies => {
  const titles = [];
  for (const movie of movies) {
    titles.push(movie.title);
  }
  return titles;
};

console.log(titles(movieList)); OR titles(movieList);

同樣是要從movieList中get title，non-pure function step by step告訴軟體要怎麼做（先創立空的array title，再從movieList中抽取每一個movie—>注意 for of statement的前一個parameter只是給下面操作的代碼，什麼都可以，後面的parameter是從哪裡執行動作，之後再把movieList每一個movie的title push到title array上面，最後console.log 顯示title是什麼）

Pure function不是用case-based，而是告訴程式應該做什麼，但沒有特定哪一個目標，所以titles是一個function，對應的parameter是movies，movies也是一個套下去的代碼，什麼都可以，之後在function內創一個title array來store data，再重複loop action，在for of statement裡，movie指個體，movies指對應的整個array，在下面要push的時候，也是push個體movie的title，最後return title代表function將title的內容顯示出來。在call的時候,先call title這個function，再選擇movieList作為對應的parameter

Functional programming- 等待完之後再處理一件事
Ex 請求政府的資料—等待政府傳東西給你—呈現在網頁上是一個function— 收到data 之後再run這個function	


—> parameter of ‘movies’ decide it’s scope, not affected by external object

const numbers = [1, 5, 10, 15];

Const doubles= numbers.map(x=>x*2) —> map
Const bigNumbers= numbers.filter(x => x>=10)

array_name.map (parameter => action)
—> 為array的所有成員做一個動作，例如選出一行建立另一個array
array_name.filter(parameter =>condition)

//Shortcuts in console
  Crtl-L --> clear console
  document--> reveal node
    document.HTML element 

//Level of object in console
  window --> show all global shortcuts
    e.g. altet is build in windown object, can be expressed as window.alert()

//JS in webpage
  document.HTML_element --> access to specific part of HTML Element and change completly, usually store in variable 
  document.body.style --> change particular part of style
  document.getElementById('idname')
  document.getElementsByTagName('elementname') --> select multiple elements --> will create array-like object, and can only be selected through [] or loop
  document.getElementsByClassName('classname')
  document.querySelector('name') --> can select anything from class/id/element, only select single element, will select the first element it finds
  document.querySelectorAll('name')--> select all, form nodelist, name must be in CSS format 
      Differences btw nodelist and html collection
      1. Nodelist is static and won't change once formed
      2. All array option can apply to nodelist

  document.querySelector('').innerHTML
    innerHTML allows you to rewrite the text in html form, like <h1> rewrite </h1>
  .textContent only allows rewriting text node
  ''.className= (newname) --> change the class name of the selected element, 這樣可以先讓一些css property隱藏，待有動作之後再更改

  id_name.style --> 成為in-line style element, override css stylesheet

  如設定in-line style
    .style.display='none' 會更改html
要移除可以
    .style.removeAttribute('style';)
  
  addEventListener(click,()=>{
    function you wanna write;
  }) --> click can be other action

//Add item
  1. Add event listener to listen for event
  2. Target the parent(target parentnode ex. 'ul'), child and input
  3. equals the input to new child using document.createElement('childnode ex. li')
  4.Add item into the top or end of the list using parent.prepend(child-->name of var) or.append

  parent.insertAdjacentHTML(position,html code)
  position: search in MDN e.g. 'afterbegin'
  html code:`<h1>${.value}</h1>`
    list.insertAdjacentHTML(
    'afterbegin',
    `<li>${input.value}</li>`
  )

//Questions
  1. <ul: aria-live= 'polite'> ??

不明白：Escape, loop

https://josephg.com/blog/what-i-tell-all-new-programmers/
https://www.ptt.cc/bbs/Soft_Job/M.1628988873.A.24C.html