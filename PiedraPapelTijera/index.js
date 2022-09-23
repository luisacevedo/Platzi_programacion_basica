function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function elegir(jugada){
    let str = "";
    if(jugada == 1){ str = "🪨"; }
    if(jugada == 2){ str = "🧻"; }
    if(jugada == 3){ str = "✂️"; }
    return str;
}

const min = 1;
const max = 3;
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
//1 es piedra, 2 es papel, 3 es tijera

while(triunfos < 3 && perdidas < 3){
    let ver = true;
    pc = aleatorio(min,max);
    
    while(ver){
        jugador = Number(prompt("Elige: 1 para piedra, 2 para papel o 3 para tijera"));
        if(!isNaN(jugador) && (jugador == 1 || jugador == 2 || jugador == 3)){
            ver = false;
            alert("Elegiste " + elegir(jugador));
        } else{
            alert("Elige una de las opciones");
        }
    }

    alert("El pc eligió " + elegir(pc));

    if(pc == jugador){
        alert("EMPATE");
    } else if((jugador - pc) == 1 || (jugador - pc) == -2){
        alert("GANASTE");
        triunfos++;
    } else{
        alert("PERDISTE");
        perdidas++;
    }
    alert("Llevas " + triunfos + " ganadas y " + perdidas + " perdidas.");
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");