function dropdownMenu() {
    let dropdown = document.getElementById('dropdownClick');
    if (dropdown.className === 'Navlist') {
        dropdown.className += ' responsive';
        // Add event listener to close the menu when clicking outside
        document.addEventListener('click', closeDropdownOnClickOutside);
    } else {
        dropdown.className = 'Navlist';
        document.removeEventListener('click', closeDropdownOnClickOutside);
    }
}

function closeDropdownOnClickOutside(event) {
    let dropdown = document.getElementById('dropdownClick');
    let harmIcon = document.querySelector('.harm');

    // Check if the click was outside the dropdown or harm icon
    if (!dropdown.contains(event.target) && !harmIcon.contains(event.target)) {
        dropdown.className = 'Navlist'; // Close the dropdown
        document.removeEventListener('click', closeDropdownOnClickOutside); // Remove the event listener once closed
    }
}
