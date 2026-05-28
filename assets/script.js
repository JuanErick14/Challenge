/* URL de la API */
const API_URL = "https://randomuser.me/api/?results=10";

/* Función para obtener y mostrar usuarios */
async function loadUsers() {
    const btn    = document.getElementById("loadBtn");
    const status = document.getElementById("status");
    const grid   = document.getElementById("users-grid");
    const count  = document.getElementById("resultsCount");

    // Estado: cargando
    btn.disabled = true;
    btn.textContent = "Cargando...";
    status.innerHTML = '<span class="spinner"></span> Obteniendo datos de la API...';
    grid.innerHTML = "";
    count.innerHTML = "";

    try {
    // Llamar API
    const response = await fetch(API_URL);

    // Verificar respuesta exitosa
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }

    // Convertir a JSON
    const data = await response.json();

    // Limpiar estado
    status.innerHTML = "";

    // Render de cada usuario
    data.results.forEach((user, index) => {
        const card = createUserCard(user, index);
        grid.appendChild(card);
    });

    // Mostrar contador
    count.innerHTML = `Mostrando <strong>${data.results.length}</strong> usuarios`;

    } catch (error) {    
    // Manejar errores
    status.innerHTML = "";
    grid.innerHTML = `
        <div class="error-msg" style="grid-column: 1/-1">
        <span>⚠️</span>
        <p>No se pudo conectar a la API.</p>
        <p style="font-size:12px;margin-top:8px">${error.message}</p>
        </div>`;
    } finally {
    // Restaurar el botón
    btn.disabled = false;
    btn.textContent = "⟳ Cargar 10 usuarios";
    }
}

/* Función para construir una tarjeta de usuario */
function createUserCard(user, index) {
    // Extraer datos
    const fullName  = `${user.name.first} ${user.name.last}`;
    const gender    = user.gender === "male" ? "Masculino" : "Femenino";
    const genderIcon= user.gender === "male" ? "♂" : "♀";
    const genderClass = user.gender === "male" ? "gender-male" : "gender-female";
    const location  = `${user.location.city}, ${user.location.country}`;
    const email     = user.email;
    const birthDate = formatDate(user.dob.date);
    const photo     = user.picture.large;

    // Construir el HTML
    const card = document.createElement("div");
    card.className = "user-card";
    card.style.animationDelay = `${index * 60}ms`;

    card.innerHTML = `
    <div class="card-header">
        <div class="avatar-wrapper">
        <img class="avatar" src="${photo}" alt="Foto de ${fullName}" loading="lazy"/>
        <div class="gender-badge ${genderClass}">${genderIcon}</div>
        </div>
        <div class="user-name">${fullName}</div>
    </div>
    <div class="card-body">
        <div class="info-row">
        <div class="info-icon">👤</div>
        <div class="info-content">
            <div class="info-label">Género</div>
            <div class="info-value">${gender}</div>
        </div>
        </div>
        <div class="info-row">
        <div class="info-icon">📍</div>
        <div class="info-content">
            <div class="info-label">Ubicación</div>
            <div class="info-value">${location}</div>
        </div>
        </div>
        <div class="info-row">
        <div class="info-icon">✉️</div>
        <div class="info-content">
            <div class="info-label">Correo</div>
            <div class="info-value">${email}</div>
        </div>
        </div>
        <div class="info-row">
        <div class="info-icon">🎂</div>
        <div class="info-content">
            <div class="info-label">Fecha de nacimiento</div>
            <div class="info-value">${birthDate}</div>
        </div>
        </div>
    </div>
    `;

    return card;
}

/* Función para formatear fecha */
function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString("es-PE", {
    day:   "2-digit",
    month: "long",
    year:  "numeric"
    });
}

/* Función para limpiar grilla */
function clearUsers() {
    document.getElementById("users-grid").innerHTML = "";
    document.getElementById("resultsCount").innerHTML = "";
    document.getElementById("status").innerHTML = "";
}

/* Cargar automáticamente */
loadUsers();

/* Función para tema oscuro o claro */
function toggleTheme() {
    // Alterna la clase en el body
    document.body.classList.toggle("light-theme");
    
    // Captura el botón
    const btn = document.getElementById("themeToggleBtn");
    
    // Si el body tiene la clase light-theme, pone la luna. Si no, pone el sol.
    if (document.body.classList.contains("light-theme")) {
        btn.textContent = "🌙";
    } else {
        btn.textContent = "☀️";
    }
}