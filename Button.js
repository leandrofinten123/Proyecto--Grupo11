const botonMenu = document.querySelector(".button__1");
const botonCerrar = document.querySelector(".botoncerrar");
const menu = document.querySelector(".menudesplegable");

botonMenu.addEventListener("click", function() {
  menu.classList.toggle("mostrar");
});

botonCerrar.addEventListener("click", function() {
  menu.classList.remove("mostrar");
});

const boton2Menu = document.querySelector(".button__2");
const boton2Cerrar = document.querySelector(".botoncerrar2");
const menu2 = document.querySelector(".menudesplegable2");

boton2Menu.addEventListener("click", function() {
  menu2.classList.toggle("mostrar");
});

boton2Cerrar.addEventListener("click", function() {
  menu2.classList.remove("mostrar");
});


fetch('https://my-json-server.typicode.com/LuisEDenegri/JuegosCaC/imagenes')
.then(response => response.json())
.then(data => {
const contenidoHeader = document.querySelector('.titulo__1');
contenidoHeader.innerHTML =`
<img class="logo__1" src="${data.imagen1}" alt="">
 `;})
.catch(error => console.error('Error al leer el archivo JSON:', error));

fetch('https://my-json-server.typicode.com/LuisEDenegri/JuegosCaC/imagenes')
  .then(response => response.json())
  .then(data => {
    const selectors = ['.swiper-img2', '.swiper-img3', '.swiper-img4', '.swiper-img5', '.swiper-img6','.swiper-img'];
    const images = [data.imagen2, data.imagen3, data.imagen4, data.imagen5, data.imagen6,data.imagen15];
    
    selectors.forEach((selector, index) => {
      const contenidoMain = document.querySelector(selector);
      if (contenidoMain && images[index]) {
        contenidoMain.innerHTML = `<img src="${images[index]}" alt="">`;
      } else {
        console.error(`No se encontró el contenedor para el selector ${selector} o la imagen no está disponible`);
      }
    });
  })
  .catch(error => console.error('Error al leer el archivo JSON:', error));


















  function crearElementoJuego(juego) {
    const juegoDiv = document.createElement('div');
    juegoDiv.innerHTML = `
        <h3>${juego.nombre}</h3>
        <p><strong>Género:</strong> ${juego.genero}</p>
        <p><strong>Imagen:</strong> <a href="${juego.imagen}" target="_blank">${juego.imagen}</a></p>
        <button class="btn-eliminar" data-id="${juego.id}">Eliminar</button>
    `;
    return peliculaDiv;
}

// Evento click para obtener películas
document.getElementById('btn-obtener').addEventListener('click', function() {
    fetch('http://127.0.0.1:8000/api/juegos/')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de películas');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('juegos-container');
        container.innerHTML = '';  // Limpiar contenedor antes de mostrar películas

        data.forEach(juego => {
            const juegoDiv = crearElementoPelicula(juego);
            container.appendChild(juegoDiv);

            // Evento click para eliminar película
            juegoDiv.querySelector('.btn-eliminar').addEventListener('click', function() {
                const juegoId = this.getAttribute('data-id');
                eliminarPelicula(juegoId);
            });
        });
    })
    .catch(error => {
        console.error('Hubo un problema al obtener las películas:', error);
        alert('Hubo un problema al obtener las películas. Consulta la consola para más detalles.');
    });
});

// Función para eliminar película
function eliminarJuego(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta película?')) {
        return;
    }
    fetch(`http://127.0.0.1:8000/api/juegos/${id}/`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo eliminar el juego');
        }
        alert('Juego eliminado correctamente');
        // Volver a cargar la lista de películas después de eliminar
        document.getElementById('btn-obtener').click();
    })
    .catch(error => {
        console.error('Hubo un problema al eliminar el juego:', error);
        alert('Hubo un problema al eliminar el juego. Consulta la consola para más detalles.');
    });
}










