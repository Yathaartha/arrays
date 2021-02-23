// const numbers = [1, 2, 3];//best way to create array
// console.log(numbers);

// // const moreNumbers = new Array("Hi!", "ASD!");//using a built-in constructor
// // // const moreNumbers = new Array(5);//creates 5 empty elements in the array
// // console.log(moreNumbers);

// // const moreNumbers = Array(5,2);//same as the one above ithout 'new'

// // const yetMoreNumbers = Array.of(1,20);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// // const moreNumbers = Array.from("Hi");//passing multiple arguments give error. it splits the alphabets in a string if passed
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];//same data type
// const personalData = [30, "Max", {moreDetauk: []}];//different data types

// const analuticsData = [[1, 1.6], [-5.4, 2.1]];//array within array

// for (const data of analuticsData){
//   for (const dataPoint of data){
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);//index starts from 0. length of array is maxIndex+1

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading");//adds to last position laso returns length
// hobbies.unshift("Coding");//adds element to the 1st position and returns it
// hobbies.pop();//removes the last element and returns it
// hobbies.shift();//removes the first element and returns it
// console.log(hobbies);

// hobbies[1] = "Coding";//changes the value of the position
// hobbies[5] = "Reading";//if added to empty spot, new emty elements are created
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, "Good Food");//insert element at position and delete elements
// console.log(hobbies);

// const removedElements = hobbies.splice(0, 1);//deletes all items
// //negative values goes to the end

const testResults = [1, 5.4, 1.5, 10.0, 1.5, -5, 10];
// const storedResults = testResults.slice(0, 2);//slice also can be used to select ranges from an array

const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91); //since arrays are reference based if u add elements to testResults, storedResults is also updated. though, slice makes it so that it does not update

console.log(storedResults, testResults);

console.log(testResults.indexOf(1.5)); //searches for the index of the value passed
console.log(testResults.lastIndexOf(1.5)); //searches for the index of the value passed from the end

const personData = [{ name: "Max" }, { name: "Manuel" }];
console.log(personData.indexOf({ name: "Manuel" })); //indexOf or lastIndexOf returns '-1' if value not found
