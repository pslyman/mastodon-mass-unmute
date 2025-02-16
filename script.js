function clickUnmuteButtons() {
    // Get all buttons with the text "Unmute"
    const buttons = Array.from(document.querySelectorAll('button')).filter(button => button.textContent.trim() === 'Unmute');

    // If there are no buttons, stop the script
    if (buttons.length === 0) {
        console.log("No more 'Unmute' buttons found.");
        return;
    }

    // Click each button
    buttons.forEach(button => {
        button.scrollIntoView({ behavior: 'smooth', block: 'center' });
        button.click();
        console.log("Clicked 'Unmute' button.");
    });

    // Rerun the function after a short delay to allow for any changes on the page
    setTimeout(clickUnmuteButtons, 1000);
}

// Start the process
setTimeout(function() {
	clickUnmuteButtons();
}, 2000);

