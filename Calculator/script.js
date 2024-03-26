// Variable btn to store the object of all the buttons
let btn = document.querySelectorAll("button");
// Variable input to store the object of result
let input = document.getElementById("result");

// Empty string to add the values of the result
let string = "";
// Creating array from the btn variable
let arr = Array.from(btn);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        // On clicking = button evaluate the display data.
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        // On clicking AC button clear the display.
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        // On clicking DEL button delete the last data on the  display.
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // On click any other button update the empty string and display it.
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})