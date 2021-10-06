const IMCCalculadora = require('../lib/Atividade 3')

describe('Atividade 2 questão 3', () =>{
    test('Verificar IMC', () => {
        let peso = 70;
        let altura = 2;

        let imc2 = peso / (altura * altura);
        
        const res = IMCCalculadora(peso, altura);
        
        expect(res.imc).toBe(imc2);
    });

    test('Verificar classificação', () => {
        let peso = 70;
        let altura = 2;
        let classific = "";
        let imc2 = 0;

        imc2 = peso / (altura * altura);
        if(imc2 < 18.5){
            classific = "abaixo do peso";
        }else if(imc2 < 25){
            classific = "normal";
        }else if(imc2 < 30){
            classific = "acima do peso";
        }else{
            classific = "obeso";
        }
        const res = IMCCalculadora(peso, altura);
        
        expect(res.classificacao).toBe(classific);
    });
});