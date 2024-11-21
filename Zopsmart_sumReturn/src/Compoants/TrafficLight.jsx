import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [activeColor, setActiveColor] = useState('green'); 

  useEffect(() => {
    let timer;

    const changeLight = () => {
      switch (activeColor) {
        case 'green':
          timer = setTimeout(() => setActiveColor('yellow'), 3000); 
          break;
        case 'yellow':
          timer = setTimeout(() => setActiveColor('red'), 2000); 
          break;
        case 'red':
          timer = setTimeout(() => setActiveColor('green'), 4000); 
          break;
        default:
          setActiveColor('green');
      }
    };

    changeLight();

    return () => clearTimeout(timer);

  }, [activeColor]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
      <div
        style={{
          width: '80px',
          height: '240px',
          backgroundColor: '#333',
          borderRadius: '10px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >

        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: activeColor === 'red' ? 'red' : '#555',
            transition: 'background-color 0.5s ease',
          }}
        ></div>

        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: activeColor === 'yellow' ? 'yellow' : '#555',
            transition: 'background-color 0.5s ease',
          }}
        ></div>

        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: activeColor === 'green' ? 'green' : '#555',
            transition: 'background-color 0.5s ease',
          }}
        ></div>
      </div>
    </div>
  );
}

export default TrafficLight;
