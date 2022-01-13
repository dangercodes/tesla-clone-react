import React, { useEffect } from 'react';
import './App.css';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, Account } from './Containers';
import { login, logout } from './features/userSlice'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      auth.onAuthStateChanged((userAuth) => {
          if (userAuth) {
              // User is signed in
              dispatch(
                  login({
                      email: userAuth.email,
                      uid: userAuth.uid,
                      displayName: userAuth.displayName,
                  })
              )
          } else {
              // User is signed out
              dispatch(logout())
          }
      })
  }, [dispatch])
  return ( 
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/teslaaccount" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
