document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    // No leasing inbox has been provided yet; update LEASING_EMAIL once one exists.
    var LEASING_EMAIL = "";

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = contactForm.name.value;
      var phone = contactForm.phone.value;
      var email = contactForm.email.value;
      var message = contactForm.message.value;

      var subject = "Socastee Town Center Inquiry from " + name;
      var body =
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n\n" +
        message;

      var mailto =
        "mailto:" + LEASING_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
});
