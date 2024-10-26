import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState('gray')

  return (
    <>
     <div className='element' style={{backgroundColor: color}}>
       <button onClick={()=>{setcolor('red')}}>red</button>
       <button onClick={()=>{setcolor('blue')}}>blue</button>
       <button onClick={()=>{setcolor('yellow')}}>yellow</button>
     </div>
    </>
  )
}

export default App
