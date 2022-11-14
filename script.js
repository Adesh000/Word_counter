let textString = document.getElementById("text");
let para = document.querySelector("p");

const countCharacter = () => {
    let str = textString.value;
    
    let numSpace = 0;
    for (let i=0; i<=str.length; i++){
        if(( str[i - 1] === " ") && (str[i] !== " ") ){
            numSpace += 1;
        }
    }
    
    para.innerHTML = `The number of characters in the string is ${str.length} and words are ${numSpace}`;

}

textString.addEventListener('input', countCharacter);