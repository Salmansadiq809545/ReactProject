import React, { useState } from 'react'
import { auth } from './Firebase';
import { onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword, } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

    export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const Login = async () => {
  await signInWithEmailAndPassword(auth, email, password);
   
            navigate("/hindimovies");

    }
  
    
    return (
       
        <div className='loginback'>
            <div className='LoginForm'>
          
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}  autoComplete='off' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}  autoComplete='off' required />
                </div>
                <button onClick={() => Login()} className="btn btn-danger btn-lg " id='sbtn'>LOGIN</button>
                <br/>
                <br/>
               
            </div>

        </div>

    )
}
