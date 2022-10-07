const soma = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente número de 1 a 10";
    } else {
        return num1 + num2;
    }
}

console.log(soma(1,6))