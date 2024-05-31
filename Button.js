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

//Se ingresa la imagen del logo por medio de api

fetch('https://my-json-server.typicode.com/LuisEDenegri/JuegosCaC/imagenes')
.then(response => response.json())
.then(data => {
const contenidoHeader = document.querySelector('.titulo__1');
contenidoHeader.innerHTML =`
<img class="logo__1" src="${data.imagen1}" alt="">
 `;})
.catch(error => console.error('Error al leer el archivo JSON:', error));

//Se ingresan las imagenes del Slider 1 por medio de api

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


//Se ingresan las imagenes del Slider 2 por medio de api

fetch('https://my-json-server.typicode.com/LuisEDenegri/JuegosCaC/imagenes')
.then(response => response.json())
.then(data => {
  const selectors = ['.swiper-img7', '.swiper-img8', '.swiper-img9', '.swiper-img10', '.swiper-img11','.swiper-img12'];
  const images = [data.imagen7, data.imagen8, data.imagen9, data.imagen10, data.imagen11,data.imagen12];
  
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
