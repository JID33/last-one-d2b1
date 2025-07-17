document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Les mots de passe ne correspondent pas.');
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Inscription réussie !");
  window.location.href = "login.html";
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "admin.html";
  } else {
    alert("Identifiants incorrects.");
  }
});
