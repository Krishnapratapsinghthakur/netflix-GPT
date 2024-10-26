import React from 'react'
import { Auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { removeuser } from '../utils/userSlice';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const dispatch=useDispatch(removeuser())

  const handleclick=()=>{
    
signOut(Auth).then(() => {
  //  const dispatch=useDispatch(removeuser())
  dispatch(
    removeuser()
    // console.log(user)
  )
  navigate('/')
}).catch((error) => {
  // An error happened.
  navigate('/error')
});
  }



  return (
    <div className='px-8 py-2 absolute  bg-gradient-to-b from-black z-10 w-full flex justify-between' >
        
            <img className="w-44" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>
        
        { user && <div className='flex
        '>
            <img className="w-12 h-15 mx-4" src='https://www.freeiconspng.com/thumbs/computer-user-icon/computer-user-icon-28.png'/>
            <h3> krishna{user.displayname}</h3>
            {console.log(user.displayname)}
            <button
            onClick={handleclick}
             className='bg-red-600 my-4 px-2 rounded-lg font-bold'>
              Sing-Out</button>
        </div>}
        
      
    </div> 
  ) 
}

export default Header
