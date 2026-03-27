function calculoTensao(){
    let corrente = parseFloat(prompt("\nDigite a corrente (Ampère): "));
    let resistencia = parseFloat(prompt("\nDigite a resistência (Ohms): "));

    let tensao = corrente * resistencia;
    console.log("\nA tensão é de: ",tensao.toFixed(2)," volts");
}