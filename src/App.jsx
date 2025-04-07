import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import LoginOrSignUp from './pages/signUpOrLogin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    {/* <Route path='/*' element={<UserRoute/>} /> */}
    <Route path='/login' element={<LoginOrSignUp value={"login"}/>}/>
    <Route path='/signup' element={<LoginOrSignUp value={"signup"} />}/>
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App
