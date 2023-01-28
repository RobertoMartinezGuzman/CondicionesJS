//Desafio parte 1
const imagen = document.querySelector('#imagen')

imagen.addEventListener("click", function cambioBorde() {   
if (imagen.style.border == "none") {
    imagen.style.border = "2px solid red"
} else {
    imagen.style.border = "none"
}
})

//Desafio parte 2

resultadoTexto=document.querySelector('#resultadoTexto')
botonVerificacion=document.querySelector('#botonVerificacion')

botonVerificacion.onclick = function() {
    input1=Number(document.querySelector('#input1').value);
    input2=Number(document.querySelector('#input2').value);
    input3=Number(document.querySelector('#input3').value);
    suma=input1+input2+input3;
    maximo =10;
    resultadoCorrecto = "Llevas " + suma + " stickers";
    resultadoIncorrecto = "Llevas demasiados stickers";
    if(suma<=maximo){
        resultadoTexto.innerHTML = resultadoCorrecto;
    }
    else{
        resultadoTexto.innerHTML = resultadoIncorrecto;
    }
}



//Desafio parte 3

botonIngresar=document.querySelector('#botonIngresar');
resultadoPassword=document.querySelector('#resultadoPassword');
numeroIngresado1=Number(document.querySelector('#numeroIngresado1').value);
numeroIngresado2=Number(document.querySelector('#numeroIngresado2').value);
numeroIngresado3=Number(document.querySelector('#numeroIngresado3').value);

botonIngresar.onclick=function() {
    numeroIngresado1=Number(document.querySelector('#numeroIngresado1').value);
    numeroIngresado2=Number(document.querySelector('#numeroIngresado2').value);
    numeroIngresado3=Number(document.querySelector('#numeroIngresado3').value);

if(numeroIngresado1==9 && numeroIngresado2==1 && numeroIngresado3==1) {
    resultadoPassword.innerHTML = "Password 1 correcto"
}
else if (numeroIngresado1==7 && numeroIngresado2==1 && numeroIngresado3==4) {
    resultadoPassword.innerHTML = "Password 2 correcto"
}
else {
    resultadoPassword.innerHTML = "Password incorrecto"
}
}