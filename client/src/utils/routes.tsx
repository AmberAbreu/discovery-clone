import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AllSessions, Home, Layout, LogIn, MyProfile, SignUp } from 'src/pages'
import { AppOrAuth } from 'src/pages/app-or-auth'
import { useAuth } from 'src/stores/auth'

const PrivateRoutes = () => {
  const token = useAuth.use.token()
  const isAuth = Boolean(token)
  return isAuth ? (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/all-sessions" element={<AllSessions />} />
      <Route path="/private" element={<div>Hello from private</div>} />
    </Routes>
  ) : (
    <Navigate to="/log-in" />
  )
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AppOrAuth />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<PrivateRoutes />} />
      </Route>
    </Routes>
  )
}
