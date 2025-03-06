document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let welcomeMessage = document.getElementById("welcomeMessage");

    if (username) {
        welcomeMessage.textContent = "Welcome, " + username + "!";
        welcomeMessage.classList.remove("hidden");
    }
});
