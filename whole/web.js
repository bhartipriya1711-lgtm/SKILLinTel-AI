// ================= LOGIN MODAL =================

function openLogin() {

    document.getElementById("loginModal").style.display = "flex";

}


function closeLogin() {

    document.getElementById("loginModal").style.display = "none";

}


function openRegister() {

    document.getElementById("loginModal").style.display = "none";
    document.getElementById("registerModal").style.display = "flex";

}


function closeRegister() {

    document.getElementById("registerModal").style.display = "none";

}


function switchToRegister() {

    closeLogin();
    openRegister();

}


function switchToLogin() {

    closeRegister();
    openLogin();

}



// Close modal when clicking outside the login box

window.onclick = function(event) {

    const modal = document.getElementById("loginModal");

    const registerModal = document.getElementById("registerModal");

    if (event.target === modal || event.target === registerModal) {

        modal.style.display = "none";
        registerModal.style.display = "none";

    }

};



// ================= LOGIN DEMO =================

function loginUser() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if (email === "" || password === "") {

        alert("Please enter your Email/User ID and Password.");

        return;

    }


    alert(
        "Login successful!\n\n" +
        "Welcome to SkillPath AI Dashboard."
    );


    closeLogin();

}



// ================= SMOOTH SCROLL =================

function scrollToSection(sectionId) {

    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });

}


function registerUser() {

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {

        alert("Please complete all registration fields.");

        return;

    }

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }

    alert(
        "Registration successful!\n\n" +
        "You can now login to SkillPath AI."
    );

    closeRegister();
    openLogin();

}