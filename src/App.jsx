import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useAuth } from './hooks/useAuth'

import { AuthProvider } from './context/AuthContext'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuth()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
            <Route path='/submit' element={user ? <CreatePost /> : <Navigate to='/login' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
