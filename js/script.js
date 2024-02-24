window.addEventListener('load', () => {

    sumAges = (vet) => {
        sum = 0;
        for (i = 0; i < vet.length; i++) sum += vet[i];
        return sum;
    }

    mediaSimples = (vet) => sumAges(vet) / vet.length;

    maxAge = vet => {
        idadeMax = vet[0];

        for (i = 0; i < vet.length; i++) idadeMax < vet[i] ? idadeMax = vet[i] : idadeMax = idadeMax;
        return idadeMax;
    }

    maxAge = vet => {
        idadeMax = vet[0];

        for (i = 0; i < vet.length; i++) idadeMax < vet[i] ? idadeMax = vet[i] : idadeMax = idadeMax;
        return idadeMax;
    }

    oddAge = vet => {
        let oddAges = []
        for (i = 0; i < vet.length; i++) {
            if (vet[i] % 2 != 0) {
                oddAges.push(vet[i])
            }
        }
        return oddAges;
    }

    maiorIdade = vet => {
        validador = true;
        for (i = 0; i < vet.length; i++) {
            if (vet[i] < 18) {
                validador = false;
                break;
            }
        }
        return validador;
    }

    maiorIdadeValor = (valorInformado, vet) => {
        validador = true;
        for (i = 0; i < vet.length; i++) {
            if (vet[i] < valorInformado) {
                validador = false;
                break;
            }
        }
        switch (validador) {
            case true:
                return `Todos os valores são mairores ou iguas à ${valorInformado}`;
             case false:
                return `Nem todos os valores são mairores ou iguas à ${valorInformado}`;
            default:
                break;
        }
    }

    maioresValores = (valorInformado, vet) => {
        valores = [];
        for (i = 0; i < vet.length; i++) {
            if (vet[i] >= valorInformado) {
                valores.push(vet[i]);
            }
        }
        return valores;
    }

    mediaValoresMaiores = valoresMaiores => {
        soma = 0;
        for (i = 0; i < valoresMaiores.length; i++) {
            soma += valoresMaiores[i];
        }

         media = soma / valoresMaiores.length;
         return parseFloat(media.toFixed(2));
    }
    

    valorInformado = (prompt("informe um valor:"))
    vetAges = [10, 21, 31, 40];
    document.write(`<p>Média das idades = ${mediaSimples(vetAges)}</p>`)
    document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p>`)
    document.write(`<p>Maior das idades = ${maxAge(vetAges)}</p>`);
    document.write(`<p>Idades ímpares = ${oddAge(vetAges)}</p>`);
    document.write(`<p>Todos são maiores ? ${maiorIdade(vetAges)}</p>`);
    document.write(`<p>${maiorIdadeValor(valorInformado, vetAges)}</p>`);
    document.write(`<p>valores maiores ou iguais à ${valorInformado}: ${maioresValores(valorInformado, vetAges)}</p>`);
    document.write(`<p>Média dos valores maiores ou iguais à ${valorInformado}: ${mediaValoresMaiores(maioresValores(valorInformado, vetAges))}</p>`);
    


})