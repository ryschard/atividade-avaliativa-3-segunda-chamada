       import leia from'readline-sync';
        
        var VerificarNumeroInteiro = numero1, numero2, numero3;

        if (numero1 === numero2, numero1 === numero3, numero2 === numero3) {
            console.log ("Pelo menos dois números são iguais.");
        } else {
            console.log ("Todos os números são diferentes.");
        }
    
        var continuar = true;
    
        while (continuar) {
        var numero1 = leia.questionInt("Digite o primeiro número inteiro:");
        var numero2 = leia.questionInt("Digite o segundo número inteiro:");
        var numero3 = leia.questionInt("Digite o terceiro número inteiro:");
    
        var resultado = VerificarNumeroInteiro (numero1, numero2, numero3);
        console.log(resultado);
        
        var continuar = prompt("Deseja verificar mais três números? (sim/não)");
        if (leia.question() !== 'sim') {
            continuar = false;
        }
    }
    
    console.log("Programa encerrado.");
   





