import { useState } from 'react';

function App() {
  const [currentInput, setCurrentInput] = useState('');
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState([]);

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleAddNumber = () => 
    {
    const number = parseInt(currentInput, 10);
    if (!isNaN(number)) {
      setSum((prevSum) => prevSum + number);
      setInput((prevInputs) => [...prevInputs, number]);
      setCurrentInput(''); // Clear the input field
    }
  };

  const handleReset = () => {
    setSum(0);
    setInput([]);
    setCurrentInput('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto' }}>
      <h1>Sum Calculator Assignment </h1>
      <div>
        <input
          type="number"
          value={currentInput}
          onChange={handleInputChange}
          placeholder="Enter a number"
          style={{ padding: '5px', fontSize: '16px', width: '200px' }}
        />
        <button
          onClick={handleAddNumber}
          style={{
            padding: '5px 10px',
            marginLeft: '10px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>Inputs:</strong> {input.join(' + ')} = <span>{sum}</span>
      </div>
      <button
        onClick={handleReset}
        style={{
          marginTop: '20px',
          padding: '5px 10px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'Black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Reset the number
      </button>
    </div>
  );
}

export default App;
