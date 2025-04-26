function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('userList').style.display = 'block';

      const usersDiv = document.getElementById('users');
      usersDiv.innerHTML = '';
      data.users.forEach(user => {
        usersDiv.innerHTML += `
          <div class="user-card">
            <img src="${user.photo}" alt="${user.name}">
            <p>${user.name}</p>
          </div>
        `;
      });
    } else {
      alert('Login gagal!');
    }
  });
}