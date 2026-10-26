const cv = document.querySelector('[data-form-cv]');
const textos=["soy Desarrollador Web", "soy Desarrollador de Videojuegos"]
let i=0;

const optenercv =(event)=>{
event.preventDefault();
const pdfUrl = cv.getAttribute('href');
window.open(pdfUrl, '_blank');
}

function cambioTexto(){
    document.getElementById('cambioTexto').textContent=textos[i];
    i=(i+1)%textos.length;
}
setInterval(cambioTexto,2000);
cv.addEventListener('click',optenercv);


$(document).ready(function(){
  $('.academic__courses-slider').slick({
    autoplay:true,
    slidesToShow: 3, // Número de elementos visibles a la vez
    slidesToScroll: 1, // Número de elementos a desplazar al avanzar o retroceder
    autoplay: true, // Reproducción automática
    autoplaySpeed: 2000, // Velocidad de reproducción automática en milisegundos
    responsive: [
      {
        breakpoint: 768, // Cambiar el número de elementos visibles en esta resolución
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480, // Cambiar el número de elementos visibles en esta resolución
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
})
