import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { getHotelsThunk } from './store/slices/hotels.slices'
import HotelsIdPage from './pages/HotelsIdPage'
import PrincipalHeader from './components/shared/PrincipalHeader'

function App() {

  const dispatch = useDispatch()
    useEffect(() => {
        const url = `https://hotels-api.academlo.tech/hotels`
        dispatch(getHotelsThunk(url))
    }, [])

  return (
    <div>
        <PrincipalHeader/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hotels/:id' element={<HotelsIdPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        
      </Routes>
    </div>
  )
}

export default App
