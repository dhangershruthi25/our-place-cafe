// =========================
// MENU BUTTON
// =========================

const menuButton = document.getElementById("menuButton");
const menuMessage = document.getElementById("menuMessage");

if (menuButton && menuMessage) {

    menuButton.addEventListener("click", function () {

        console.log("Menu button was clicked!");

        menuMessage.textContent = "Welcome to our menu!";
        menuMessage.style.opacity = "1";

    });

}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


if (contactForm && formMessage) {

    const submitButton = contactForm.querySelector("button");


    // =========================
    // FORM SUBMIT
    // =========================

    contactForm.addEventListener("submit", function (event) {

        // Stop page refresh
        event.preventDefault();


        // =========================
        // GET FORM VALUES
        // =========================

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Clear old message
        formMessage.textContent = "";


        // =========================
        // VALIDATE NAME
        // =========================

        if (name === "") {

            formMessage.textContent =
                "Please enter your name.";

            formMessage.style.color = "red";

            return;
        }


        // =========================
        // VALIDATE EMAIL
        // =========================

        if (email === "") {

            formMessage.textContent =
                "Please enter your email.";

            formMessage.style.color = "red";

            return;
        }


        // Check email format
        if (!email.includes("@") || !email.includes(".")) {

            formMessage.textContent =
                "Please enter a valid email.";

            formMessage.style.color = "red";

            return;
        }


        // =========================
        // VALIDATE MESSAGE
        // =========================

        if (message === "") {

            formMessage.textContent =
                "Please enter your message.";

            formMessage.style.color = "red";

            return;
        }


        // =========================
        // LOADING EFFECT
        // =========================

        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        formMessage.textContent = "";


        // =========================
        // SIMULATE SENDING
        // =========================

        setTimeout(function () {

            formMessage.textContent =
                "Thank you! Your message has been submitted.";

            formMessage.style.color = "green";


            // Clear form
            contactForm.reset();


            // Restore button
            submitButton.textContent = "Send Message";
            submitButton.disabled = false;

        }, 1500);

    });


    // =========================
    // CLEAR ERROR WHEN TYPING
    // =========================

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");


    nameInput.addEventListener("input", function () {

        formMessage.textContent = "";

    });


    emailInput.addEventListener("input", function () {

        formMessage.textContent = "";

    });


    messageInput.addEventListener("input", function () {

        formMessage.textContent = "";

    });

}


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll("section");


// Add reveal class

sections.forEach(function (section) {

    section.classList.add("reveal");

});


// =========================
// INTERSECTION OBSERVER
// =========================

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});


// Observe sections

sections.forEach(function (section) {

    observer.observe(section);

});

