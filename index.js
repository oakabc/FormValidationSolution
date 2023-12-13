document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form submission by default
    event.preventDefault();

    // Validation flags
    let isValid = true;

    // First Name Validation
    const firstName = document.getElementById('firstName');
    if (!firstName.value.trim()) {
        document.getElementById('firstNameError').textContent = 'First Name is required.';
        isValid = false;
    } else {
        document.getElementById('firstNameError').textContent = '';
    }

    // Last Name Validation
    const lastName = document.getElementById('lastName');
    if (!lastName.value.trim()) {
        document.getElementById('lastNameError').textContent = 'Last Name is required.';
        isValid = false;
    } else {
        document.getElementById('lastNameError').textContent = '';
    }

    // Email Validation
    const email = document.getElementById('email');
    if (!email.value.trim()) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Password Validation
    const password = document.getElementById('password');
    if (password.value.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }

    // Age Validation
    const age = document.getElementById('age');
    if (age.value && age.value < 0) {
        document.getElementById('ageError').textContent = 'Age must be a positive number.';
        isValid = false;
    } else {
        document.getElementById('ageError').textContent = '';
    }

    // Gender Validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select a gender.';
        isValid = false;
    } else {
        document.getElementById('genderError').textContent = '';
    }

    // Terms and Conditions Validation
    const terms = document.getElementById('terms');
    if (!terms.checked) {
        document.getElementById('termsError').textContent = 'You must accept the Terms and Conditions.';
        isValid = false;
    } else {
        document.getElementById('termsError').textContent = '';
    }

    // If all validations pass, form can be submitted
    if (isValid) {
        this.submit();
    }
});
