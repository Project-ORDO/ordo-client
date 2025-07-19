import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import SignupPage from './pages/user/Signup'
import LoginPage from './pages/user/Login'

const App = () => {
  return (
    <div >
      <Navbar />
        <LoginPage />
        <SignupPage/>
      <Footer />
    </div>
  )
}

export default App