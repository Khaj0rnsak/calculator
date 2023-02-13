import './App.scss';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("")

  const handleClick = (e) => {
    setData(data.concat(e.target.name))
  }

  const clear = () =>{
    setData("")
  }

  const backspace = () => {
    setData(data.slice(0, data.length -1));
  }

  const calculate = () => {
    try {
      setData(eval(data).toString());
    } catch(err){
      setData(err)
    }
  }
 
  return (
    <div className="App">
      <div className='calculator'>
        <div className='calculator-display'>
          <h1>{data ? data : '0'}</h1>
        </div>
        <div className='calculator-button'>
          <button className='condition' name = '+' onClick={handleClick}>+</button>
          <button className='condition' name = '-' onClick={handleClick}>-</button>
          <button className='condition' name = '*' onClick={handleClick}>*</button>
          <button className='condition' name = '÷' onClick={handleClick}>÷</button>
          <button name = '7' onClick={handleClick}>7</button>
          <button name = '8' onClick={handleClick}>8</button>
          <button name = '9' onClick={handleClick}>9</button>
          <button id = 'backspace' onClick={backspace} className='del'>del</button>
          <button name = '4' onClick={handleClick}>4</button>
          <button name = '5' onClick={handleClick}>5</button>
          <button name = '6' onClick={handleClick}>6</button>
          <button name = '1' onClick={handleClick}>1</button>
          <button name = '2' onClick={handleClick}>2</button>
          <button name = '3' onClick={handleClick}>3</button>
          <button name = '.' onClick={handleClick}>.</button>
          <button name = '0' onClick={handleClick}>0</button>
          <button id = 'clear' onClick={clear}>C</button>
          <button className='result' onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
