const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    message.textContent = 'Logging in...';
    
    try {
        const user = await apiRequest('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });

        message.textContent = `Welcome, ${user.username}!`;
        console.log(user);
    } catch (error) {
        message.textContent = error.message;
    }
});
