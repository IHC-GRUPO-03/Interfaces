
// Cargar el Header
fetch("../compomentes/header.html")
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data)
    .catch(error => console.error('Error cargando el header:', error));

// Cargar el Footer
fetch('../compomentes/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-placeholder').innerHTML = data)
    .catch(error => console.error('Error cargando el footer:', error));
