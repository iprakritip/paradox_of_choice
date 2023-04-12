const opt1 = document.getElementById("choice1");
const opt2 = document.getElementById("choice2");
const decision = document.createElement("h2");
const container = document.getElementById("container");
const form = document.getElementById("myForm");
const number = Math.floor(Math.random() * 10);

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",()=>{
form .submit();
})
function submitForm(e) {
    // opt1.style.display = "none";
    // opt2.style.display = "none";
    // if (number % 2 == 0) {
    //     decision.innerHTML = `You should go with option 1 i.e ${opt2.value}`
    // }
    // else {
    //     decision.innerHTML = `You should go with option 1 i.e ${opt21.value}`
    // }
    // container.appendChild(decision);
    console.log("gesdafZ")
}