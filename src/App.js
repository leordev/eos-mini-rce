import React, { Component } from 'react'
import { Container, Box, Level, LevelLeft, LevelRight, LevelItem, Subtitle } from 'bloomer'
import moment from 'moment'
import { readChainLastBlocks } from './lib/eosApi';
import Button from './components/Button'
import PageHeader from './layout/PageHeader'
import PageFooter from './layout/PageFooter'
import BlocksTable from './blocks/BlocksTable'
import ActionsExplorer from './actions/ActionsExplorer'
import './App.css'

const LAST_BLOCKS_QTY = 10
class App extends Component {

  constructor(props) {
    super(props)
    this.refreshChainAndBlocksData = this.refreshChainAndBlocksData.bind(this)
    this.loadChainAndBlocksData = this.loadChainAndBlocksData.bind(this)
    this.loadChainAndBlocksDataFailure = this.loadChainAndBlocksDataFailure.bind(this)
    this.doRefresh = this.doRefresh.bind(this)
    this.state = {isLoading: false, chainData: null, blocks: null, lastLoadAt: 'Never'}
  }

  componentDidMount() {
    this.refreshChainAndBlocksData()
  }

  refreshChainAndBlocksData() {
    this.setState({
      isLoading: true
    })

    readChainLastBlocks(LAST_BLOCKS_QTY)
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
    const msg = 'Fail to read EOS Data: \n' + error
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

  renderHeader() {

    const { chainData, isLoading, lastLoadAt } = this.state

    const headerBlock = chainData && chainData.head_block_num ?
      Number(chainData.head_block_num).toLocaleString() :
      '?'

    const title = isLoading ?
      <span>Please wait... Loading EOS Mainnet Chain and Blocks Data</span> :
      <span>Last Loaded Block Header: <strong>{headerBlock}</strong> at {lastLoadAt}</span>

    return (
      <Box className="has-margin-top">
        <Level>
          <LevelLeft>
            <LevelItem>
            <Button color='success'
                    isLoading={isLoading}
                    onClick={this.doRefresh}
                    icon='refresh' />
            </LevelItem>
            <LevelItem>
              <Subtitle tag='p' isSize={5}>
                {title}
              </Subtitle>
            </LevelItem>
          </LevelLeft>
          <LevelRight>
            <LevelItem>
              <ActionsExplorer />
            </LevelItem>
          </LevelRight>
        </Level>
      </Box>
    )

  }

  render() {

    const {isLoading, blocks } = this.state

    return (
      <div className="App">
        <PageHeader />
        <Container>
          {this.renderHeader()}
          <BlocksTable blocks={blocks} isLoading={isLoading} />
        </Container>
        <PageFooter />
      </div>
    );
  }
}

export default App;
