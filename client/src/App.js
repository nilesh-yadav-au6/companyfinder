import React from 'react'
import HomePage from "./components/HomePage"
import Navbar from "./components/NavBar"
import { Switch ,Route } from "react-router-dom"
import SearchPage from "./components/SearchPage"
import "./App.css"
import ReactNotification from 'react-notifications-component'

function App() {
  return (
    <div className="App">
      <ReactNotification />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
    </div>
  )
}

export default App
