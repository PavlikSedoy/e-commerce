import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import { auth, handleUserProfile } from './firebase/utils'

// Layouts
import MainLayout from './layouts/MainLayout/MainLayout'

// Pages
import Homepage from './pages/Homepage/Homepage'
import Registration from './pages/Registration/Registration'
import Login from './pages/Login/Login'

import './default.scss'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }

      setCurrentUser(null)
    })
  }, [auth])

  return (
    <Router>
        <Switch>
          <Route path="/" exact render={() => (
            <MainLayout currentUser={currentUser}>
              <Homepage />
            </MainLayout>
          )} />
          <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
            <MainLayout currentUser={currentUser}>
              <Registration />
            </MainLayout>
          )} />
          <Route
            path="/login"
            render={() => currentUser ? <Redirect to="/" /> : (
              <MainLayout currentUser={currentUser}>
                <Login />
              </MainLayout>
            )}
          />
        </Switch>
    </Router>
  )
}

export default App