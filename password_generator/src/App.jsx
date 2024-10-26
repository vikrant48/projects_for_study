import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength]=useState(8);
  const [ischar, setischar]=useState(false);
  const [isnum, setisnum]=useState(false);
  const [pass, setpass]=useState("");
  const passref = useRef(null)


  const passwordgenerator = useCallback(()=>{
    let temppass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isnum) str += "0123456789"
    if (ischar) str += "!@#$%^&*-_+=[]{}~`"

    for(let i=1;i<=length;i++){
      let charindx = Math.floor(Math.random()*str.length +1)
      temppass+=str[charindx];
    }
    console.log(temppass)
    console.log(length)
    setpass(temppass)
  },[length,ischar,isnum,setpass])

  useEffect(()=>{passwordgenerator()}, [length,isnum,ischar, passwordgenerator])

  const copyclip = useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(pass)
  },[pass])

  return (
    <>
    <dv className="container">
      <h1>password gererator</h1>
      <input type="text" value={pass} placeholder='password' readOnly  ref={passref}/>
      <div>
        <div>
          <input 
          type="range"  
          value={length}
          min={6}
          max={20}
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label >length : {length}</label>
        </div>
        <div>
          <input 
          type="checkbox" 
          defaultChecked = {isnum}
          onChange={()=>{setisnum((prev)=> !prev)}}
          />
          <label >Number</label>
          
        </div>
        <div>
        <input 
          type="checkbox" 
          defaultChecked = {ischar}
          onChange={()=>{setischar((prev)=> !prev)}}
          />
          <label >Character </label>
        </div>
      </div>
      <button onClick={passwordgenerator}>generate </button>
      <button onClick={copyclip}>copy</button>
    </dv>
    </>
  )

}

export default App
