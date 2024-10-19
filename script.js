let valid = true;
var nme = document.getElementById("name").value.trim();
if (nme === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
}
var email = document.getElementById("email").value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        valid = false;
    }

    // Phone Number Validation
    var phone = document.getElementById("phone").value.trim();
    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits.";
        valid = false;
    }

    // Date of Birth Validation
    var dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("dobError").textContent = "Date of birth is required.";
        valid = false;
    }

    // Gender Validation
    var gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("genderError").textContent = "Please select a gender.";
        valid = false;
    }

    // Age Validation
    var age = document.getElementById("age").value.trim();
    if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById("ageError").textContent = "Age must be between 1 and 120.";
        valid = false;
    }

    // Password Validation
    var password = document.getElementById("password").value.trim();
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    // Confirm Password Validation
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        valid = false;
    }

    // Address Validation
    var address = document.getElementById("address").value.trim();
    if (address === "") {
        document.getElementById("addressError").textContent = "Address is required.";
        valid = false;
    }

    // City Validation
    var city = document.getElementById("city").value.trim();
    if (city === "") {
        document.getElementById("cityError").textContent = "City is required.";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
    }

























