import { Route ,Routes } from 'react-router'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
// import Footer from './footer/Footer'

import Footer from './footer/Footer'
import Step1 from './pages/signup/step1/Step1'
import Step2 from './pages/signup/step2/Step2'
import Step3 from './pages/signup/step3/Step3'
import Step4 from './pages/signup/step4/Step4'
import Step5 from './pages/signup/step5/Step5'
import ExplorePage from './pages/home/Sidebar/ExplorePage'
import Notifications from './pages/home/Sidebar/Notifications'
import Messages from './pages/home/Sidebar/Messages'
import Bookmarks from './pages/home/Sidebar/Bookmarks'
import TwitterBlue from './pages/home/Sidebar/TwitterBlue'


function App() {

  return (
    <>
    <div className='App'>
    <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/step1' element={<Step1/>}>Signup</Route>
        <Route path='/step2' element={<Step2/>}>Signup</Route>
        <Route path='/step3' element={<Step3/>}>Signup</Route>
        <Route path='/step4' element={<Step4/>}>Signup</Route>
        <Route path='/step5' element={<Step5/>}>Signup</Route>
        <Route path='/signup' element={<Signup/>}>Signup</Route>
  
      </Routes>

    </div>
     
      {/* <Footer/> */}
    </>
  )
}

export default App
