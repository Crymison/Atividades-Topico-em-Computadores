function gerarNumeroAleatorio(inicio, fim) {

    if (inicio < 0 || fim < 0) {
        return -1;
    }else if(inicio >= fim) {
        return -1;
    }else{
        return Math.random() * (fim - inicio) + 1;
    }
}

module.exports = gerarNumeroAleatorio; 