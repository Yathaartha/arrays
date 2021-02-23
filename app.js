const numbers = [1, 2, 3];//best way to create array
console.log(numbers);

// const moreNumbers = new Array("Hi!", "ASD!");//using a built-in constructor
// // const moreNumbers = new Array(5);//creates 5 empty elements in the array
// console.log(moreNumbers);

// const moreNumbers = Array(5,2);//same as the one above ithout 'new'

// const yetMoreNumbers = Array.of(1,20);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

// const moreNumbers = Array.from("Hi");//passing multiple arguments give error. it splits the alphabets in a string if passed
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);


