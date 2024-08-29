import React from 'react'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import { BrowserRouter as Router , Route  , Routes}  from 'react-router-dom'
import Home from './components/Home/Home'
import Signup from './components/signup/Signup'

const App = () => {
  return (
<Router>


<Routes>
 <Route path="/" element={<Home/>}></Route>
 <Route path="/login" element={<Login/>}></Route>
 <Route path="/signup" element={<Signup/>}></Route>
</Routes>
</Router>

  )
}

export default App