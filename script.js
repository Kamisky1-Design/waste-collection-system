const loginForm = document.getElementById('loginForm');
const signupLink = document.getElementById('signupLink');

// Simulated user data (we’ll connect to a database later)
const users = {
  "admin": "12345",
  "collector": "waste2025"
};

// Handle login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (users[username] && users[username] === password) {
    alert('✅ Login successful! Welcome ' + username);
    window.location.href = 'dashboard.html'; // next page (we’ll create it)
  } else {
    alert('❌ Invalid username or password. Try again.');
  }
});

// Redirect to signup (later we'll create signup.html)
signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Signup page coming soon...');
});

