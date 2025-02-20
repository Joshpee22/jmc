let navLinks = document.getElementById("navLinks");
let menuIcon = document.querySelector(".fa");

function toggleMenu() {
    // Check the current state of the menu (whether it's hidden or visible)
    if (navLinks.style.top === "0px") {
        navLinks.style.top = "-800px"; // Hide the menu
    } else {
        navLinks.style.top = "0"; // Show the menu
    }
}

// Event listener for clicking the menu icon
menuIcon.addEventListener("click", toggleMenu);
