function exercicio3() {
    // Variável para contar quantas pessoas já foram registradas
    let conta = 1

    // Variável para armazenar a idade informada pelo usuário
    let idade 

    // Variáveis para contar quantas pessoas estão em cada faixa etária
    let faixa_1 = 0 // até 15 anos
    let faixa_2 = 0 // 16 a 30 anos
    let faixa_3 = 0 // 31 a 45 anos
    let faixa_4 = 0 // 46 a 60 anos
    let faixa_5 = 0 // acima de 60 anos

    // Variáveis para armazenar porcentagens das faixas 1 e 5
    let por1
    let por2

    // Loop que será executado 8 vezes, uma para cada pessoa
    while (conta <= 8) {
        // Solicita ao usuário que digite a idade da pessoa atual
        idade = Number(prompt(`Informe a idade da pessoa || Pessoa: ${conta}`))

        // Classifica a idade informada em uma das faixas
        if (idade <= 15) {
            faixa_1++
        } else if (idade <= 30) {
            faixa_2++
        } else if (idade <= 45) {
            faixa_3++
        } else if (idade <= 60) {
            faixa_4++
        } else {
            faixa_5++
        }

        // Incrementa o contador para a próxima pessoa
        conta++
    }

    // Calcula a porcentagem de pessoas nas faixas 1 e 5
    por1 = (faixa_1 / 8) * 100
    por2 = (faixa_5 / 8) * 100

    // Exibe a quantidade de pessoas em cada faixa etária
    alert(`A quantidade de pessoas na faixa 1 é ${faixa_1}` +
        `\nA quantidade de pessoas na faixa 2 é ${faixa_2}` +
        `\nA quantidade de pessoas na faixa 3 é ${faixa_3}` +
        `\nA quantidade de pessoas na faixa 4 é ${faixa_4}` +
        `\nA quantidade de pessoas na faixa 5 é ${faixa_5}`)

    // Exibe a porcentagem das pessoas nas faixas 1 e 5
    alert(`A porcentagem da faixa 1 em relação ao todo é ${por1}%` +
         `\nA porcentagem da faixa 5 em relação ao todo é ${por2}%`)
}






 function exercicio1  () {
    let  a, b , c, d, aux
    let conta = 1

    a = Number(prompt(`informe o valor de A: `))  // Solicita o valor de A
    b = Number(prompt(`informe o valor de B: `))  // Solicita o valor de B
    c = Number(prompt(`informe o valor de C: `))  // Solicita o valor de C
    d = Number(prompt(`informe o valor de D: `))  // Solicita o valor de D

    while (conta<= 3) {     // Enquanto o contador for menor ou igual a 3

        if ( a > b ) { // se A for maior que B
            aux = a; // armazena o valor de A em aux
            a = b; // atribui o valor de B a A
            b = aux;  // atribui o valor de aux a B
        }
        if ( b > c) { // se B for maior que C
            aux = b; // armazena o valor de B em aux
            b = c; // atribui o valor de C a B
            c = aux; // atribui o valor de aux a C
        }
        if ( c > d) { // se C for maior que D
            aux = c; // armazena o valor de C em aux
            c = d; // atribui o valor de D a C
            d = aux; //     atribui o valor de aux a D
        }
        conta++
    }
    alert(`Os valores em ordem crescente são: ${a}, ${b}, ${c}, ${d}`)
    // Exibe os valores em ordem crescente
    alert(`Os valores em ordem decrescente são: ${d}, ${c}, ${b}, ${a}`)
    // Exibe os valores em ordem decrescente
 }
   function exercicio2() {
    let quantidadeingresso = 120; // Quantidade de ingressos vendidos
    const gastos = 200; // Valor fixo da despesa
    let lucro = 0; // Lucro inicial
    let preçoingresso = 5; // Preço do ingresso
    let aux = ""; // Variável auxiliar para armazenar o valor do preço do ingresso

    let maiorlucro = 0; // Variável para armazenar o maior lucro
    let maiorpreço = 0; // Variável para armazenar o maior preço do ingresso
    let maiorquantidade = 0; // Variável para armazenar a maior quantidade de ingressos vendidos

    while (preçoingresso >= 1) {
        // Calcula o lucro atual
        lucro = (quantidadeingresso * preçoingresso) - gastos;

        // Verifica se o lucro atual é maior que o maior lucro registrado
        if (lucro > maiorlucro) {
            
            maiorlucro = lucro; // Atualiza o maior lucro
            maiorpreço = preçoingresso; // Atualiza o maior preço do ingresso
            maiorquantidade = quantidadeingresso; // Atualiza a maior quantidade de ingressos vendidos
        }

        // Exibe o lucro, despesa e preço do ingresso
        aux = aux + "\n" + `O lucro foi de R$ ${lucro} com o preço do ingresso a R$ ${preçoingresso} e a despesa foi de R$ ${gastos}`;
        alert(`O lucro foi de R$ ${lucro} com o preço do ingresso a R$ ${preçoingresso} e a despesa foi de R$ ${gastos}`);

        // Diminui o preço do ingresso em 0.5 
        preçoingresso = preçoingresso - 0.50;

        // Aumenta a quantidade de ingressos vendidos em 26 quando se diminui o preço
        quantidadeingresso = quantidadeingresso + 26;
    }

    // Exibe o maior lucro, o preço do ingresso correspondente e a quantidade de ingressos vendidos
    alert(`\nMaior lucro: R$ ${maiorlucro}\nPreço do ingresso: R$ ${maiorpreço}\nQuantidade de ingressos vendidos: ${maiorquantidade}`);
}
        

        
    





