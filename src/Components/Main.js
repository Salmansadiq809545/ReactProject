import React from 'react'
import { signInWithEmailAndPassword, } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc';
import { provided } from './Firebase'
import { signInWithPopup } from 'firebase/auth'
import { auth } from './Firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Main = () => {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const Login = async () => {


    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    navigate('/login')




  }
  const navigate = useNavigate();

  const SignOut = async () => {
    navigate('/logout')
    await signOut(auth);
    localStorage.clear()

  }
  const signInWithGoogle = () => {

    signInWithPopup(auth, provided).then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilepic = result.user.photoURL;
      localStorage.setItem("name", name); <br />
      localStorage.setItem("email", email); <br />
      localStorage.setItem("profilepic", profilepic); <br />
      navigate('/login')

    }).catch((err) => {
      console.log(err)
    })
  }
  return (

    <>

      <div className='text-center mt-4'>



        <h1>Login here</h1> <br />
        <input type="email" placeholder='Email' onChange={(e) => setLoginEmail(e.target.value)} />
        <br />
        <input type="password" placeholder='password' onChange={(e) => setLoginPassword(e.target.value)} /><br />
        <br />


        <button onClick={() => Login()} className='btn btn-danger'>Login</button> <br />
        <button type='button' onClick={() => signInWithGoogle()} className='btn btn-light'><FcGoogle className='icons' />  Sign In with Google</button> <br />
        <br />
        <br />
        <br />
        <br />
        <h1>{localStorage.getItem("name")}</h1>
        <br />
        <h1>{localStorage.getItem("email")}</h1>
        <br />
        <img src={localStorage.getItem("profilepic")} alt="" />
        <br />
        <br />
      </div>
      <div className='text-center'>

        <button onClick={() => SignOut()} className='btn btn-lg btn-light'><FcGoogle className='icons' />  Sign Out</button> <br />
      </div>
    </>
  )
}

export default Main
