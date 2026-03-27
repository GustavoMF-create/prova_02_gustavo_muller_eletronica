function calculadoraConsumo(){
    let eletroDomestico = prompt("\nQual o seu eletrodoméstico: ");
    let escolha = parseInt(prompt("\nSe sua medida é Watt selecione (1) ou se ela for Quilowatt digite (2): "));
    let valor = parseFloat(prompt("\nDigite o valor da taxa de energia: "));

    if( escolha == 1){
        let potencia = parseFloat(prompt("\nDigite a pôtencia de uso do seu aparelho (w): "));
        let tempoUso = parseFloat(prompt("Digite o tempo de uso diário (em horas): "));
        let kwhMes = ((potencia * tempoUso) / 1000) * 30;
        let mensal = kwhMes * valor;
        console.log("O aparelho ",eletroDomestico, " usa ", (kwhMes.toFixed(2)), " quilowatts por mês e isso resultado num valor final de R$",(mensal.toFixed(2)));
    }else if(escolha == 2){
        potencia = parseFloat(prompt("Digite a potência do seu aparelho (kW): "));
        tempoUso = parseFloat(prompt("Digite o tempo de uso diário (em horas): "));
        kwhMes = (potencia * tempoUso)* 30;
        mensal = kwhMes * valor;
        console.log("O aparelho ",eletroDomestico," usa ",(kwhMes.toFixed(2))," quilowatts por mês e isso resulta num valor final de R$",(mensal.toFixed(2)));
    }
}