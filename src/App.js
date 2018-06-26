import React, { Component } from 'react'
import { Container, Box, Level, LevelLeft, LevelRight, Subtitle } from 'bloomer'
import moment from 'moment'

// ours
import { readChainAndTop10Blocks } from './api/eosApi'
import Button from './components/Button'
import PageFooter from './general/PageFooter'
import BlocksTable from './blocks/BlocksTable'

// static
import logo from './logo.gif'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.refreshChainAndBlocksData = this.refreshChainAndBlocksData.bind(this);
    this.loadChainAndBlocksData = this.loadChainAndBlocksData.bind(this);
    this.loadChainAndBlocksDataFailure = this.loadChainAndBlocksDataFailure.bind(this);
    this.doRefresh = this.doRefresh.bind(this);
    this.state = {isLoading: false, chainData: null, blocks: null, lastLoadAt: 'Never'}
  }

  componentDidMount() {
    this.refreshChainAndBlocksData()
  }

  refreshChainAndBlocksData() {
    this.setState({
      isLoading: true
    })

    readChainAndTop10Blocks()
      .then(this.loadChainAndBlocksData)
      .catch(this.loadChainAndBlocksDataFailure)
  }

  loadChainAndBlocksData(data) {
    this.setState({
      isLoading: false,
      chainData: data.chainData,
      blocks: data.blocks,
      lastLoadAt: moment().format('LLL')
    })
  }

  loadChainAndBlocksDataFailure(error) {
    const msg = 'Fail to read EOS Data: \n' + JSON.stringify(error)
    console.error(msg, error)
    alert(msg)
    this.setState({
      isLoading: false
    })
  }

  doRefresh(e) {
    e.preventDefault()
    this.refreshChainAndBlocksData()
  }

  render() {

    const { chainData, isLoading, blocks, lastLoadAt } = this.state

    const headerBlock = chainData && chainData.head_block_num ?
      Number(chainData.head_block_num).toLocaleString() :
      '?'

    const title = isLoading ?
      <span>Please wait... Loading EOS Mainnet Chain and Blocks Data</span> :
      <span>Last Loaded Block Header: <strong>{headerBlock}</strong> at {lastLoadAt}</span>

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">EOS Mini Ricardian Contract Explorer</h1>
        </header>

        <Container>
          <Box className="has-margin-top">
            <Level>
              <LevelLeft>
                <Subtitle tag='p' isSize={5}>
                  {title}
                </Subtitle>
              </LevelLeft>
              <LevelRight>
                <Button color='success'
                        isLoading={isLoading}
                        onClick={this.doRefresh}
                        icon='refresh'
                        text='Reload Blocks' />
              </LevelRight>
            </Level>
          </Box>

          <BlocksTable blocks={blocks} />
        </Container>

        <PageFooter />

      </div>
    );
  }
}

export default App;
