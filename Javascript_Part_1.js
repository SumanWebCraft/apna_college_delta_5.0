// Variable : Is simply a storage location
var a = 10;
var b = 20;
var c = a + b;
console.log(c);

// Data Types in js

/* Primitive Types : 
1. Number  -- Positive (14) & Negative (-4)
           -- Integers(45 , -50)
           -- Floating Numbers : with decimal  (4.6, -8.9)
2. Boolean 
3. String 
4. Undefined
5. Null 
6. Bigint
7. Symbol
 */

// Operators in js

// 1. Arithmetic Operators
//    +  : Addition
//    -  : Subtraction
//    *  : Multiplication
//    /  : Division
//    %  : Modulus (Remainder)
//    ++ : Increment
//    -- : Decrement

// 2. Assignment Operators
//    =   : Assigns a value to a variable
//    +=  : Adds and assigns (e.g., x += y is equivalent to x = x + y)
//    -=  : Subtracts and assigns
//    *=  : Multiplies and assigns
//    /=  : Divides and assigns
//    %=  : Takes modulus and assigns

// 3. Comparison Operators
//    ==  : Equal to
//    === : Strict equal to (checks both value and type)
//    !=  : Not equal to
//    !== : Strict not equal to
//    >   : Greater than
//    <   : Less than
//    >=  : Greater than or equal to
//    <=  : Less than or equal to

// 4. Logical Operators
//    && : Logical AND
//    || : Logical OR
//    !  : Logical NOT

// 5. Bitwise Operators
//    &  : AND
//    |  : OR
//    ^  : XOR
//    ~  : NOT
//    << : Left shift
//    >> : Right shift
//    >>>: Zero-fill right shift

// 6. String Operators
//    +  : Concatenation (used to join strings together)
//    += : Concatenation assignment (e.g., str += "more" adds "more" to the end of str)

// 7. Type Operators
//    typeof    : Returns the type of a variable or expression
//    instanceof: Checks if an object is an instance of a particular class

// 8. Ternary Operator
//    condition ? expr1 : expr2
//    Returns expr1 if the condition is true, otherwise returns expr2

/* ------1. Addition ------ */
/* let a = 5;
let b = 10;
let sum = a + b;
console.log(sum);
 */

let first_name = 'Suman';
let middle_name = 'Sukumar';
let last_name = 'Maity';

let Full_name = first_name + ' ' + middle_name + ' ' + last_name;
console.log('This is Addition');
console.log(Full_name);

/* ------2. Subtraction ------ */

let d = 3;
let e = 9;
let sub = d - e;
let sub_1 = e - d;
console.log('This is Subtraction');
console.log(sub);
console.log(sub_1);

/* ------3. Multiplication  ------ */

let d1 = 3;
let e1 = 9;
let pro = d1 * e1;
let pro_1 = e1 * d1;
console.log('This is Multiplication');
console.log(pro);
console.log(pro_1);

/* ------4. Division ------ */

let d2 = 3;
let e2 = 9;
let div = d2 / e2; // 0.333
let div_1 = e2 / d2; // 3
console.log('This is Division');
console.log(div);
console.log(div_1);

/* ------5. Modulus ------ */

let m1 = 8;
let m2 = 24;
let mod_remainder = m1 % m2;
let mod_remainder_1 = m2 % m1;
console.log('This is Modulus');
console.log(mod_remainder); // 8
console.log(mod_remainder_1); // 0

/* ------6. Increment ------ */
let i = 5;
console.log(' --  This is Increment -- ');
i++;
console.log(i);

/* ------7. Decrement ------ */

let j = 6;
console.log(' --  This is Decrement -- ');
j--;
console.log(j);
--i;
console.log(i);
++j;
console.log(j);

// 2. Assignment Operators

// ------------- 1. = :  Assigns a value to a variable --------------

console.log('*************** = Assighns ***************');

let x = 10; // It assigns a value to a variable
console.log(x);

// ------------- 2. +=  : Adds and assigns (e.g., x += y is equivalent to x = x + y) --------------

console.log('*************** += Adds and assighns ***************');

let x1 = 10;
x1 += 5;
console.log(x1);

// ------------- 3. -=  : Subtracts and assigns --------------

console.log('*************** -= Subtracts  and assighns ***************');

let x2 = 5;
x2 -= 5;
console.log(x2);

// ------------- 4. *=  : Multiplies and assigns --------------

console.log('*************** *= Multiplies and assighns ***************');

let x3 = 5;
x3 *= 5;
console.log(x3);

// ------------- 5. /=  : Divides and assigns --------------

console.log('*************** /= Divides and assighns ***************');

let x4 = 5;
x4 /= 5;
console.log(x4);

// ------------- 6. %=  : Takes modulus and assigns --------------

console.log('*************** %= Modulus and assighns ***************');

let x5 = 15;
x5 %= 5;
console.log(x5);

// 3. Comparison Operators
//    ==  : Equal to
console.log(
  '*********  ==: Checks for equality of values (ignores type) ********* '
);
console.log(5 == '5');
//    === : Strict equal to (checks both value and type)
console.log(
  '	********* ===: Checks for equality of values and type. ********* '
);
console.log(null === undefined);
console.log('0' === false);
console.log(1 === true);

//    !=  : Not equal to
console.log(' *********  Loose Not Equal (!=) Comparisons ********* ');
console.log(null != undefined);
console.log('0' != false);
console.log(1 != true);

// !== : Strict not equal to

console.log(' *********  !== : Strict not equal to *********');
console.log(null !== undefined);
console.log('0' !== false);
console.log(1 !== true);

//    >   : Greater than
console.log(' ********** >: Greater than  *********');

console.log(10 > 8); //true
console.log(5 > 6); //false
console.log('5' > 5); //false
console.log('Suman' > 'Vamshi'); // false
console.log('Suman' > 6); //false
console.log(5 > true); // true

//    <   : Less than

console.log(' ********** <: Less than *********');

console.log(10 < 5); // false
// Reason: This is a simple numerical comparison. Since 10 is greater than 5, the comparison 10 < 5 returns false.

console.log(-2 < 2); // true
// Reason: -2 is less than 2. Negative numbers are always less than positive numbers, so -2 < 2 returns true.

console.log('Suman' < 6); // false
// Reason: JavaScript attempts to compare the string 'Suman' with the number 6. Since 'Suman' cannot be converted to a number, it becomes NaN (Not-a-Number). Any comparison with NaN returns false.

console.log('suman' < 'Vamshi'); // false
// Reason: When comparing strings, JavaScript compares them lexicographically (alphabetically) based on Unicode values. Since lowercase 's' has a higher Unicode value than uppercase 'V', 'suman' is considered "greater" than 'Vamshi', so 'suman' < 'Vamshi' returns false.

console.log('5' < '5'); // false
// Reason: This is a string comparison between two identical strings ('5' and '5'). Since both strings are identical, neither is less than the other. Therefore, '5' < '5' returns false.

console.log(1 < true); // false
// Reason: JavaScript converts true to the number 1. The comparison then becomes 1 < 1, which is false because 1 is not less than 1.

//    >=  : Greater than or equal to
console.log(' ********** >= : Greater Than or Equal to  *********');

console.log(10 >= 5); // true
// Reason: 10 is greater than 5, so 10 >= 5 returns true.

console.log(10 >= 10); // true
// Reason: 10 is equal to 10, and the >= operator checks for both greater than and equal to, so 10 >= 10 returns true.

console.log('10' >= 5); // true
// Reason: JavaScript converts the string '10' to the number 10 before comparison. Since 10 is greater than 5, '10' >= 5 returns true.

console.log(5 >= '5'); // true
// Reason: JavaScript converts the string '5' to the number 5. Since 5 is equal to 5, 5 >= '5' returns true.

console.log(1 >= true); // true
// Reason: JavaScript converts true to the number 1. Since 1 is equal to 1, 1 >= true returns true.

console.log('apple' >= 'banana'); // false
// Reason: When comparing strings, JavaScript uses lexicographical order (based on Unicode values). 'a' has a lower Unicode value than 'b', so 'apple' is considered "less" than 'banana', making 'apple' >= 'banana' return false.

//    <=  : Less than or equal to

console.log(' ********** <= : Less than  or equal to *********');
console.log(5 <= 10); // true
// Reason: 5 is less than 10, so 5 <= 10 returns true.

console.log(10 <= 10); // true
// Reason: 10 is equal to 10, and the <= operator checks for both less than and equal to, so 10 <= 10 returns true.

console.log('5' <= 10); // true
// Reason: JavaScript converts the string '5' to the number 5 before comparison. Since 5 is less than 10, '5' <= 10 returns true.

console.log(5 <= '5'); // true
// Reason: JavaScript converts the string '5' to the number 5. Since 5 is equal to 5, 5 <= '5' returns true.

console.log(0 <= false); // true
// Reason: JavaScript converts false to the number 0. Since 0 is equal to 0, 0 <= false returns true.

console.log('apple' <= 'banana'); // true
// Reason: When comparing strings, JavaScript uses lexicographical order (based on Unicode values). 'a' has a lower Unicode value than 'b', so 'apple' is considered "less" than 'banana', making 'apple' <= 'banana' return true.
