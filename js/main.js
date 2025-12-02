document.addEventListener("DOMContentLoaded", () => {
  // Handle Admin Login
  const adminLoginForm = document.getElementById("adminLoginForm");
  const adminErrorMsg = document.getElementById("adminErrorMsg");

  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("adminUsername").value.trim();
      const password = document.getElementById("adminPassword").value.trim();

      if (username === "admin" && password === "admin123") {
        localStorage.setItem("adminLoggedIn", "true");
        window.location.href = "admin-dashboard.html";
      } else {
        adminErrorMsg.style.display = "block";
      }
    });
  }

  // Handle Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("adminLoggedIn");
      window.location.href = "admin-login.html";
    });
  }
});
