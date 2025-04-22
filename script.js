//your JS code here. If required.
// Get DOM elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Function to create a delay using Promise and setTimeout
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle form submission
async function displayMessage() {
  // Get input values
  const message = textInput.value;
  const delayTime = parseInt(delayInput.value);

  // Clear previous output
  output.textContent = "";

  // Validate inputs
  if (!message || isNaN(delayTime) || delayTime < 0) {
    output.textContent = "Please provide valid text and delay values";
    return;
  }

  try {
    // Wait for the specified delay
    await delay(delayTime);
    
    // Display the message
    output.textContent = message;
  } catch (error) {
    output.textContent = "An error occurred";
  }
}

// Add event listener to the button
btn.addEventListener("click", displayMessage);