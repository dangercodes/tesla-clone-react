import React, { useEffect, useState } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, Account, ProfileSetting, PaymentMethod, Charging } from './Containers';
import { login, logout } from './features/userSlice'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import Loading from './Components/Loading/Loading'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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

  useEffect(() => {
    AOS.init();
  }, []);

  return ( 
    <Router>
      <div className="App">
        {loading ? 
          <Loading /> : 
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/teslaaccount" element={<Account />} />
            <Route exact path="/profilesettings" element={<ProfileSetting />} />
            <Route exact path="/payment-method" element={<PaymentMethod />} />
            <Route exact path="/charging" element={<Charging />} />
          </Routes> 
        }
      </div>
    </Router>
  );
}

export default App;
