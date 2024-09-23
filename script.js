let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
        fixedNavButton.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
        fixedNavButton.style.display = "none";
    }
};

// Scroll to the top of the document when the user clicks the button
scrollToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Smooth scrolling
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select the hide/unhide button inside #fixedNavButton
const toggleButton = document.querySelector('#fixedNavButton button');

// Function to toggle visibility of hideable items
function toggleHideableItems() {
    // Get all elements with the class 'hideable'
    const hideableItems = document.querySelectorAll('.hideable');

    // Check current state to determine if we should hide or show elements
    if (toggleButton.textContent.trim() === 'hide') {
        // Hide all hideable items
        hideableItems.forEach(item => item.style.display = 'none');
        toggleButton.textContent = 'unhide'; // Update button text
    } else {
        // Show all hideable items
        hideableItems.forEach(item => item.style.display = 'block');
        toggleButton.textContent = 'hide'; // Revert button text
    }
}

// Add event listener to the button to trigger toggle function
toggleButton.addEventListener('click', toggleHideableItems);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
