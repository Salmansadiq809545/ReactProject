import React, { useState } from 'react'
import {createUserWithEmailAndPassword, } from 'firebase/auth'
import {auth} from './Firebase'
import {useNavigate} from 'react-router-dom'
import { provided } from './Firebase'
import { signInWithPopup } from 'firebase/auth'
import {FcGoogle} from 'react-icons/fc'

export default function Signup() {
  const navigate=useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassowrd] = useState("")

    const Register=async()=>{
      const user=await createUserWithEmailAndPassword(auth,email,password)
      navigate('/hindimovies')
     
    } 

    const Signup=async()=>{
    await  signInWithPopup(auth,provided);
    navigate('/hindimovies');
    } 

   
  return (
    <div className='signupback'>
        <div className='signup'>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} required autoComplete='off'/>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassowrd(e.target.value)} required autoComplete='off'/>
  </div>

<br/>
  
  <button type="button" onClick={()=>Register()} className="btn btn-danger btn-lg" id='sbtn'>SIGN UP</button><br/><br/>
  <button type="button" onClick={()=>Signup()} className="btn btn-light btn-lg" id='sbtn'><FcGoogle/> SignIn with Google</button>
    </div>
    </div>
  )
}
