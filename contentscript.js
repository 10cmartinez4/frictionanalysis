// Get the friction point counter.
const frictionPointCounter = chrome.storage.sync.get("frictionPointCounter", {});

// Update the friction point counter.
frictionPointCounter[event.detail.frictionPoint]++;

// Save the friction point counter.
chrome.storage.sync.set({ frictionPointCounter });
