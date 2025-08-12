document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from submitting

  // Get values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Error fields
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");
  let successMessage = document.getElementById("successMessage");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  // Validation flag
  let valid = true;

  // Validate name
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Validate email
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple regex for email
  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  }

  // Validate message
  if (message === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    successMessage.textContent = "✅ Your message has been sent successfully!";
    document.getElementById("contactForm").reset();
  }
});
