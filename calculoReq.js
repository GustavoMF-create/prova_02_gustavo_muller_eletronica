function calculoReq() {
    
    let escolha = parseInt(prompt("Digite 1 se os resistores estão em Série ou 2 se estão em paralelo: "));

    switch(escolha){
        case 1:
            let resistoresSerie = [];
            let limite = parseInt(prompt("Digite a quantidade de resistores: "));
            let soma = 0;

            for(let contador = 0; contador < limite; contador++){
                resistoresSerie[contador] = parseFloat(prompt("Digite ( Em Ohms) a resistência do "+ (contador + 1) + "º resistor:"));  
                soma += resistoresSerie[contador];              
            }

            console.log("O valor dos resistores em série é: ", soma.toFixed(2), " Ohms");
            break;
        case 2:
            let resistoresParalelo = [];
            let limite2 = parseInt(prompt("Digite a quantidade de resistores: "));
            let soma2 = 0;

            for(let contador = 0; contador < limite2; contador++){
                resistoresParalelo[contador] = parseFloat(prompt("Digite ( Em Ohms) a resistência do "+ (contador + 1) + "º resistor:")); 
                soma2 += 1 /resistoresParalelo [contador];
                }
            let req = 1 / soma2;

            console.log("O valor dos resistores em paralelo é: ", req.toFixed(2), " Ohms");
            break;
    }
}