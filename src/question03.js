import leia from'readline-sync';

 var idade = leia.questionFloat("digite a idade: ")
    if (idade < 0) {
        console.log("Idade inválida");
    } else if (idade <= 12) {
        console.log("Criança");
    } else if (idade <= 17) {
        console.log("Adolescente");
    } else if (idade <= 64) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }