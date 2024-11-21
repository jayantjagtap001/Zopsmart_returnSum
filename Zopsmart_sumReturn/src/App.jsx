import React from 'react'
import SumReturn from './Compoants/SumReturn'
import TrafficLight from './Compoants/TrafficLight'

function App() {
  return (
    <>
    <SumReturn/>
    <hr />
    <h2 style={{display:"flex",justifyContent:"center"}}>Traffic light</h2>
    <TrafficLight/>
    </>
  )
}

export default App
