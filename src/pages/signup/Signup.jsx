import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <h1>this is signUp</h1>
      <NavLink to="/"><button>home</button></NavLink>
      <NavLink to="/login"><button>Login</button></NavLink>
      <NavLink to="/signup"><button>Signup</button></NavLink>
    </div>
  )
}

export default Signup
