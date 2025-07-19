import React from 'react'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import { LogIn } from 'lucide-react'
import SignupPage from './pages/user/Signup'

const App = () => {
  return (
    <div className='text-red-500 .dark .card'>
      <Navbar />
        <LogIn />
        <SignupPage/>
      <Footer />
    </div>
  )
}

export default App