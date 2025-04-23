let dolar = 5.1;
let eurDolar = 0.88;
let eurReal = 6.68;

let usdInput = document.querySelector('#usd');
let brlInput = document.querySelector('#brl');
let eurInput = document.querySelector('#eur');

usdInput.addEventListener('keyup', () => {
    convert('usd-to-brl');
});

brlInput.addEventListener('keyup', () => {
    convert('brl-to-usd');
});

eurInput.addEventListener('keyup', () => {
    convert('eur-to-usd');
});

usdInput.addEventListener('blur', () => {
    usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener('blur', () => {
    brlInput.value = formatCurrency(brlInput.value);
});

eurInput.addEventListener('blur', () => {
    eurInput.value = formatCurrency(eurInput.value);
});

usdInput.value = '1000,00';
convert('usd-to-brl');

function formatCurrency(value) {
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2,
    };
    let formatter = new Intl.NumberFormat('pt-BR', options);
    return formatter.format(fixedValue);
}

function fixValue(value) {
    let fixedValue = value.replace(',', '.');
    let floatValue = parseFloat(fixedValue);
    if (floatValue == NaN) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type) {
    if (type == 'usd-to-brl') {
        let fixedValue = fixValue(usdInput.value);
        let resultBRL = fixedValue * dolar;
        let resultEUR = fixedValue * eurDolar;
        resultBRL = resultBRL.toFixed(2);
        resultEUR = resultEUR.toFixed(2);
        brlInput.value = formatCurrency(resultBRL);
        eurInput.value = formatCurrency(resultEUR);
    }
    if (type == 'brl-to-usd') {
        let fixedValue = fixValue(brlInput.value);
        let resultUSD = fixedValue / dolar;
        let resultEUR = fixedValue / eurReal;
        resultUSD = resultUSD.toFixed(2);
        resultEUR = resultEUR.toFixed(2);
        usdInput.value = formatCurrency(resultUSD);
        eurInput.value = formatCurrency(resultEUR);
    }
    if (type == 'eur-to-usd') {
        let fixedValue = fixValue(eurInput.value);
        let resultUSD = fixedValue * eurDolar;
        let resultBRL = fixedValue / eurReal;
        resultUSD = resultUSD.toFixed(2);
        resultBRL = resultBRL.toFixed(2);
        usdInput.value = formatCurrency(resultUSD);
        brlInput.value = formatCurrency(resultBRL);
    }
}
