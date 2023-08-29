// relacionar html con js

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');// el # por que es una id 
const input2 = document.querySelector('#calculo2');// el # por que es una id 
const btn = document.querySelector('#btnCalcular');// el # por que es una id 
const pResult = document.querySelector('#result');
const form = document.querySelector("#form");

//ewsuchar eventos

form.addEventListener('submit',btnOnclick); // (que evento llamr, que funcion llamar para evento )

function btnOnclick(event){
    console.log({event});
    event.preventDefault();
    const sumaInpust = input1.value + input2.value ;
    pResult.innerText = "Resultado: " + sumaInpust;
}