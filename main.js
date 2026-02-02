document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
  }

  // Dynamic year in footer
  var yearSpan = document.getElementById("yearSpan");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Contact form (frontend-only behavior)
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("contactName").value.trim();
      var phone = document.getElementById("contactPhone").value.trim();
      var email = document.getElementById("contactEmail").value.trim();
      var message = document.getElementById("contactMessage").value.trim();

      if (!name || !phone) {
        alert("Please enter your name and mobile number.");
        return;
      }

      var text = "New enquiry from Hariom Diagnostics website:%0A";
      text += "Name: " + encodeURIComponent(name) + "%0A";
      text += "Mobile: " + encodeURIComponent(phone) + "%0A";
      if (email) {
        text += "Email: " + encodeURIComponent(email) + "%0A";
      }
      if (message) {
        text += "Message: " + encodeURIComponent(message) + "%0A";
      }

      var whatsappNumber = "91XXXXXXXXXX"; // Replace with actual number
      var waUrl = "https://wa.me/" + whatsappNumber + "?text=" + text;
      window.open(waUrl, "_blank");
    });
  }
});

