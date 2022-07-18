const states = [
    "Waiting for restaurant to accept your order",
    "Restaurant has accepted your order",
    "Your driver is on the way",
    "Your food is nearby",
    "Your order has been delivered",
];

let stateIndex = 0;

const myButton = document.querySelector("button");
const mySpan = document.querySelector("span");

function nextStep() {
    if(stateIndex < states.length) {
        mySpan.textContent = states[stateIndex]
        stateIndex += 1
        setTimeout(nextStep, 2000)
    }
    // Update the span's textContent to reflect the order status (based on stateIndex)
    // Increment the stateIndex
    // If there are more states to come, wait 2 seconds and call nextStep again (use setTimeout for this)
}

function createOrder() {
    console.log("Creating your order...");
    nextStep();
}

myButton.addEventListener("click", createOrder);