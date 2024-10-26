import React from 'react'

const checkValdation = (email,password) => {
    // const trimmedEmail = email.trim();
  
    const isemailvalid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test( email)
    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    
    if(!isemailvalid) return "the email is not valid "
    if(!ispasswordvalid) return "the password is not valid "

return null
  
}

export default checkValdation
