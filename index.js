    let peso = document.querySelector('#peso');
    let altura = document.querySelector('#altura');
    
function calcular(){
    let IMC = peso.value/(altura.value*altura.value);
    let p = document.querySelector("#rS");
    
        if(IMC < 18.5 ){
            p.innerText = `Seu IMC é ${IMC.toFixed(2)}
            você esta abaixo do peso! `}
        if(IMC >= 18.5 && IMC <= 24.9){
            p.innerText = `Seu IMC é ${IMC.toFixed(2)}
             peso normal ! `
        } 
        if(IMC >= 25 && IMC <= 29.9){
            p.innerText = `Seu IMC é ${IMC.toFixed(2)}
             Excesso de peso ! `
        }; 
        if(IMC >=30 && IMC <= 34.9){
            p.innerText = `Seu IMC é ${IMC.toFixed(2)}
             Obesidade classe 1 `
        } 
        if(IMC >= 35 && IMC <= 39.9){
            p.innerText = `Seu IMC é ${IMC.toFixed(2)}
            Obesidade classe 2 `
        } 
        if(IMC >= 40){
            p.innerText = `Seu IMC é ${IMC.toFixed(2)}
            Obesidade classe 3 `
        }
    }