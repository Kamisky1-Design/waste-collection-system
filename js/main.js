// =============================
// Waste Collection System - Login Script
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");
  const logoutBtn = document.getElementById("logoutBtn");

  // Handle login form submission
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get input values
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Example credentials (you can modify this)
      const validUsername = "admin";
      const validPassword = "12345";

      // Check credentials
      if (username === validUsername && password === validPassword) {
        errorMsg.style.display = "none";
        alert("Login successful! Redirecting to dashboard...");

        // Redirect to dashboard page
        window.location.href = "dashboard.html";
      } else {
        errorMsg.style.display = "block";
      }
    });
  }

  // =============================
  // Logout Functionality
  // =============================
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("You have logged out successfully.");
      window.location.href = "index.html"; // Redirect to login page
    });
  }
});
