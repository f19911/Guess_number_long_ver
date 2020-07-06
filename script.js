// // let userIsHappy = true;
// // let number = 0;

// // do { 
// //   userIsHappy = confirm("Are you happy that the number is") + ++number + "?");
// // } while (userIsHappy);

// // let box = document.querySelector(".box");
// // let moveBy = 200;
// // let moved = parseInt(box.style.marginLeft) || 0;
 

// // do {
// // box.style.marginLeft = ++moved + "px";
// // } while (moved <= moveBy - 1);


// // for (let number = 0, isUserHappy = true; isUserHappy; number++) {
// //   isUserHappy = confirm("Are you happy that number is" + number + "?"); 
// // }

// // function multiply(a, b){
// //   console.log(a * b);
// //   return a * b;
// // }

// // function filter_list(l) {
// //   return l.filter(function(i){
// //     if (i !== String(i)) return i;
// //   })
// // }

// // filter_list([1,'a','b',0,15]);

// let investSum = 1000;
// let interest = 0.05;
// let tax = 0.18;
// let years;
// let neededSum = 1100;

// for (years = 0; investSum <= neededSum; years++) {
//   investSum = interest * investSum - interest * investSum * tax + investSum;
// }

// console.log("Sum - " + investSum.toFixed(2), "/", "Amount years - " + years);




  
// let num = +prompt('Enter number');
// let arr = [];

// for (let i = 1; i <= num; i++) {

//     if (num % i === 0) {

//         console.log(i);

//         arr = arr + i;

//     }
// }
// console.log('Amount numbers = ' + arr.length);





let randomNum = Math.floor(Math.random() * (100 - 1) + 1);
let amount = 0;
let newtext;

console.log(randomNum);


function number() {

    let num = document.getElementById("input").value;

    onclick = document.getElementById('input').value = '';


    function numberIsNan() {

        document.getElementById('text').innerHTML = '';

        newtext = document.createTextNode("-Enter a number please-"),
            text = document.getElementById("text");

        text.appendChild(newtext);
    }
    if (isNaN(num)) {
        numberIsNan();
    }

    function moreOrLess() {

        document.getElementById('text').innerHTML = '';

        newtext = document.createTextNode("-Guess a number from 1 to 100. GOOD LUCK!-"),
            text = document.getElementById("text");

        text.appendChild(newtext);


    }

    if (num > 100 || num < 1) {
        moreOrLess();
    }

    function youWin() {

        document.getElementById('text').innerHTML = '';

        newtext = document.createTextNode("-YES-"),
            text = document.getElementById("text");

        text.appendChild(newtext);

        amount = amount + 1;

        amount = document.createTextNode('Attempts - ' + amount),
            text = document.getElementById("amount");

        text.appendChild(amount);

    }
    if (num == randomNum) {
        youWin();
    }

    function more() {

        document.getElementById('text').innerHTML = '';


        newtext = document.createTextNode("-more-"),
            text = document.getElementById("text");

        text.appendChild(newtext);

        amount = amount + 1;

    }
    if (num > randomNum && num <= 100) {
        more();
    }

    function less() {

        document.getElementById('text').innerHTML = '';

        newtext = document.createTextNode("-smaller-"),
            text = document.getElementById("text");

        text.appendChild(newtext);

        amount = amount + 1;
    }
    if (num < randomNum && num != 0) {
        less();
    }

    function inputFocus() {

        document.getElementById("input").focus();

    }

    if (randomNum != num) {
        inputFocus();
    }

}

function setFocus() {

    document.getElementById("input").focus();
}

function replayGame() {

    location.reload()
}


