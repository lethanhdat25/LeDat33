import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Body from './components/body/Body'
import axios from 'axios';
import OnTop from './components/OnTop';
import ScrollToTop from './ScrollTop';


function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      dispatch(dispatchLogin())
    }
  },[auth.isLogged, dispatch])




  return (
    <Router>
        <ScrollToTop/>
        <Header />
        <main>
        <Body />
        </main>
        <Footer/>
     <OnTop/>
    </Router>
  );
}

export default App;
