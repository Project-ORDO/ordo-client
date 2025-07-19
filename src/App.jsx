import React from 'react'
import AuthForm from './components/Form'
import LoginPage from './pages/user/Login'
import SignupPage from './pages/user/Signup'

const App = () => {
  return (

    <>
    <div className='text-red-500 .dark .card'>
      <div>
        <button className='.btn-primary'>button</button>
      </div>
     
    </div>
      <LoginPage />
      <div className='mt-20'></div>
      <SignupPage/>
      <div className='mt-20'></div>
    </>
    
  )
}

export default App