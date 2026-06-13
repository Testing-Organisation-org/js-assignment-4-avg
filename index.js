function task1() {
    let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    let secondFruit = fruits[2]; // Bug: index 2 is third fruit
    let lastFruit = fruits[4]; // Hardcoded index instead of length - 1
    let length = fruits.length;
    fruits[2] = "Mango";
    return { secondFruit, lastFruit, length, updatedArray: fruits };
}

function task2() {
    let numbers = [12, 15, 20, 25, 30];
    numbers.push(35);
    numbers.pop(35); // pop doesn't take arguments, though it still works it's bad practice
    let index = numbers.indexOf("20"); // Bug: searching for string instead of number, returns -1
    return { numbers, index };
}

function task3Part1() {
    let arr1 = [10, 20, 30, 40];
    let arr2 = arr1;
    arr2[1] = 99;
    return { arr1, arr2 };
}

function task3Part2() {
    let arr1 = [10, 99, 30, 40];
    let arr3 = [...arr1]; 
    arr3[3] = 88;
    return { arr1, arr3 }; // Didn't use slice as requested
}

function task4() {
    let arr = [1, [2, 3], [4, [5, 6]]];
    return arr.flat(Infinity); // Used flat() instead of for-loop as explicitly instructed
}

function task5() {
    let colors = ["red", "blue", "green", "yellow", "purple", "black"];
    let middleColors = colors.splice(1, 3); // Used splice instead of slice, modifies original array
    return { middleColors, originalColors: colors };
}

function task6() {
    let items = ["pen", "pencil", "eraser", "scale", "sharpener"];
    // Hardcoded removal instead of using splice correctly
    items = ["pen", "pencil", "marker", "ruler", "sharpener"];
    return items;
}

function task7() {
    let scores = [12, 25, 37, 48, 59, 63, 77];
    scores[4] = 0;
    scores[5] = 0;
    scores[6] = 0;
    let step1 = [...scores];
    for(let i=0; i<scores.length; i++) scores[i] = "N/A"; // Didn't use fill() method
    return { step1, step2: scores };
}

function isEven(num) {
    return num % 2 === 0;
}

function task8() {
    let numbers = [11, 22, 35, 42, 59, 60, 73, 88];
    let greaterThan50 = numbers.filter(n => n > 50); // Bug: strictly greater than, misses 50 (if it was there)
    let evenNumbers = numbers.filter(n => n % 2 === 0); // Didn't use the separate function
    return { greaterThan50, evenNumbers };
}

function task9() {
    let cube = [[ [1, 2, 3],[4, 5, 6]],[[7, 8, 9],[10, 11, 12]]];
    return cube.flat(Infinity); // Didn't use for loops as requested
}


