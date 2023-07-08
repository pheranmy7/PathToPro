import React from 'react'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Book from './Book'
import Books from './Books'
import Community from './Community'
import Dboard from './Dboard'
import Feedback from './Feedback'
import History from './History'
import Info from './Info'
import Privacy from './Privacy'
import Profile from './Profile'
import Sign from './Sign'
import Signed from './Signed'
import User from './User'
function RouterPage() {
  return (
    <div><Router>
        <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/About'  element={<About />} />
        <Route path='/Book' element={<Book />} />
        <Route path='/Books' element={<Books />} />
        <Route path='/Community'  element={<Community />} />
        <Route path='/Dboard' element={<Dboard />} />
        <Route path='/Feedback'  element={<Feedback />} />
        <Route path='/History'  element={<History />} />
        <Route path='/Info'  element={<Info />} />
        <Route path='/Privacy'  element={<Privacy />} />
        <Route path='/Pofile'  element={<Profile />} />
        <Route path='/Sign'  element={<Sign />} />
        <Route path='/Signed'  element={<Signed />} />
        <Route path='/User'  element={<User />} />

        </Routes>
        </Router>
        </div>
  )
}

export default RouterPage