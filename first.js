let reverseButton = document.getElementById("reverseButton");
let inputField = document.getElementById("reverseString");
let outputField = document.getElementById("output");

reverseButton.addEventListener("click", () => {
    let inputString = inputField.value;
    let reverseString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        reverseString += inputString[i];
    }

    outputField.textContent = reverseString;
});

let palindromebutton = document.getElementById("palindromebutton");
let input = document.getElementById("palindromecheck");
let output2 = document.getElementById("output2");

palindromebutton.addEventListener("click", () => {
    let value = input.value;
    let reverse = "";
    for (let i = 0; i < value.length; i++) {
        reverse = value.charAt(i) + reverse;
    }
    if (value === reverse) {
        output2.textContent = "It's a palindrome!";
    } else {
        output2.textContent = "It's not a palindrome.";
    }
});


let totalsum=document.getElementById("totalsum");
let total=document.getElementById("total");
let tip=document.getElementById("total2");
let out=document.getElementById("output3");

totalsum.addEventListener("click", () => {
    let subtotal = parseFloat(total.value);
    let tipPercentage = parseFloat(tip.value);
    let tipAmount = (tipPercentage / 100) * subtotal;
    let totalAmount = subtotal + tipAmount;
    out.textContent = `The total amount to be paid is $${totalAmount.toFixed(2)}`;
});