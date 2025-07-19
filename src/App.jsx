import React from 'react'
import AuthForm from './components/Form'
import LoginPage from './pages/user/Login'
import SignupPage from './pages/user/Signup'

const App = () => {
  return (
    <div className='text-red-500 .dark .card'>
      <div>
        <button className='.btn-primary'>button</button>
      </div>
      <AuthForm />
      <LoginPage />
      <SignupPage/>
    </div>
  )
}

export default App