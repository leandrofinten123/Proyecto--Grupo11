 function validarFormulario(event) {
            event.preventDefault(); // Prevenir el envío automático del formulario

            //Se declaran las variables
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            var emailError = document.getElementById("emailError");
            var passwordError = document.getElementById("passwordError");

            var isValid = true;
            // Validar correo electrónico
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                emailError.textContent = "Por favor, ingrese un correo electrónico válido.";
                emailError.style.display = "block";
                isValid = false;
            } else {
                emailError.textContent = ""; // Limpiar mensaje de error
                emailError.style.display = "none";
            }

            // Validar contraseña (al menos 8 caracteres)
            if (password.length < 8) {
                passwordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
                passwordError.style.display = "block";
                isValid = false;
            } else {
                passwordError.textContent = ""; // Limpiar mensaje de error
                passwordError.style.display = "none";
            }

            if (isValid) {
                // Redirigir a index.html si todo está correcto
                window.location.href = "index.html";
            }
        }
