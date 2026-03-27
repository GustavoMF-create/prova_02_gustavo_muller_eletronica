let escolha = 0;

while(escolha != 8){
    escolha = parseInt(prompt("O que você deseja fazer?\n" +
    "(1-Calcular consumo mensal de energia) (2-Calcular tensão)\n" +
    "(3-Calcular resistência) (4-Calcular corrente) (5-Calcular resistores)\n" +
    "(6-Conversão de unidades) (7-Calcular resistência equivalente) (8-SAIR)"));

    if(escolha == 1){
        calculadoraConsumo();
    }else if(escolha == 2){
        calculoTensao();
    }else if(escolha == 3){
        calculoResistencia();
    }else if(escolha == 4){
        calculoCorrente();
    }else if(escolha == 5){
        calculoResistores();
    }else if(escolha == 6){
        conversao();
    }else if(escolha == 7){
        calculoReq();
    }
}