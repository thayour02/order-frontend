
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'
import Menu from './pages/menu'
import Register from './pages/register'
import Login from './pages/login'
import { useContext } from 'react'
import { AuthContext } from './context/authProvider'
import LoadingSpinner from './components/loading'
import PrivateRouter from './privateRoute/privateRouter'
import UpdateProfile from './dashBoard/update-profile'
import CartItems from './pages/cart'


function App() {
  const { loading } = useContext(AuthContext)
  return (
    <div className='bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] to-100%'>
      {
        loading ? <p><LoadingSpinner /></p>
          : <div>
            <Navbar />
            <div className='min-h-screen'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/menu' element={<Menu />}/>
              <Route path='/update-profile' element={<PrivateRouter> < UpdateProfile /> </PrivateRouter>} />
              <Route path='/cart-page' element={<PrivateRouter> <CartItems /> </PrivateRouter>} />
            </Routes>
            </div>
            <Footer />
          </div>
      }
    </div>
  )
}

export default App
