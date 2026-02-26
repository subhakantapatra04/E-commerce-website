function validateEmail() {
    const email = document.getElementById("email").value;
    const result = document.getElementById("result");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        result.innerHTML = "Please enter an email";
        result.style.color = "orange";
    }
    else if (emailPattern.test(email)) {
        result.innerHTML = "Valid Email Address";
        result.style.color = "green";
    }
    else {
        result.innerHTML = "Invalid Email Address";
        result.style.color = "red";
    }
}