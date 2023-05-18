const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
 const textoEncriptado =  encriptar (textArea.value);
 mensaje.value = textoEncriptado;
 textArea.value = "";
 mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado =  desencriptar (textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
   }

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i<matrizCodigo.length; i++){ //La condición es stringEncriptada. Para verificar que las letras están siendo ingresadas es .includes(). Después poner la llave que va a ser verificada (matrizCodigo). Luego, ponerle el índice y la posición a la llave.
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        return stringEncriptada;
    }
}
    
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
       stringDesencriptada = stringDesencriptada.toLowerCase();
    
        for(let i = 0; i<matrizCodigo.length; i++){ //La condición es stringEncriptada. Para verificar que las letras están siendo ingresadas es .includes(). Después poner la llave que va a ser verificada (matrizCodigo). Luego, ponerle el índice y la posición a la llave.
            if(stringDesencriptada.includes(matrizCodigo[i][0])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0] );
            }
            return stringDesencriptada;
        }
}
