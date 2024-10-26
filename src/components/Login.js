import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValdation from '../utils/checkValdation'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import { Auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adduser } from '../utils/userSlice'

const Login = () => {

  const email=useRef(null)
  const password=useRef(null)
  const name=useRef(null)
  const [errormessage,seterrormessage]= useState()
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const handleclick=()=>{
    // console.log(email)
    
    const message=checkValdation(email.current.value,password.current.value)
    // console.log(message)
    seterrormessage(message)


    if(message) return ;

    if(!issingin){
      createUserWithEmailAndPassword(Auth,email.current.value,password.current.value)
      .then((userCredential)=>{
        const user=userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: ""
        }).then(() => {
          const{uid,email,password,displayName}  = Auth.currentUser;
          navigate('/browse')
          dispatch(
            adduser({uid:uid,email:email,password:password,displayName:displayName})
          )

          console.log(user)
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          seterrormessage(error.message)
          // ...
        });
        console.log(user)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormessage(errorCode+errorMessage)
        // ..
      });
    }

    else{
      signInWithEmailAndPassword(Auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate('/browse')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+errorMessage)
  });
    }
  }

  

  const[issingin,setissingin]=useState(true)
   const tooglesingin=()=>{
    setissingin(!issingin)
    

  }
  return (
    <div>
        <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_medium.jpg'/>
      </div>
      <div className='absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white  bg-black bg-opacity-75 rounded-lg'>
        <form 
        onSubmit={(e)=>{e.preventDefault()}}
        className='rounded-lg'>
          <h1 className='py-4   font-bold text-4xl text-white
          '>{issingin ? "Sing In" : "Sing Up "}</h1>
          {!issingin && (<input
          ref={name}
          type='text' placeholder='Full Name' className='p-4 m-4 w-full rounded-lg bg-gray-700'></input>)}
          <input 
          ref={email}
          type='string' placeholder='email' className='p-4 m-4 w-full rounded-lg bg-gray-700'></input>
          <input
          ref={password}
          type='password' placeholder='password' className='p-4 m-4 w-full rounded-lg bg-gray-700'></input>
          <button 
          onClick={handleclick}
          className='p-4 m-4 w-full bg-red-600 rounded-md'>{issingin ? "Sing In" : "Sing Up "}</button>
          <p className='text-red-600 text-lg py-2 my-2'> {errormessage}</p>
          
          <p 
          className='cursor-pointer'
          onClick={tooglesingin}>{issingin ? "new to netflix? sing up now " : " Sing in "}</p>
        </form>
      </div>
    </div>
  )
}

export default Login
