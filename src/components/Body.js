import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { Auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'


const Body = () => {
    const dispatch=useDispatch()

    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(Auth, (user) => {
            if (user) {

             
              const{uid,email,password,displayName}  = user;
              dispatch(adduser({uid:uid,email:email,password:password,displayName:displayName}))
            //   useNavigate("/browse")
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeuser())
            //   useNavigate("/")
            // we cannot use the use navigate hook at the root lever we have to do  it insider the routing elements 
        }
          });
    },[])
  return (
    <div>
        <RouterProvider router={approuter}/>
      
    </div>
  )
}

export default Body
