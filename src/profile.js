async function loadProfile() {
    try {
        const user = await apiRequest('/api/me');
        console.log('Logged in as:', user.username);
        const profile = await apiRequest('/api/profile');
        document.getElementById('username').textContent = profile.username;
        document.getElementById('display-name').textContent = profile.displayName || "";
        document.getElementById('bio').textContent = profile.bio || "";
    } catch (error) {
        console.error(error);
        document.getElementById('message').textContent = 'Not logged in';
    }
}

loadProfile();
