import productos from './db/productos'
import './sass/main.scss'

console.log(productos)

let contenedorProductos = document.getElementById('container-productos')
console.log(contenedorProductos)

let start = () => {
    console.warn('Se cargó el HTML')

    let html = ''
    /* debugger */
    productos.forEach(prod => {
        console.log(prod)
       /*  debugger */
        html += `<div class="card">
            <article class="card__article">
              <div class="card__image-container">
                <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
              </div>
                <div class="card__content">
                  <h2 class="card__heading">${prod.nombre}</h2>
                  <div class="card__description">
                    <p>${prod.descripcion}</p>
                    <button class="card__button">Ver producto</button>                            
                </div>
              </div>
            </article>
          </div>`
    })
    /* debugger */
    console.log(html)

    contenedorProductos.innerHTML = html
}

window.addEventListener('DOMContentLoaded', start)
