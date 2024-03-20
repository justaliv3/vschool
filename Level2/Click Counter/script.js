// Function to update the click count
function updateClickCount() {
    // Get the current click count from localStorage
    let count = localStorage.getItem('clickCount');

    // If count is null or undefined, set it to 0
    if (!count) {
        count = 0;
    } else {
        count = parseInt(count);
    }

    // Update the click count display
    document.getElementById('clickCount').textContent = count;
}

// Function to handle the click event
function handleClick() {
    // Get the current click count from localStorage
    let count = localStorage.getItem('clickCount');

    // If count is null or undefined, set it to 0
    if (!count) {
        count = 0;
    } else {
        count = parseInt(count);
    }

    // Increment the click count
    count++;

    // Update the click count in localStorage
    localStorage.setItem('clickCount', count);

    // Update the click count display
    document.getElementById('clickCount').textContent = count;
}

// Add event listener to the button
document.getElementById('clickButton').addEventListener('click', handleClick);

// Update the click count when the page loads
updateClickCount();