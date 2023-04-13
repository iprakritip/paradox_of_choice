const opt1 = document.getElementById("choice1");
const labelElement1= opt1.previousElementSibling;
const opt2 = document.getElementById("choice2");
const labelElement2= opt2.previousElementSibling;
const decision = document.createElement("h2");
const container = document.getElementById("container");
const form = document.getElementById("myForm");
const number = Math.floor(Math.random() * 100);

const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log(opt1.value);
    console.log(opt2.value);
    opt1.style.display = "none";
    opt2.style.display = "none";
    labelElement1.style.display= "none";
    labelElement2.style.display= "none";
    submitBtn.style.display = "none"
    if (number % 2 == 0) {
        decision.innerHTML = `You should go with option 2 i.e ${opt2.value}`
    }
    else {
        decision.innerHTML = `You should go with option 1 i.e ${opt1.value}`
    }
    container.appendChild(decision);
}