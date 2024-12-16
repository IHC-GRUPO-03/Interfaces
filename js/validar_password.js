document.getElementById('registerForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var errorMessage = document.getElementById('error-message');
    
    if (password !== confirmPassword) {
        event.preventDefault(); // Evita que el formulario se envíe
        errorMessage.style.display = 'block'; // Muestra el mensaje de error
    } else {
        errorMessage.style.display = 'none'; // Oculta el mensaje de error
    }
})