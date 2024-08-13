let navbar = document.getElementsByClassName('navigation')[0];
let menuButton = document.getElementsByClassName('menu')[0];
let closeButton = document.getElementsByClassName('close')[0];

function openMenu() {
    navbar.style.left = "0rem"; // Move the navbar to visible
    closeButton.style.display = "block"; // Show the close button
    menuButton.style.display = "none"; // Hide the menu button
}

function closeMenu() {
    navbar.style.left = "-30rem"; // Move the navbar back off-screen
    menuButton.style.display = "block"; // Show the menu button
    closeButton.style.display = "none"; // Hide the close button
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.backgroundColor = '#555'; // Change background color on focus
    });

    input.addEventListener('blur', function() {
        this.style.backgroundColor = '#333'; // Revert to original background color on blur
    });
});

function validateForm() {
    var isValid = true;

    // Clear previous errors
    var errors = document.querySelectorAll('.error');
    errors.forEach(function(error) {
        error.style.display = 'none';
    });

    // Validate name
    var name = document.getElementById('name');
    if (name.value.trim() === '') {
        var nameError = document.getElementById('nameError');
        nameError.style.display = 'block';
        name.classList.add('error');
        isValid = false;
    } else {
        name.classList.remove('error');
    }

    // Validate email
    var email = document.getElementById('email');
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        var emailError = document.getElementById('emailError');
        emailError.style.display = 'block';
        email.classList.add('error');
        isValid = false;
    } else {
        email.classList.remove('error');
    }

    // Validate WhatsApp number
    var whatsapp = document.getElementById('whatsapp');
    if (whatsapp.value.trim() === '') {
        var whatsappError = document.getElementById('whatsappError');
        whatsappError.style.display = 'block';
        whatsapp.classList.add('error');
        isValid = false;
    } else {
        whatsapp.classList.remove('error');
    }

    // Validate city
    var city = document.getElementById('city');
    if (city.value.trim() === '') {
        var cityError = document.getElementById('cityError');
        cityError.style.display = 'block';
        city.classList.add('error');
        isValid = false;
    } else {
        city.classList.remove('error');
    }

    return isValid;
}