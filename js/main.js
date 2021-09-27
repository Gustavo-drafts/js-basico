// variáveis
// console.log();
// array e dicionário
// condicional (if else)


/* ----------- laços de repetição while e for ---------- */

/*
for (var cont = 0; cont <= 5; cont++){
  alert(cont);  
};
*/

// push, pop, e length
// reverse array
// toString para array
// join para array
// replace
// lowerCase, upperCase

/* ------------- redirecionar para outra página ----------------*/

/*
function clicou(){    
}

function redirect(){
    window.open("https://animesonline.cc/tv/"); // abre outra aba
    window.location.href = "https://animesonline.cc/tv/"; // abre na mesma janela
}
*/

/* ------------- date ----------------*/

/*
var d = new Date
alert(d.getMonth()+1)
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
alert(d.getMonth())
*/

/* ------------- function ----------------*/

/*
function soma(n1, n2) {
  return n1 + n2;
}

// var validar = 0; // global
function validaIdade(idade) {
    // let validar; // local
    if (idade >= 18){
        validar = true
    }else {
       validar = false
    }  
    return validar;  
}

var idade = prompt("Qual a sua idade ?");
console.log(validaIdade(idade));
// console.log(validar);

//  alert(soma(5, 10));
*/

// variável global / local
// dom
// getElement
// innerHTML

/* ------------- onclick ----------------*/

/*
function clicou(){
    alert("Valeu clicou");
}

    function clicou(){
        document.getElementById("ex1")
        document.getElementById("ex2").innerHTML = "<b>Agora tu clicou mesmo!</b>";
        console.log(document.getElementById("ex3"));
}
*/

/* ---------------- onmouseover -------------- */

/*
function troca(elemento){
    // document.getElementById("mousemove").innerHTML = "Já Passou!";
    // alert("troca texto");
    elemento.innerHTML = "Já Passou!";
}
*/

/*--------------- onmouseout --------------------- */

/*
function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passou !";
    elemento.innerHTML = "Passe o mouse aqui! (entrei aqui pelo --- this ---)";
}
*/

/* -------------- onchange -------------------- */
/*
function funcaoChange(e){
    console.log(e.value);
}
*/

/* -------------- onload -------------------- */

/*
function load(){
    alert("Página carregada!");
}
*/