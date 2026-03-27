function calculoCorrente(){
    let tensao = parseFloat(prompt("\nDigite a tensão (Volts): "));
    let resistencia = parseFloat(prompt("\nDigite a resistência (Ohms): "));

    let corrente = tensao / resistencia;
    console.log("\nA corrente é de: ",corrente.toFixed(2)," ampères");
}