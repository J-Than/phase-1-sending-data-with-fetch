function submitData(userName, userEmail) {
  const newUser = {
    name: userName,
    email: userEmail
  }
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(newUser),
  })
  .then (resp => resp.json())
  .then (data => {
    let p = document.createElement('p');
    p.textContent = data.id;
    document.querySelector('script').appendChild(p);
  })
  .catch (error => {
    let p = document.createElement('p');
    p.textContent = error.message;
    document.querySelector('script').appendChild(p);
  })
}
