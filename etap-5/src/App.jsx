import { useState } from 'react'
import Button from './components/Button'
import Display from './components/Display'

function App() {
  const [display, setDisplay] = useState('0')
  const [prevVal, setPrevVal] = useState('')
  const [operator, setOperator] = useState(null)
  const [resetNext, setResetNext] = useState(false)

  const handleNum = (num) => {
    if (resetNext) {
      setDisplay(num)
      setResetNext(false)
    } else {
      setDisplay(prev => prev === '0' ? num : prev + num)
    }
  }

  const handleOp = (op) => {
    if (display === '') return
    if (prevVal !== '' && operator) {
      calculate()
    }
    setOperator(op)
    setPrevVal(display)
    setResetNext(true)
  }

  const handleEqual = () => {
    if (prevVal === '' || !operator || display === '') return
    calculate()
    setOperator(null)
    setPrevVal('')
    setResetNext(true)
  }

  const handleClear = () => {
    setDisplay('0')
    setPrevVal('')
    setOperator(null)
    setResetNext(false)
  }

  const calculate = () => {
    const a = parseFloat(prevVal)
    const b = parseFloat(display)
    let result
    switch (operator) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = b !== 0 ? a / b : 'Error'; break;
    }
    setDisplay(result.toString())
  }

  return (
    <div className="calculator">
      <div className="calc-header">
        <h2>KALKULATOR v5.0</h2>
        <p>Etap 5: Divy + CSS + React (SPA)</p>
      </div>

      <Display value={display} />

      <div className="keypad">
        {/* Wiersz 1 */}
        <Button onClick={() => handleNum('7')}>7</Button>
        <Button onClick={() => handleNum('8')}>8</Button>
        <Button onClick={() => handleNum('9')}>9</Button>
        <Button onClick={() => handleOp('/')} className="btn-op">/</Button>

        {/* Wiersz 2 */}
        <Button onClick={() => handleNum('4')}>4</Button>
        <Button onClick={() => handleNum('5')}>5</Button>
        <Button onClick={() => handleNum('6')}>6</Button>
        <Button onClick={() => handleOp('*')} className="btn-op">*</Button>

        {/* Wiersz 3 */}
        <Button onClick={() => handleNum('1')}>1</Button>
        <Button onClick={() => handleNum('2')}>2</Button>
        <Button onClick={() => handleNum('3')}>3</Button>
        <Button onClick={() => handleOp('-')} className="btn-op">-</Button>

        {/* Wiersz 4 */}
        <Button onClick={() => handleNum('0')}>0</Button>
        <Button onClick={handleClear} className="btn-clear">C</Button>
        <Button onClick={handleEqual} className="btn-equal">=</Button>
        <Button onClick={() => handleOp('+')} className="btn-op">+</Button>
      </div>
    </div>
  )
}

export default App
