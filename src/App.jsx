import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import './sections/Section1.css'
import './sections/Section2.css'
import  Backtotop from './backtotop'


function App() {

  return (
    <>
   <Navbar/>
   <Outlet/>
   <Backtotop/>
   <Footer />
    </>
  )
}

export default App