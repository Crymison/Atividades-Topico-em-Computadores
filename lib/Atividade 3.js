function IMCCalculadora(peso, altura){

    let aux = true;
    let IMCStatus = {};
    IMCStatus.classificacao = "";
    IMCStatus.imc = 0;

    if(peso <= 0 || altura <= 0){
        aux = false;
    }
    if(aux == true){
        IMCStatus.imc = peso / (altura * altura);

        if(IMCStatus.imc < 18.5){
            IMCStatus.classificacao = "abaixo do peso";
        }else if(IMCStatus.imc < 25){
            IMCStatus.classificacao = "normal";
        }else if(IMCStatus.imc < 30){
            IMCStatus.classificacao = "acima do peso";
        }else{
            IMCStatus.classificacao = "obeso";
        }
        return IMCStatus;
    }else{
        return -1;
    }
}

module.exports = IMCCalculadora;