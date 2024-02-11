let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;    

//console.log(numeroSecreto);

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'indica un numero del 1 al 10'; se elimino
//SE REDUCE A ESTA FUNCION
function asignarTextoElemento(elemento, texto){
          //CAMBIAR EL NOMBRE //                //h1    
     let elementoHTML = document.querySelector(elemento);
                    //juego del numero secreto;
 elementoHTML.innerHTML = texto;
 return;
}

//    intentoDeUsuario se cabio el nombre a:
function verificarIntento (){
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
     if (numeroDeUsuario === numeroSecreto) {
          asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos ===1)?'ves' : 'veses'}`);
          document.getElementById('reiniciar').removeAttribute('disabled');
     } else{
          // el usuarui no acerto.
            if(numeroDeUsuario > numeroSecreto) {
               asignarTextoElemento('p', 'numero secreto es menor');
            }else{
               asignarTextoElemento('p', 'numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
     }
 return;
}
function limpiarCaja(){
     document.querySelector('#valorUsuario').value ='';
     
}
function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
         console.log(numeroGenerado);
         console.log(listaNumerosSorteados);
      //si ya sorteamos todos los numeros
      if (listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p','ya se sortearon todos los numeros pocibles');
     }else{
       //si el numero generado esta incluido en la lista
       if (listaNumerosSorteados.includes(numeroGenerado)){
         return generarNumeroSecreto();
      } else{
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
      }
      }
}

function condicionesIniciales(){
     asignarTextoElemento('h1','juego del numero secreto!');
     asignarTextoElemento('p',`indica un numero de 1 al ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
     intentos = 1;
     console.log(numeroSecreto);
}

function reiniciarJuego() {
 //limpiar caja 
 limpiarCaja();
 //iniciar mensaje intervalo de numeros
//generar el numero aleatorio
//inicializar el numero intentos
condicionesIniciales();
//desabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();