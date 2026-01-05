document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const form = this;
    const loginPage = document.getElementById('login-page');
    const blackScreen = document.getElementById('black-screen');

    // Submit using Fetch API
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        // Form submit hote hi transition
        loginPage.style.display = 'none';
        blackScreen.style.display = 'block';
    }).catch(error => {
        // Error handling
        alert("Something went wrong. Please check your internet.");
    });
});