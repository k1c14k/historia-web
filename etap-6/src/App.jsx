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
    <div className="min-h-screen bg-slate-100 flex items-start justify-center pt-12 p-4">
      <div className="w-full max-w-xs bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-slate-800 p-4 text-center">
          <h1 className="text-xl font-bold text-white uppercase tracking-wider">Kalkulator v6.0</h1>
          <p className="text-slate-400 text-[10px] mt-1">Etap 6: React + Tailwind</p>
        </div>

        <div className="bg-slate-50 p-6">
          <Display value={display} />

          <div className="grid grid-cols-4 gap-3">
            {[7, 8, 9, '/'].map((item) => (
              <Button
                key={item}
                onClick={() => typeof item === 'number' ? handleNum(item.toString()) : handleOp(item)}
                variant={typeof item === 'number' ? 'number' : 'operator'}
              >
                {item}
              </Button>
            ))}

            {[4, 5, 6, '*'].map((item) => (
              <Button
                key={item}
                onClick={() => typeof item === 'number' ? handleNum(item.toString()) : handleOp(item)}
                variant={typeof item === 'number' ? 'number' : 'operator'}
              >
                {item}
              </Button>
            ))}

            {[1, 2, 3, '-'].map((item) => (
              <Button
                key={item}
                onClick={() => typeof item === 'number' ? handleNum(item.toString()) : handleOp(item)}
                variant={typeof item === 'number' ? 'number' : 'operator'}
              >
                {item}
              </Button>
            ))}

            <Button onClick={() => handleNum('0')}>0</Button>
            <Button onClick={handleClear} variant="clear">C</Button>
            <Button onClick={handleEqual} variant="equal">=</Button>
            <Button onClick={() => handleOp('+')} variant="operator">+</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
