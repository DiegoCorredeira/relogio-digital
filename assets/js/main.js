const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();


    if(hora < 10) hora = '0' + hora;
    if(minuto < 10) minuto = '0' + minuto;
    if(minuto < 10) segundo = '0' + segundo;


    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
});
function zoomLento(){
    let imagem = document.getElementById("imagem");
    for (let i = 100; i <= 130; i++){
        setTimeout(function(){
            zoom(imagem);
        }, 100 * (i / 10))
    }
}

function zoom(image){
    let width = image.width + 1;
    image.style.width = width + 'px';
    image.style.height = 'auto';
}


zoomLento();