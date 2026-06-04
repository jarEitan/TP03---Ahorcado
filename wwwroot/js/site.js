
// ===== ELEMENTOS DEL DOM =====
const palabra = document.getElementById("palabra");
const misterio = document.getElementById("misterio");
const inputEntrada = document.getElementById("entrada");
const vidasElem = document.getElementById("intentos");
const victoriaElem = document.getElementById("victoria");

// ===== INICIALIZACIÓN DEL JUEGO =====
let oculto = "";
for(let i = 0; i < palabra.textContent.length; i++){
    oculto += "_";
}
misterio.innerHTML = oculto;

// ===== FUNCIÓN PRINCIPAL =====
function ArriesgarLetra(){
    const palabraTexto = palabra.textContent;
    const letra = inputEntrada.value[0].toUpperCase();
    
    if(!letra) return; // Evitar procesar entrada vacía
    
    if(palabraTexto.includes(letra)){
        // Letra correcta: actualizar palabra oculta
        let ocultArray = oculto.split('');
        
        for(let i = 0; i < palabraTexto.length; i++){
            if(palabraTexto[i] === letra){
                ocultArray[i] = letra;
            }
        }
        
        oculto = ocultArray.join('');
        misterio.innerHTML = oculto;
        
        // Revisar si ganó
        if(!oculto.includes("_")){
            victoriaElem.innerHTML = "¡Has ganado!";
        }
    } 
    else {
        // Letra incorrecta: restar vidas
        let vidas = parseInt(vidasElem.textContent);
        vidas -= 1;
        
        vidasElem.innerHTML = vidas;
        
        if(vidas === 0){
            victoriaElem.innerHTML = "¡Has perdido! La palabra era: " + palabraTexto;
        }
    }
    
    // Limpiar input para siguiente intento
    inputEntrada.value = "";
    inputEntrada.focus();
}