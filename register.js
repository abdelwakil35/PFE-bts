function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        // Passwords do not match; show an error message or take appropriate action.
        alert("Passwords do not match. Please try again.");
    } else {
        // Passwords match; you can proceed with registration.
        // For now, let's simulate a redirection to the home page.
        alert("Registration successful. Redirecting to the home page.");
        window.location.href = "App.html";
    }
}
