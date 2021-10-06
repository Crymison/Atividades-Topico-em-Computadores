const gerarNumeroAleatorio = require('../lib/Atividade 2 ex 1')

describe('Atividade 2 questão 1', () => {
    test('Verificar inicio não negativo', () => {
        let inicio = 200;
        let fim = 3000;
        let aux = -1;

        const res = gerarNumeroAleatorio(inicio, fim);
        if(res > -1){
            aux = 0;
        }
        expect(aux).toBe(0);
    });

    test('Verificar fim não negativo', () => {
        let inicio = 200;
        let fim = 3000;
        let aux = -1;

        const res = gerarNumeroAleatorio(inicio,fim);
        if(res > -1){
            aux = 0;
        }else{
            aux = 1;
        }
        expect(aux).toBe(0);
    });

    test('Verificar se inicio e fim não são iguais', () => {
        let inicio = 200;
        let fim = 3000;
        let aux = -1;

        const res = gerarNumeroAleatorio(inicio,fim);
        if(res != -1){
            aux = 0;
        }else{
            aux = 1;
        }
        expect(aux).toBe(0);
    });

    test('Verificar se um intervalo valído entre 200 a 3000', () => {
        let inicio = 200;
        let fim = 3000;
        let aux = -1;

        const res = gerarNumeroAleatorio(inicio,fim);
        if(res >= 200 && 3000){
            aux = 0;
        }else{
            aux = 1;
        }
        expect(aux).toBe(0);
    });
});
