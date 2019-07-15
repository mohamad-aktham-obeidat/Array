console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
var numbers = [1, 7, 9, 45]

var names = ["Str", "alex", "moh"]

var animals = ['the', 'fox', 'over', 'lazy', 'dog']


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits = ["Tomato", "Banana", "Watermelon"]
console.log(fruits.indexOf("Tomato"));
console.log(fruits.indexOf("Banana"));
console.log("___________________________");


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var favFood = ["mansaf", "upsideDown", "Shawerma", "Mashawii", "Burger"];
var favSport = ["Football", "Tennis", "Swimming"];
var favMovies = ["The Invisible Guest", "The Imitation Game", "The Body"];
console.log(favFood);
console.log(favSport);
console.log(favMovies);
console.log("___________________________");


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr) {
    return arr[0];
}
console.log(firstOfArray([1, 4, 5]));

console.log("___________________________");

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr) {
    return arr[arr.length - 1];
}
console.log(lastOfArray([1, 4, 5]));

console.log("___________________________");

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9]
console.log(array.shift());
console.log(array.shift());
console.log(array.shift());
console.log(array.unshift(8));
console.log(array.unshift(6));
console.log(array.unshift(4));
console.log(array.unshift(3));
console.log(array.unshift(1));
console.log(array.push(10));

console.log(array)
console.log("___________________________");


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr) {
    var mid;
    if (arr.length % 2 === 0) {
        mid = arr.length / 2;
        return arr[mid - 1] + " and " + arr[mid]
    } else {
        mid = Math.floor(arr.length / 2);
        return arr[mid];
    }
}
console.log(middleOfArray([1, 4, 5]))
console.log(middleOfArray(["t", "u", "g", "x"]))

console.log("___________________________");


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals.pop();
animals[0] = 'zebra';
animals[1] = 'elephant';
console.log(animals)

var nums = [1, 2, 3, 8, 9]
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
console.log(nums);
console.log("___________________________");
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfarry(arr, index) {
    return arr[index];
}
console.log(indexOfarry([1, 2, 3, 8, 9], 3))
console.log(indexOfarry([1, 2, 3, 8, 9], 1))
console.log(indexOfarry([1, 2, 3, 8, 9], 4))
console.log("___________________________");

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr) {
    return arr.slice(0, arr.length - 1)
}
console.log(arrayExceptLast([1, 2, 3]))
console.log("___________________________");

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(array, value) {
    array.push(value);
    return array;
}
console.log(addToEnd([1, 2, 3], 45));

console.log("___________________________");

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArr(arr) {
    var sum = 0;
    for (let count = 0; count < arr.length; count++) {
        sum = sum + arr[count];
    }
    return sum;
}

console.log(sumArr([1, 1, 1]));

function sumArr2(arr) {
    var sum = 0;
    var counter = 0;
    while (counter < arr.length) {
        sum = sum + arr[counter];
        counter++;
    }
    return sum;
}


console.log(sumArr2([2, 2, 2]));

console.log("___________________________");



/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(array) {
    var min = array[0];
    for (let i = 1; i < array.length; i++) {

        if (array[i] < min) {
            min = array[i];
        }

    }
    return min;
}
console.log(minInArray([1, 10, 3]));

function minInArray2(array) {
    var min = array[0];
    var count = 1;

    while (count < array.length) {
        if (array[count] < min) {
            min = array[count];
        }
        count++;
    }
    return min;
}
console.log(minInArray2([100, 10, 3]));

console.log("___________________________");

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            arr.splice(arr.indexOf(value), 1);
        }
    }
    return arr;
}

console.log(removeFromArray([1, 2, 3, 8, 9], 8))
//------------------------------------------------------


function removeFromArray2(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(arr.indexOf(value), 1);
        }
        i++;
    }
    return arr;
}

console.log(removeFromArray2([1, 2, 3, 8, 9], 2))
console.log("___________________________");


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr) {
    // var ouput = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            // ouput.push(arr[i]);
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(oddArray([1, 2, 3, 8, 9]));
//-------------------------------------------------------

function oddArray2(arr) {
    // var ouput = [];
    var i = 0;
    while (i < arr.length) {

        if (arr[i] % 2 === 0) {
            // ouput.push(arr[i]);
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(oddArray([1, 2, 3, 8, 9]));
console.log("___________________________");

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
    var sum = 0;
    var avg;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

console.log(aveArray([1, 2, 3, 8, 9]))
// ---------------------------------------

function aveArray2(arr) {
    var sum = 0;
    var avg;
    var counter = 0;
    while (counter < arr.length) {
        sum += arr[counter];
        counter++
    }
    avg = sum / arr.length;
    return avg;
}

console.log(aveArray2([1, 2, 3, 8, 9]))
console.log("___________________________");

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(array) {
    var shorter = array[0];
    var check = array[0].length;
    for (let i = 1; i < array.length; i++) {
        if (array[i].length < check) {
            shorter = array[i];
        }
    }
    return shorter;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
console.log(shorterInArray(strings));

//-----------------------------------------------------------
function shorterInArray2(array) {
    var shorter = array[0];
    var check = array[0].length;
    var i = 1;
    while (i < array.length) {
        if (array[i].length < check) {
            shorter = array[i];
        }
        i++;
    }

    return shorter;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
console.log(shorterInArray2(strings));
console.log("___________________________");

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string = "alex mercer madrasa rashed2 emad hala"

function repeatChar(text, char) {
    var counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            counter++;
        }
    }
    return counter;
}
console.log(repeatChar(string, "a"))
//------------------------------------
function repeatChar2(text, char) {
    var counter = 0;
    var i = 0;
    while (i < text.length) {
        if (text[i] === char) {
            counter++;
        }
        i++
    }
    return counter;
}
console.log(repeatChar2(string, "a"))
console.log("___________________________");


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(array) {
    var output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length % 2 !== 0 && i % 2 === 0) {
            output.push(array[i]);
        }
    }
    return output;
}
console.log(evenIndexOddLength(strings));
//---------------------------------------------------
function evenIndexOddLength2(array) {
    var output = [];
    var i = 0;
    while (i < array.length) {

        if (array[i].length % 2 !== 0 && i % 2 === 0) {
            output.push(array[i]);
        }
        i++;
    }
    return output;
}
console.log(evenIndexOddLength2(strings));
console.log("___________________________");

/*
21
Create a function called powerElementIndenamex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementByIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** i;
    }
    return arr;
}
console.log(powerElementByIndex([44, 5, 4, 3, 2, 10]))
//---------------------------------
function powerElementByIndex2(arr) {
    var i = 0;
    while (i < arr.length) {
        arr[i] = arr[i] ** i;
        i++;
    }
    return arr;
}

console.log(powerElementByIndex2([44, 5, 4, 3, 2, 10]))
console.log("___________________________");

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(array) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && i % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(evenNumberEvenIndex([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]));
//-----------------------------------------

function evenNumberEvenIndex2(array) {
    var newArray = [];
    var i = 0;
    while (i < array.length) {


        if (array[i] % 2 === 0 && i % 2 === 0) {
            newArray.push(array[i]);
        }
        i++;
    }
    return newArray;
}
console.log(evenNumberEvenIndex2([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]))
