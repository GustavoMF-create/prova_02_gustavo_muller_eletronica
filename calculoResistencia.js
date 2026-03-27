function calculoResistencia(){
    let tensao = parseFloat(prompt("\nDigite a tensão (Volts): "));
    let corrente = parseFloat(prompt("\nDigite a corrente (Ampère): "));

    let resistencia = tensao / corrente;
    console.log("\nA resistencia é de: ",resistencia.toFixed(2)," Ohms");
}