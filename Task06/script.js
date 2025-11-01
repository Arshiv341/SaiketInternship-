// Buy button functionality
document.getElementById("buyBtn").addEventListener("click", () => {
  alert("Thank you for your interest! This feature will be available soon.");
});

// Contact form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been received.`);
  form.reset();
});
