'use client'
import HueGPT from '@/components/HueGPT/HueGPT';
import { useEffect, useState } from 'react';

export default function Home() {
  const [verify, setVerify] = useState<boolean>(false);
  useEffect(() => {
    async function verifyToken() {
      const res = await fetch('http://127.0.0.1:5000/api/v1/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({cookie: document.cookie.split('=')[1]})
      })
      const data = await res.json()
      setVerify(data.isVerify)
    }
    verifyToken()
  }
  , [])
  return (
   <>
    {
      verify ? <HueGPT /> : <h1>Unauthorized</h1>
    }
   </>
  );
}
