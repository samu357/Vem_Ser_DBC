import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Users from './pages/Users'

const Routers = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path={'/login'} element={<Login/>}></Route>
        <Route path={'users'} element={<Users/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;