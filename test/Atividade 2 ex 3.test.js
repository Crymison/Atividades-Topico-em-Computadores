const IMCCalculadora = require('../lib/Atividade 2 ex 3')

describe('Atividade 2 questão 3', () =>{
    test('Verificar IMC', () => {
        let peso = 70;
        let altura = 2;

        let imc2 = peso / (altura * altura);
        
        const res = IMCCalculadora(peso, altura);
        
        expect(res.imc).toBe(imc2);
    });

    test('Verificar classificação: Abaixo do peso', () => {
        let peso = 70;
        let altura = 2;
        
        const res = IMCCalculadora(peso, altura);
        
        expect(res.classificacao).toBe("abaixo do peso");
    });

    test('Verificar classificação: Normal', () => {
        let peso = 70;
        let altura = 1.75;
        
        const res = IMCCalculadora(peso, altura);
        
        expect(res.classificacao).toBe("normal");
    });

    test('Verificar classificação: Acima do peso', () => {
        let peso = 80;
        let altura = 1.75;
        
        const res = IMCCalculadora(peso, altura);
        
        expect(res.classificacao).toBe("acima do peso");
    });

    test('Verificar classificação: Obeso', () => {
        let peso = 100;
        let altura = 1.50;
        
        const res = IMCCalculadora(peso, altura);
        
        expect(res.classificacao).toBe("obeso");
    });
});