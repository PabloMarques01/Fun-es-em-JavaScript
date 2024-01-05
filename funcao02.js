function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2,5))

/* Caso não seja definido um valor para o n1 ou para o n2*/

function soma (n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(5))