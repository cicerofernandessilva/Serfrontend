function calcularMedia() {
    var total = 0;
    var qtd = arguments.length
    var i = 0;
    while(typeof arguments[i] === "number"){ // colocado typeof devido 0 ser um número invalido, o que daria um erro ao usar apenas arguments[i]
        total += arguments[i];
        i++;
    }
    return total/ qtd;
}