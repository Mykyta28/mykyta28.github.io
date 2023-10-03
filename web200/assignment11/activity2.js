// Function to display window information
function displayWindowInfo() {
    const windowInfoElement = document.querySelector('.window-info');

    // Get window size
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Get screen size
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Get window location information
    const windowLocation = window.location.href;

    // Display the information
    windowInfoElement.innerHTML = `
        <h2>Window Information</h2>
        <p>Window Size: ${windowWidth} x ${windowHeight}</p>
        <p>Screen Size: ${screenWidth} x ${screenHeight}</p>
        <p>Location: ${windowLocation}</p>
    `;
}

// Call the displayWindowInfo function to display initial information
displayWindowInfo();

// Add an event listener for the window resize event
window.addEventListener('resize', displayWindowInfo);