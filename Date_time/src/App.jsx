import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState(new Date());


  const formetDate = ()=>{
    const option = {weekday:'long', year:'numeric', month:'short', day: 'numeric'}
    return date.toLocaleDateString('en-us', option);
  }

  const formetTime = (date)=>{
    const hours = date.getHours().toString().padStart(2,'0');
    const min  = date.getMinutes().toString().padStart(2,'0');
    const sec = date.getSeconds().toString().padStart(2,'0');

    return `${hours}:${min}:${sec}`

  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setDate(new Date());
    },1000)

    return ()=> clearInterval(interval);

  },[]);

  return (
    <>
      <h1>Date and Time </h1>
      <h2>{formetDate()} | {formetTime(date)}</h2>
    </>
  )
}

export default App
