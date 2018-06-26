import React, { Component } from 'react'
import { Container, Box } from 'bloomer'
import Button from './components/Button'
import PageFooter from './general/PageFooter'
import BlocksTable from './blocks/BlocksTable'
import logo from './logo.gif'
import './App.css'


class App extends Component {
  render() {

    const blocks = [
      {
        id: '123',
        timestamp: '06/25/2018 19:54:59.000',
        actions: 9
      },
      {
        id: '123',
        timestamp: '06/25/2018 19:54:59.000',
        actions: 9
      },
      {
        id: '123',
        timestamp: '06/25/2018 19:54:59.000',
        actions: 9
      }
    ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">EOS Mini Ricardian Contract Explorer</h1>
        </header>

        <Container>
          <Box className="has-margin-top">
            <Button color='success' icon='refresh' text='Refresh' />
            <span>Current Block: 1920</span>
          </Box>

          <BlocksTable blocks={blocks} />
        </Container>

        <PageFooter />

      </div>
    );
  }
}

export default App;
