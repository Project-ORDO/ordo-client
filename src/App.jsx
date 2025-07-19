import LoginPage from './pages/user/Login'
import SignupPage from './pages/user/Signup'

const App = () => {
  return (
    <>
      <LoginPage />
      <div className='mt-20'></div>
      <SignupPage/>
      <div className='mt-20'></div>
    </>
    
  )
}

export default App