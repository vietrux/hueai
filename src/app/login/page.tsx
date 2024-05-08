'use client';
import { useEffect, useState } from 'react';

export default function TestConcak() {
  const [usr, setUsr] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [signal, setSignal] = useState<boolean>(false);
  async function login(usr: string,pass: string){
    const res = await fetch('http://127.0.0.1:5000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({usr, pass})
    })
    
    const data = await res.json()
    console.log(data)
    if (data.statusz === "success") {
      setSignal(true)
      document.cookie = `token=${data.cookie}`
    }else{
      setSignal(false)
    }

  }
  
  return (
    <>
      <input 
        className='border border-gray-300 p-2 rounded-lg w-full mb-4'
        type="text" 
        placeholder="Username" 
        value={usr}
        onChange={(e) => setUsr(e.target.value)}
      />
      <input 
        className='border border-gray-300 p-2 rounded-lg w-full mb-4'
        type="password" 
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password" />
      <button 
        className='bg-slate-500 text-white p-2 rounded-lg w-full'
        onClick={() => login(usr, pass)}
      type="submit">Login</button>
      {signal ? <h1>OKE IEM</h1> : <h1>Unauthorized</h1>}
    </>
  )
}