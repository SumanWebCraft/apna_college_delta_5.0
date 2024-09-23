// shift + alt + a in windows 
// shift + option + a in mac 

// This is a one line Comment 
/* This is a multi line 
comment in Javascript */

//  This is a variable example 
/* var x = 2;
if (x === 2) {
    var x = 3;
    console.log(x);
    // expected output 3
}
console.log(x);
 */
// This is an array in js 
let college_buddy = ['Suman','Manju','Vamshi','Satyam'];
console.log(college_buddy[0]);
console.log(college_buddy[1]);
console.log(college_buddy[4]);
console.log(college_buddy[3]);

// To get the array length 
console.log(college_buddy.length);

/* // Operations on array : 
1. map() ;
2. filter();
3. reduce();
4. push();
5. unshift();
6. pop();
7. shift();
8. indexof();
9. Array.isArray(); */

// map() in js 

const numbers = [1,-1,2,3,4,5];

const filtered = numbers.filtered(n >= n >= 0);
const items = filtered.map(n => '<div>' + n + '</div>');

const html = items.join('');

console.log(html);