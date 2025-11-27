// Espera a que el DOM esté completamente cargado antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", function() {
    // Definiciones (los IDs que el JS debe encontrar)
    const body = document.body;
    const toggleBtn = document.getElementById("toggle-theme"); 
    const icon = document.getElementById("icon");

    // --- FUNCIÓN PRINCIPAL DE CAMBIO DE TEMA ---
    function toggleTheme() {
        // Alterna la clase 'dark' en el body
        body.classList.toggle("dark");

        // Guarda el estado en localStorage y actualiza el ícono
        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            icon.textContent = "🌙"; // Modo Oscuro: Luna
        } else {
            localStorage.setItem("theme", "light");
            icon.textContent = "🌞"; // Modo Claro: Sol
        }
    }

    // --- LÓGICA DE INICIALIZACIÓN (Al cargar la página) ---
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        icon.textContent = "🌙";
    } else {
        icon.textContent = "🌞";
    }

    // --- ASIGNAR EVENTO (Solo si encontramos el botón) ---
    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleTheme);
        console.log("Evento 'click' asignado al botón de tema."); // Línea de ayuda
    } else {
        console.error("Error: No se encontró el botón con ID 'toggle-theme'."); // Línea de ayuda
    }
});