import React from 'react'
import Image from '../src/components/Images'
import HomePage from '../src/pages/HomePage'
import AboutPage from '../src/pages/AboutPage'
import TeamPage from '../src/pages/TeamPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/image" component={Image} />
          <Route path="/team" component={TeamPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
