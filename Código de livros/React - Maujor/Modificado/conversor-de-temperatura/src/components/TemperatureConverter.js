import React, { useState } from "react";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const userSelect = document.getElementById('user-choice');
  const teclas = document.getElementsByClassName('tecla');
  const resultados = document.getElementsByClassName('result');

  const handleTemperature = (x) => {
    if(x === ""){
      setTemperature("");
    }
    if(x === '-' && temperature.indexOf('-') === -1 && temperature.length !== 0){
      setTemperature('-' + temperature);
    }
    if(x === '.' && temperature.indexOf('.') === -1 && temperature.length !== 0){
      setTemperature(temperature + '.');
    }
    if((0 <= parseInt(x)) && (parseInt(x) <= 9)){
      if(temperature.indexOf('0') === -1 && x === '0' && temperature.length === 0){
        setTemperature(x + '.');
      } else {
        setTemperature(temperature + x);
      }
    }
  };

  const handleBackSpace = () => {
    let x = temperature.slice(0,-1);
    setTemperature(x);
  };

  const presentation = (celsiusTemperature, fahrenheitTemperature, kelvinTemperature) => {
    const resultCelsius = document.querySelector('#celsius-temp');
    const resultFarhren = document.querySelector('#fahrenheit-temp');
    const resultKelvin = document.querySelector('#kelvin-temp');

    resultCelsius.insertAdjacentHTML("afterbegin", celsiusTemperature);
    resultFarhren.insertAdjacentHTML("afterbegin", fahrenheitTemperature);
    resultKelvin.insertAdjacentHTML("afterbegin", kelvinTemperature);
  }

  const handleConverter = () => {
    let x = Number(temperature);
    userSelect.setAttribute('disabled', true);

    for(let i=0; i < (teclas.length-1); i++){ // -1 because i don't want disable the last button, reset button;
      teclas[i].setAttribute('disabled', true);
    }

    const fromTemp = userSelect.value;

    if(fromTemp === "C"){
      const celsiusTemperature = x.toFixed(2);
      const fahrenheitTemperature = ((x*9)/5+32).toFixed(2);
      const kelvinTemperature = (x+273.15).toFixed(2);
      presentation(celsiusTemperature, fahrenheitTemperature, kelvinTemperature);
    };

    if(fromTemp === "K"){
      const celsiusTemperature = (x-273.15).toFixed(2);
      const fahrenheitTemperature = ((x-273.15)*9/5+32).toFixed(2);
      const kelvinTemperature = x.toFixed(2);
      presentation(celsiusTemperature, fahrenheitTemperature, kelvinTemperature);
    };

    if(fromTemp === "F"){
      const fahrenheitTemperature = x.toFixed(2);
      const celsiusTemperature = ((x-32)*5/9).toFixed(2);
      const kelvinTemperature = ((x-32)*5/9+273.15).toFixed(2);
      presentation(celsiusTemperature, fahrenheitTemperature, kelvinTemperature);
    };
  };

  const handleReset = () => {
    //Habilita novamente os botoes numericos;
    Array.prototype.map.call(teclas, (el) => (el.removeAttribute("disabled")));

    //Remove o conteudo que eh apresentado no div;
    Array.prototype.map.call(resultados, (el) => {
      if (el.hasChildNodes()) {
        return el.removeChild(el.firstChild);
      }
    });

    //Habilita o seletor do tipo de escala da temperatura;
    userSelect.removeAttribute('disabled');
    setTemperature("");
  };
  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={temperature} />
        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>
        <button className="tecla" id="converter" onClick={() => handleConverter()}>
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button className="n1 tecla" onClick={() => handleTemperature("1")}> 1 </button>
        <button className="n2 tecla" onClick={() => handleTemperature("2")}> 2 </button>
        <button className="n3 tecla" onClick={() => handleTemperature("3")}> 3 </button>
        <button className="n4 tecla" onClick={() => handleTemperature("4")}> 4 </button>
        <button className="n5 tecla" onClick={() => handleTemperature("5")}> 5 </button>
        <button className="n6 tecla" onClick={() => handleTemperature("6")}> 6 </button>
        <button className="n7 tecla" onClick={() => handleTemperature("7")}> 7 </button>
        <button className="n8 tecla" onClick={() => handleTemperature("8")}> 8 </button>
        <button className="n9 tecla" onClick={() => handleTemperature("9")}> 9 </button>
        <button className="n0 tecla" onClick={() => handleTemperature("0")}> 0 </button>
        <button className="virgula tecla" onClick={() => handleTemperature(".")}> . </button>
        <button className="limpa tecla" onClick={() => handleBackSpace()}> </button>
        <button className="negativo tecla" onClick={() => handleTemperature('-')}> - </button>
        <div className="reset tecla" onClick={() => handleReset()}> Nova conversão </div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
