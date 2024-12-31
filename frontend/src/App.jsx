import Navbar from "./components/Navbar"

import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"


import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import { Loader } from 'lucide-react'
import { Toaster } from "react-hot-toast"

import LandingPage from "./pages/LandingPage"
import SmoothScroll from "./components/scroll/SmoothScroll"

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();


  // console.log({ onlineUsers });  

  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  // console.log({ authUser })

  if (isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  )

  return (
    < >
      <Navbar />
      {/* <SmoothScroll> */}
      <Routes>
        {/* <Route path="/" element={authUser ? <Navigate to="/login" /> : < LandingPage className='mt-10' />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={authUser ? <Navigate to="/homepage" /> : <LoginPage />} />
        <Route path="/homepage" element={authUser ? <HomePage /> : <Navigate to="/" />} />



      </Routes> 
      <Toaster />
    </>
  )
}

export default App
