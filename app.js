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

// const testResults = [1, 5.4, 1.5, 10.0, 1.5, -5, 10];
// // const storedResults = testResults.slice(0, 2);//slice also can be used to select ranges from an array

// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91); //since arrays are reference based if u add elements to testResults, storedResults is also updated. though, slice makes it so that it does not update

// console.log(storedResults, testResults);

// console.log(testResults.indexOf(1.5)); //searches for the index of the value passed
// console.log(testResults.lastIndexOf(1.5)); //searches for the index of the value passed from the end

// console.log(testResults.includes(10.99)); //returns a boolean if value found or not

// const personData = [{ name: "Max" }, { name: "Manuel" }];
// console.log(personData.indexOf({ name: "Manuel" })); //indexOf or lastIndexOf returns '-1' if value not found. PS: objects cant be compared as no two objects are the same

// const manuel = personData.find((person, index, persons) => {
//   return person.name === "Manuel";
// });

// manuel.name = "Anne"; //find doesnt create a copy

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return (person.name = "Max");
// });

// console.log(maxIndex);

// prices.forEach((price, index, prices) => {
//   const priceObj = { index: index, taxAdjustedPrices: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, index, prices) => {
//   const priceObj = { index: index, taxAdjustedPrices: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices.reverse()); //changing the sort() logic also reverses

// const filteredArray = prices.filter(
//   (p) => p > 6 // to filter out elements lower than 6
// );

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((p) => (sum += p));

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// }, 0);

// // Shorter version
// // const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const data = "new york; 10.00; 2000";

// const transformedData = data.split(";"); //splits a string into an array based on the character provided
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ["Max", "Schwarz"];
// const nameDefragmented = nameFragments.join(" "); //default is 'comma'. you can specify what is put between the data you want to merge
// console.log(nameDefragmented);

// const copiedNameFragments = [...nameFragments]; //not referenced based
// nameFragments.push("Mr");
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices)); //cant be used on arrays

// const persons = [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 },
// ];

// const copiedPersons = [
//   ...persons.map((person) => ({
//     name: PerformanceResourceTiming.name,
//     age: person.age,
//   })),
// ]; //do this if you dont want to have referenced values in the elements

// persons.push({ name: "Anna", age: 29 }); //not added in copiedPersons
// persons[0].age = 31; //changes in copiedPersons as well because the elements were there when it was copied

// console.log(persons, copiedPersons);

const nameData = ["Max", "Schwarz", "Mr", 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInfo] = nameData;
console.log(firstName, lastName, ...otherInfo);
