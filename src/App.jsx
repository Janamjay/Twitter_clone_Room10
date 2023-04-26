import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route ,Routes } from 'react-router'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Footer from './footer/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/signup' element={<Signup/>}>Signup</Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
