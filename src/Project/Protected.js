
import React from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Protected = (props) => {
  const navigate = useNavigate();
  const { Component } = props
  useEffect(() => { })
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate('/login')
    }

  });
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected