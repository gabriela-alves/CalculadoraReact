import './Calculator.css';
import React, {useState} from 'react';

export default function Calculator(){
    const [num, setNum] = useState (0);
    const [oldNum, setOldNum] = useState (0);
    const [operator, setOperator] = useState ();

    function inputNum(e){
        var input = e.target.value
        if(num === 0){
            setNum(input);
        }else{
            setNum(num+input);
        }

    }

    function clear(e){
        let orange = document.querySelectorAll('.orange');
        for(let i = 0; i < orange.length; i++){
            orange[i].classList.remove('activeButton');
        }

        setNum(0);
    }

    function percentage(){
        setNum(num/100);
    }

    function positiveNegative(){
        if(num > 0) {
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e){
        var operatorInput=e.target.value;
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0);

        activeButton(e);
    }

    function calculate(){
        if(operator === "÷"){
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === "x") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === "-"){
            setNum(parseFloat(oldNum) - parseFloat(num));
        } else if (operator === "+"){
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
        
    }
    
    function activeButton(e){
        let orange = document.querySelectorAll('.orange');
        for(let i = 0; i < orange.length; i++){
            orange[i].classList.remove('activeButton');
        }

        if(!e.currentTarget.classList.contains('activeButton')){
            e.currentTarget.classList.add('activeButton')
        }
    }

    return(
        <div className="box">
            <div className="container">
                <div className="background">
                    <p  className="result">{num}</p>
                    <button className="light-gray" onClick={clear}>AC</button>
                    <button className="light-gray" onClick={positiveNegative}>+/-</button>
                    <button className="light-gray" onClick={percentage}>%</button>
                    <button className="orange" onClick={operatorHandler} value={"÷"}>÷</button>
                    <button className="medium-gray" onClick={inputNum} value={7}>7</button>
                    <button className="medium-gray" onClick={inputNum} value={8}>8</button>
                    <button className="medium-gray" onClick={inputNum} value={9}>9</button>
                    <button className="orange" onClick={operatorHandler} value={"x"}>x</button>
                    <button className="medium-gray" onClick={inputNum} value={4}>4</button>
                    <button className="medium-gray" onClick={inputNum} value={5}>5</button>
                    <button className="medium-gray" onClick={inputNum} value={6}>6</button>
                    <button className="orange" onClick={operatorHandler} value={"-"}>-</button>
                    <button className="medium-gray" onClick={inputNum} value={1}>1</button>
                    <button className="medium-gray" onClick={inputNum} value={2}>2</button>
                    <button className="medium-gray" onClick={inputNum} value={3}>3</button>
                    <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
                    <button className="medium-gray zero" onClick={inputNum} value={0}>0</button>
                    <button className="medium-gray" onClick={inputNum} value={","}>,</button>
                    <button className="orange" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}