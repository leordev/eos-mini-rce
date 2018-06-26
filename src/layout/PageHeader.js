import React, { Component } from 'react'
import logo from '../logo.gif'

class PageHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">EOS Mini Ricardian Contract Explorer</h1>
      </header>
    )
  }
}

export default PageHeader
