# prova_02_gustavo_muller_eletronica
prova 02 - calculadora eletrica

⚡ Calculadora Elétrica JS
Este projeto é uma ferramenta modular desenvolvida em JavaScript para facilitar cálculos fundamentais de engenharia elétrica e eletrônica. O sistema permite desde a análise básica da Lei de Ohm até o cálculo de consumo energético e identificação de componentes por cores.

📋 Sobre o Projeto
A aplicação foi estruturada de forma desacoplada, onde cada funcionalidade reside em seu próprio arquivo .js, sendo todas orquestradas por um arquivo central. A interface de interação com o usuário ocorre através de janelas de prompt para entrada de dados e console.log ou alert para a exibição dos resultados.

🛠️ Resumo das Funções
1. Gestão Central (central.js)
Menu Principal: Controla o fluxo da aplicação utilizando um laço while que permanece ativo até que o usuário escolha a opção de sair.

Direcionamento: Encaminha o usuário para as funções específicas de cálculo baseando-se na entrada numérica escolhida.

2. Lei de Ohm
calculoTensao.js: Calcula a tensão (V) multiplicando a corrente pela resistência.

calculoCorrente.js: Determina a corrente (I) dividindo a tensão pela resistência.

calculoResistencia.js: Encontra a resistência (R) dividindo a tensão pela corrente.

3. Componentes e Circuitos
calculoResistores.js: Identifica o valor de resistência e a tolerância de resistores de 4 ou 5 faixas através do código de cores, convertendo os nomes das cores em valores numéricos e multiplicadores.

calculoReq.js: Calcula a Resistência Equivalente para associações em série (soma simples) ou em paralelo (soma dos inversos).

4. Utilidades e Conversões
conversaoUnidades.js: Realiza a conversão entre múltiplos e submúltiplos (micro, mili, base, kilo, mega, giga) para as grandezas de Volt, Watt, Ampère e Ohm.

calculadoraConsumo.js: Estima o consumo mensal de um eletrodoméstico em kWh e o valor total em reais (R$), permitindo entradas tanto em Watts quanto em Quilowatts.

🚀 Como Executar
Certifique-se de que todos os arquivos .js e o arquivo index.html estão no mesmo diretório.

Abra o arquivo index.html em seu navegador.

Utilize a tecla F12 para abrir o Console do Desenvolvedor, onde a maioria dos resultados será exibida.