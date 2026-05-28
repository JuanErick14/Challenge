# Random User Explorer — NTT DATA Technical Challenge

Aplicación web que consume la API pública de [Random User](https://randomuser.me/) y muestra 10 usuarios con sus datos principales, integrando una experiencia de usuario moderna y responsiva.

---

## 🚀 Características Principales

- **Consumo de API en tiempo real** con manejo de estados (Cargando, Error, Éxito).
- **Dark/Light Theme** implementado con variables CSS y cambio dinámico de DOM.
- **Diseño Responsive** utilizando Flexbox para asegurar el centrado perfecto de los elementos en cualquier resolución.
- **Micro-interacciones y animaciones** de entrada en cascada para las tarjetas.

---

## 🛠️ Tecnologías utilizadas

- **HTML** — Estructura semántica.
- **CSS** — Variables, Flexbox, transiciones y tipografía dinámica (Nunito y Roboto).
- **JavaScript** — Consumo de API, manipulación del DOM y lógica de UI.
- **Random User API** — Fuente de datos.

> *Nota: El proyecto fue desarrollado enteramente con **JavaScript**, sin la utilización de frameworks externos.*

---

## 🏗️ Enfoque elegido: Front-end

Se seleccionó el **Enfoque Front-end** con una arquitectura de *Single Page Application* (SPA). La decisión se basa en que el objetivo principal del caso de negocio es el consumo eficiente de un servicio de datos y su óptima visualización e interacción en la interfaz.

---

## 📋 Datos mostrados por usuario

Por cada usuario se extraen y formatean los siguientes campos requeridos:

| Campo | Fuente en la API |
|---|---|
| Nombre completo | `user.name.first` + `user.name.last` |
| Género | `user.gender` |
| Ubicación | `user.location.city` + `user.location.country` |
| Correo electrónico | `user.email` |
| Fecha de nacimiento | `user.dob.date` (Formateado a estándar local) |
| Fotografía | `user.picture.large` |

---

## 📂 Estructura del proyecto

```text
/
├── index.html       # Estructura principal y maquetado
├── /assets
│   ├── style.css    # Estilos, variables de tema y animaciones
│   └── script.js    # Lógica de la aplicación y llamadas a la API
└── README.md        # Documentación del proyecto