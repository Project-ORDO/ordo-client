import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import SignupForm from './pages/user/Signup'
import LoginForm from './pages/user/Login'

const App = () => {
  return (
    <div >
      <Navbar />
        <LoginForm />
        <SignupForm/>
      <Footer />
    </div>
  )
}

export default App