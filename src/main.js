function getRandomNumbers() {
    let number1 = Math.floor(Math.random() * 9999);
    let number2 = Math.floor(Math.random() * 9999);

    var myElem = document.getElementById("result");

    if (number1 > number2) {
        myElem.innerHTML = number1 + " : " + number2;
    } else {
        myElem.innerHTML = number2 + " : " + number1;
    }
}