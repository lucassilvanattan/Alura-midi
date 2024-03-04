// document.querySelector('.tecla_pom').onclick = tocaSomPom;
// function tocaSom (idTagAudio) {
//     document.querySelectorAll('idTagAudio').play()
// }
const listaSons = document.querySelectorAll('audio');
const listaDeTeclas = document.querySelectorAll(".tecla");
// let contador = 0

// while(contador < listaDeTeclas.length) {
//     const instrumento = listaDeTeclas[contador].classList[1];
//     console.log(instrumento)

//     listaDeTeclas[contador].onclick = () => {

//     };

//     contador++
//     console.log(contador)
    
// }

for(let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]
    tecla.onclick = () => {
        listaSons[i].play()
    }
    
    tecla.onkeydown = function(evento) {
        console.log(evento.code)
        if(evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa')

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }}}

}

