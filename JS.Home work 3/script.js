function printNameUser(){
window.alert(`Ваше имя ${document.getElementById('inputName').value}`);
}


function calculation()
{   try{
        firstNumber = parseInt(document.getElementById('inputFirstNumber').value);
        secondNumber = parseInt(document.getElementById('inputSecondNumber').value);
        operatorValue = document.getElementById('inputOperator').value;
        if (secondNumber==0 && operatorValue=="/") throw new Error
        else
        {
        let result=0
        switch (operatorValue){
            case '+': result=firstNumber+secondNumber;
                break;
            case '-': result=firstNumber-secondNumber;
                break;
            case '*': result=firstNumber*secondNumber;
                break;
            case '/': result=firstNumber/secondNumber;
                break
        }
        document.getElementById('inputResult').value = result;
        }
    }
    catch {
        window.alert("На ноль делить нельзя!")
    }
}

function printText()
{
    numberInText=parseInt(document.getElementById('inputNumberInText').value);
    console.log(numberInText)
    try
    {
        if (numberInText==0) window.alert(`${numberInText} яблок`);
        else if(numberInText==1) window.alert(`${numberInText} яблоко`);
        else if(numberInText>1 && numberInText<5) window.alert(`${numberInText} яблока`);
        else if(numberInText>=5 && numberInText<21) window.alert(`${numberInText} яблок`);
        else throw new Error
    }
    catch{
        window.alert("Введено очень много яблок...")
    }
}
