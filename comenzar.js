const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta') 
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 5//prompt("¿Cuantos niveles quieres jugar?","1, 2, 3 ...");

function empezarJuego() {
    window.juego = new Juego()
}

