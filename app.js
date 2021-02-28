// random pin generator
document.getElementById("generatePin").addEventListener("click", function () {
    const generatedNumber = Math.random();
    const generatedString = generatedNumber.toString();
    fourDigitNumber = generatedString.substring(2, 6);
    document.getElementById("generatedPin").value = fourDigitNumber;
    document.getElementById("try-left").innerText = 3;
})

// user input
document.getElementById("digits-container").addEventListener("click", function (event) {
    const digit = event.target.innerText;
    // 
    if (isNaN(digit)) {
        // clear button
        if (digit === "C") {
            const typedInput = document.getElementById("typed-pin");
            typedInput.value = "";
        }
        // back button
        if (digit === "<") {
            const typedInput = document.getElementById("typed-pin").value;
            const string = typedInput.toString();
            console.log(string.substring(0,string.length-1));
            const remainingDigits = string.substring(0,string.length-1);
            document.getElementById("typed-pin").value = remainingDigits;
        }
    }
    else {
        // digit input 
        const typedInput = document.getElementById("typed-pin");
        typedInput.value = typedInput.value + digit;
    }
})

// pin verify
function verifyPin() {
    const typedInput = document.getElementById("typed-pin").value;
    const generatedPin = document.getElementById("generatedPin").value;
    let tryLeft = document.getElementById("try-left").innerText;

    if (typedInput === generatedPin) {
        if (tryLeft > 0) {
            document.getElementById("correct-pin").style.display = "block";
            document.getElementById("incorrect-pin").style.display = "none";
        }
    }
    else {
        document.getElementById("incorrect-pin").style.display = "block";
        document.getElementById("correct-pin").style.display = "none";
        let tryLeft = document.getElementById("try-left").innerText;
        if (tryLeft > 0) document.getElementById("try-left").innerText = tryLeft - 1;
    }
}
