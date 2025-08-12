document.addEventListener("DOMContentLoaded", () => {
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
let currentCount = 0;
// Fetch initial count
fetch("/api/count")
.then(response => response.json())
.then(data => {
currentCount = data.count;
counterElement.textContent = currentCount;
})
.catch(error => console.error("Error fetching initial count:", error));
incrementButton.addEventListener("click", () => {
currentCount++;
updateCount(currentCount);
});
decrementButton.addEventListener("click", () => {
currentCount--;
updateCount(currentCount);
});
function updateCount(newCount) {
fetch("/api/count", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ count: newCount }),
})
.then(response => response.json())
.then(data => {
counterElement.textContent = data.count;
})
.catch(error => console.error("Error updating count:", error));
}
});
