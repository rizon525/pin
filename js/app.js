function getPin() {

    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;


    }
    else {

        return getPin();

    }


}
function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;



}
document.getElementById("key-pad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("type-number");
    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = " ";
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }


});
//verrify pin
function verify() {
    const pin = document.getElementById("display-pin").value;
    const typeNumber = document.getElementById("type-number").value;
    const success = document.getElementById("notify-success");
    const fail = document.getElementById("notify-fail");
    if (pin == typeNumber) {

        success.style.display = "block";


    }
    else {

        fail.style.display = 'block';
    }
}
