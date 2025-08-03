import Home from './components/Firstpage/Firstpage'
import Bmchome from './Bmchome'
import Login from './Login1'
import Menu from './menu';
import Home1 from './Home1';
import CartPage from './Cart';
import Orders from './Orders';
import Bill from './Bill'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App1 from './APP1';
function App()  {
  return (
    <>
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/pickyourmenu' element={<Home1/>} />
        <Route path='/bmchome' element={<Bmchome/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<App1/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/bill' element={<Bill/>} />
    </Routes>
  </BrowserRouter>
  </>
  )
}
export default App

