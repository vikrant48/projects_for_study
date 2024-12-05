import { useState } from 'react'
import './App.css'
import SubscriptionCard from './SubscriptionCard';

function App() {

  const [visible, setvisible] = useState(false);

  const toggle = ()=>{
    setvisible(!visible);
  }


  return (
    <>
      <h1 className='font-extrabold'>Pop up </h1>
      <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200" onClick={toggle}>Suscribe </button>

      {visible && (
        <div>
          <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200" onClick={toggle}>Close</button>
          <SubscriptionCard/>
        </div>
        
      )}
    </>
  )
}

export default App
