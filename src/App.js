import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import './default.scss'

import MainLayout from './layouts/MainLayout/MainLayout'
import Homepage from './pages/Homepage/Homepage'
import Registration from './pages/Registration/Registration'

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )} />
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
        </Switch>
    </Router>
  )
}

export default App