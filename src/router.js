import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Menu from './components/menuComponent'
import Footer from './components/footerComponent'

import HomePage from './pages/homePage'
import NoMatchPage from './pages/noMatchPage'

const router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' component={Menu} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route component={NoMatchPage} />
        </Switch>
        <Route path='/' component={Footer} />
      </div>
    </BrowserRouter>
  )
}

export default router
