
// --- Part 2: Functions, Scope, Parameters & Returns ---

// Reusable function to toggle an animation class
function toggleSpin(element, shouldSpin) {
  if (shouldSpin) {
    element.style.animation = "spin 2s linear infinite";
  } else {
    element.style.animation = "none";
  }
}

// Function with parameters + return value
function calculateArea(width, height) {
  return width * height;
}

// Example: local vs global scope
let globalMessage = "Accessible everywhere";

function showScopeExample() {
  let localMessage = "Accessible only inside this function";
  console.log(globalMessage); // ✅
  console.log(localMessage);  // ✅
}
showScopeExample();
// console.log(localMessage); // ❌ Error: not defined


// --- Part 3: Combining CSS + JS ---

// Animate box when button is clicked
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  // toggle spin animation
  if (box.style.animation === "none" || box.style.animation === "") {
    toggleSpin(box, true);
  } else {
    toggleSpin(box, false);
  }
});

// Modal open/close
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("showModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

showModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 300); // wait for fade-out
});

// Example usage of calculateArea()
console.log("Area of 5x10 is:", calculateArea(5, 10));
