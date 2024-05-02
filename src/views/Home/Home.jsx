import { useState } from 'react'
import './Home.css'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../../firebase/auth'
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  return (
    <>
      <div>
        <p>Home Page</p>
      </div>
        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
    </>
  )
}

export default Home