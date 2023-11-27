import React from 'react'
import { useState,useCallback,useEffect } from 'react';
import "./index.css"
function App() {
  const [length,setLength]=useState(8);
  const [number,setNumber]=useState(false);
  const [Spchar,setCharacter]=useState(false);
  const [password,setPassword]=useState("nnknjn");
  const passwordGenerator=useCallback(()=>{
    let pas="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number) str+="0123456789";
    if(Spchar) str+="!@#$%^&*()_";
    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pas+=str.charAt(char);
    }
    setPassword(pas);
  },[length,number,Spchar,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,Spchar,passwordGenerator])
  return (
    <div>
       <div className='w-1/2 mx-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
       text-orange-500 bg-gray-800 justify-center'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg'>
          <input type ="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder="password"
          readOnly/>
          <button 
          className='outline-none px-3 py-0.5 shrink-0 bg-blue-300 text-white' >
            copy
          </button>
         </div>
         <div className='flex text-sm gap-x-2'>
           <div className='flex items-center gap-x-1'>
            <input type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}
             />
              <label>Length:{length}</label>
           </div>
           <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={number}
            onChange={()=>{setNumber((prev)=>!prev);}}
            />
            <label htmlFor='numbers'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={Spchar}
            onChange={()=>{setCharacter((prev)=>!prev);}}
            />
            <label htmlFor='charcters'>SChar</label>
            </div>

         </div>
       </div>
    </div>
  )
}

export default App
