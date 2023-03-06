
function reverso(str){
    
    let palavras = "";
    for (let i = str.length - 1; i >= 0; i--) {
        palavras += str[i];
    
    }
    console.log(palavras)
}


reverso('Target Sistemas');