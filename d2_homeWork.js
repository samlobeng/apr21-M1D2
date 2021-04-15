
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.

1. Numbers: These are numeric values such as 1 or 2 etc. They can also be floating point values or fractions. Example 1.2, 3.04. The main thing to do with numbers are arithmetic like addition, subtraction or multiplication. There are also special values in JavaScript that are considered as numbers but do not behave like normal numbers. These are Infinity and -Infinity, which represent the positive and negative infinities and NaN, which stands for "not a number", even though it is a value of the number

2. Strings: Strings are used to represent text. They are a sequence of characters or numbers enclosed in quotes. They are written by enclosing their content in quotes. You can use either double or single quotes to denote strings. Example "12abc", "abcde".

3. Boolean: These are true or false values. Sometimes you will need a value that simply distinguishes between two possibilities, like yes or no and on and off. JavaScript has a boolean type, which has two values: true and false.

4. Undefined Values: There are two special values, written null and undefined that are used to denote the absence of a meaningful value. They are themselves values but, but they carry no information. Undefined means a variable has been declared but has not yet been assigned a value. Example, let number; console.log(number); this shows undefined. Null is an assignment value. It can be assigned to a variable as a representation of no value.
*/

/* EXERCISE 2
Try to describe what a variable is, in your own words.

A variable is a memory location used to store values. It is a way for the computer to remember things. To catch and hold values, you use a variable. In JavaScript, you can declare a variable by using the reserved words var, let or const. Example var number, let name or const age. You can declare a variable and decide to assign an initial value or not. 

*/

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
let sum = 12 + 20;
console.log(sum);

/* EXERCISE 4
Create a variable named x containing the number 12.
*/
let x = 12;

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/
let name = "John Doe";

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/
let subtraction = 12 - x;
console.log(subtraction);

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/
let name1, name2;
name1 = "john";
name2 = "John";
console.log(name1 === name2);
console.log(name1.toLowerCase === name2.toLowerCase);

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

//The variable x is already created in question 4, so i assigned a different value.
x = 3;
if(x === 3){
  console.log("Three");
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the result of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/
let drink = "Beer";
let drinkAlcohol = (drink === "Beer") ? 18: 12;
console.log(drinkAlcohol);