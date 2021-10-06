function gerarNumeroAleatorio(inicio, fim) {

    if (inicio < 200 || fim < 3000) {
        return -1;
    }else if(inicio >= fim) {
        return -1;
    }else{
        return Math.random() * (fim - inicio) + 1;
    }
}
module.exports = gerarNumeroAleatorio;