# 🍦 Mimi_Scoop — Tienda Web de Cucharitas Sorpresa

Aplicación web Full-Stack para *Mimi_Scoop*, un emprendimiento de cucharitas sorpresa con detalles dulces y personalizados. Permite explorar el catálogo de productos, gestionar cantidades en un carrito interactivo y enviar pedidos directamente por WhatsApp.

---

## ✨ Características Principales

- *Diseño Pastel & Estilo Burbuja:* Interfaz amigable, colorida y 100% responsiva (adaptada a celulares y computadores) con fondo animado en degradado pastel.
- *Catálogo Interactivo:* Tarjetas de productos con selección de cantidades (+ / −) y retroalimentación visual.
- *Carrito de Compras Dinámico:* Cálculo automático de subtotales y total en pesos colombianos (COP).
- *Pedidos Directos por WhatsApp:* Generación automática del mensaje con el resumen exacto del pedido listo para enviar.
- *Pedidos Personalizados:* Sección dedicada para cotizar cucharitas especiales.
- *API REST & Base de Datos:* Backend preparado con Node.js, Express y MongoDB para gestionar el catálogo de productos.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- *React* + *Vite*
- *JavaScript (ES6+)*
- *CSS3* (Animaciones @keyframes, Flexbox, CSS Grid y diseño responsivo)

### Backend
- *Node.js* + *Express*
- *MongoDB* + *Mongoose*
- *CORS* y *Dotenv*

---

## 📁 Estructura del Proyecto

```text
Mimi_Scoop/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js            # Conexión a MongoDB
│   │   └── models/
│   │       └── Producto.js      # Esquema de productos
│   ├── package.json
│   └── server.js                # Servidor Express y rutas de la API
│   └── Producto.js    
│
├── frontend/
│   ├── public/                  # Imágenes (logo.jpg, cucharita1.jpg, etc.)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Bienvenida.jsx
│   │   │   ├── Carrito.jsx
│   │   │   ├── ComoComprar.jsx
│   │   │   ├── Contacto.jsx
│   │   │   ├── Encabezado.jsx
│   │   │   ├── PedidoPersonalizado.jsx
│   │   │   ├── Productos.jsx
│   │   │   └── productosCard.jsx
│   │   ├── App.jsx              # Estado global del carrito y estructura
│   │   ├── App.css              # Estilos pastel y animaciones
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md

🚀 Cómo Ejecutar el Proyecto Localmente
Necesitarás tener instalado Node.js y MongoDB en tu computador.
1. Clonar el repositorio
git clone [https://github.com/tu-usuario/mimi-scoop.git](https://github.com/tu-usuario/mimi-scoop.git)
cd mimi-scoop

2. Configurar y encender el Backend
Abre una terminal en la carpeta backend:
cd backend
npm install
npm run dev

(Asegúrate de tener un archivo .env con tu PORT y MONGO_URI).
3. Configurar y encender el Frontend
Abre una segunda terminal en la carpeta frontend:
cd frontend
npm install
npm run dev

Luego abre en tu navegador la dirección que indica Vite (usualmente http://localhost:5173).
⚙️ Configuración de WhatsApp
 * frontend/src/components/Carrito.jsx
 * frontend/src/components/PedidoPersonalizado.jsx
💗 Autora
Desarrollado por Emily Unigarro — Mimi_Scoop © 2026.