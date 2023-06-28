// Define the UI friction points you want to measure.
const frictionPoints = [
  "taps",
  "clicks",
  "presses",
  "swipes",
  "hovers",
  "types",
  "reads",
  "scrolls",
  "decides",
  "page loads",
  "moves mouse",
  "modal opens",
  "modal closes",
  "menu opens",
  "menu closes",
  "popup opens",
  "popup closes",
];

// Initialize a local variable to store the friction points.
let frictionPointCounter = {};

// Add a listener for each friction point.
for (const frictionPoint of frictionPoints) {
  document.addEventListener(frictionPoint, () => {
    // Increment the friction point counter.
    frictionPointCounter[frictionPoint]++;

    // Log the friction point to the console.
    console.log(`Friction point: ${frictionPoint}`);
  });
}
