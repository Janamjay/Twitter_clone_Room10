import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>this is home</h1>
      <NavLink to="/"><button>home</button></NavLink>
      <NavLink to="/login"><button>Login</button></NavLink>
      <NavLink to="/signup"><button>Signup</button></NavLink>
    </div>
  )
}

export default Home
