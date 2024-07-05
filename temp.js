document.addEventListener('DOMContentLoaded', function () {
    checkLoginStatus();

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'username': username,
                'password': password
            })
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('message').textContent = data.message;
                if (data.status === 'success') {
                    localStorage.setItem('loggedIn', true);
                }
            });
    });
});

function checkLoginStatus() {
    fetch('/check_login')
        .then(response => response.json())
        .then(data => {
            if (data.logged_in) {
                document.getElementById('message').textContent = 'Already logged in as ' + data.username;
                localStorage.setItem('loggedIn', true);
            } else {
                localStorage.setItem('loggedIn', false);
            }
        });
}