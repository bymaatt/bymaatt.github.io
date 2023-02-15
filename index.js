const alfa=["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"]
const inputOriginal=document.getElementById('input-original');
const cifrador= document.getElementById('cifrador');
const resultado= document.getElementById('resultado');

const shifMessage= ()=>{
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray)=>{
    if(wordArray.length===currentLetterIndex)
    return;
    inputOriginal.value= inputOriginal.value.substring(1);
    const spanChar=document.createElement("span")
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then(()=>{
            const charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfa.includes(charSinCodificar) ? alfa[(alfa.indexOf(charSinCodificar) + parseInt(rango.value)) % alfa.length ] : charSinCodificar
            printChar (currentLetterIndex + 1, wordArray);
        })
}

const animateChar = spanChar =>{
    let cambioDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(()=>{
                spanChar.innerHTML=alfa[Math.floor(Math.random()* alfa.length)];
                cambioDeLetra++;
                if(cambioDeLetra===3){
                    clearInterval(intervalo);
                    resolve();
                }
        },50);
    });
}


const submit = e =>{
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage()
}


cifrador.onsubmit=submit;
