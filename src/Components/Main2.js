import React from 'react'
import { FcGoogle } from 'react-icons/fc';

import {auth} from './Firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Main2 = () => {
  const navigate=useNavigate()
  const SignOut=async()=>{
    navigate('/logout')
    await signOut(auth);
    localStorage.clear()
  

  }
  return (
    <div className='text-center'>
       HEy User
      <br />

    <button onClick={()=>SignOut()} className='btn btn-lg btn-light'><FcGoogle className='icons'/>  Sign Out</button> <br />
    </div>
   
  )
}

export default Main2
