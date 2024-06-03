function velocidade(x) {
    return 0.0000036011355 *(x**(8)) - 0.0003913807401 *(x**(7)) + 0.0177862980553 *(x**(6)) - 0.4383736247355 *(x**(5)) + 6.3459861908248 *(x**(4)) - 54.41847124996 *(x**(3)) + 262.8833966826599 *(x**(2)) - 618.143599293445* x + 456.5719193147401
}

function aceleracao(x) {
    return 0.0000288090842* (x**(7)) - 0.0027396651808* (x**(6)) + 0.1067177883319* (x**(5)) - 2.1918681236774* (x**(4)) + 25.383944763299* (x**(3)) - 163.2554137498801* (x**(2)) + 525.7667933653197*x - 618.143599293445
}


function somaRiemannSuperior(f, a, b, n) {
    const deltaX = (b - a) / n;
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        const x_i = a + i * deltaX;
        soma += f(x_i) * deltaX;
    }
    return soma;
}


function somaRiemannInferior(f, a, b, n) {
    const deltaX = (b - a) / n;
    let soma = 0;
    for (let i = 0; i < n; i++) {
        const x_i = a + i * deltaX;
        soma += f(x_i) * deltaX;
    }
    return soma;
}


function somaRiemannMedio(f, a, b, n) {
    const deltaX = (b - a) / n;
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        const x_i = a + (i - 0.5) * deltaX;
        soma += f(x_i) * deltaX;
    }
    return soma;
}


function calcularEExibir(f, a, b, n, nome) {
    const aproxSup = somaRiemannSuperior(f, a, b, n);
    const aproxInf = somaRiemannInferior(f, a, b, n);
    const aproxMed = somaRiemannMedio(f, a, b, n);

    const valorMedioSup = aproxSup / (b - a);
    const valorMedioInf = aproxInf / (b - a);
    const valorMedioMed = aproxMed / (b - a);

    console.log(`Valor Medio da ${nome} usando a aproximação superior: ${valorMedioSup}`);
    console.log(`Valor Medio da ${nome} usando a aproximação inferior: ${valorMedioInf}`);
    console.log(`Valor Medio da ${nome} usando a aproximação do ponto medio: ${valorMedioMed}\n`);
}


let a = 0;
let b = 26.4196;
let n = 100;

calcularEExibir(velocidade, a, b, n, "velocidade");
calcularEExibir(aceleracao, a, b, n, "aceleração");




