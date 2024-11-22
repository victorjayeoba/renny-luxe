"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { login } from '@/app/features/user'
import { logout } from '@/app/features/user'
import { switchTheme } from '@/app/features/themeColor'
function page() {
  const [color , setColor] = useState("")
  const user = useSelector((state)=>state.user.value)
  const themeColor = useSelector((state)=>state.themeSwitch.value)

  const dispatch = useDispatch()
  return (
    <div className='text-lg font-normal' style={{color: themeColor}} >
      <h2 className='text-2xl font-semibold' >Profle Page</h2>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
      <button
      onClick={()=>{
        dispatch(login({ name: "Victor", age: 20, email: "victorjayeoba02@gmail.com" }))
      }}
      className="bg-red-400 p-2 px-5" >login</button>
      <button onClick={()=> dispatch(logout())}  
        className="bg-red-400 p-2 px-5"
      >logout</button>

      <input onChange={(e)=>setColor(e.target.value)} type='text' />
      <button onClick={()=> dispatch(switchTheme(color))}  
        className="bg-red-400 p-2 px-5"
      >change color</button>
    </div>

  )
}

export default page