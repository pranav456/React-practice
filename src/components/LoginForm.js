import React from 'react'

const LoginForm = () => {
  return (
    <div className='form-container'>
        <label htmlFor='Email'>Email</label>
        <input type='email' id='email' />
        <label htmlFor='Password'>Password</label>
        <input type='password' id='password'/><br/>
        <button className='submit'>Submit</button>
    </div>
  )
}

export default LoginForm