fetch('/api/greeting')
  .then(response => response.text())
  .then(greeting => {
    document.getElementById('greeting').innerText = greeting;
  });