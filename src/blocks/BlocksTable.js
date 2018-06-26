import React, { Component } from 'react'
import { Table } from 'bloomer'
import { utcToLocal } from '../lib/utils'
import Button from '../components/Button'
import ActionsModal from '../actions/ActionsModal'
import './BlocksTable.css'

class BlocksTable extends Component {

  constructor(props) {
    super(props)
    this.state = { expandedBlocks: [], showActions: null, currentBlockNum: null }
    this.expandBlock = this.expandBlock.bind(this);
    this.collapseBlock = this.collapseBlock.bind(this);
    this.renderBlockRow = this.renderBlockRow.bind(this);
    this.renderEmptyRow = this.renderEmptyRow.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.showActions = this.showActions.bind(this);
    this.closeActions = this.closeActions.bind(this);
  }

  expandBlock(blockId) {
    const expandedBlocks = this.state.expandedBlocks.concat(blockId)
    this.setState({expandedBlocks})
  }

  collapseBlock(blockId) {
    const expandedBlocks = this.state.expandedBlocks.filter(b => b !== blockId)
    this.setState({expandedBlocks})
  }

  showActions(blockNum, actions) {
    this.setState({showActions: actions, currentBlockNum: blockNum})
  }

  closeActions() {
    this.setState({showActions: null, currentBlockNum: null})
  }

  renderEmptyRow(isLoading) {
    return (
      <tr>
        <td colSpan={4}>
          {isLoading ?
            'Please wait, blocks are being loaded' :
            'No blocks are available.'
          }
        </td>
      </tr>
    )
  }

  renderBlockActionsCol(block) {
    let actions = []
    block.transactions.forEach(t => {
      const trxActions = (t.trx.transaction && t.trx.transaction.actions)
      if (trxActions) {
        trxActions.forEach((action, index) => {
          actions.push({
            ...action,
            internalId: `${t.trx.id}-${index}`
          })
        })
      }
    })

    const button = actions.length > 0 &&
      <Button icon="book" size="small"
              onClick={()=> this.showActions(block.block_num, actions)} />

    return(<td>{actions.length} {button}</td>)
  }

  renderBlockHashExpansionCol(block) {
    const isExpanded = this.state.expandedBlocks.filter(b => b === block.id).length

    let button, expandedData = null

    if (isExpanded) {
      button = <Button color="danger"
                       icon="minus-circle"
                       size="small"
                       onClick={() => this.collapseBlock(block.id)} />
      expandedData = <pre className="BlocksTable-pre">{JSON.stringify(block, null, 2)}</pre>
    } else {
      button = <Button color="info"
                       icon="plus-circle"
                       size="small"
                       onClick={() => this.expandBlock(block.id)} />
    }

    return(
      <td>
        <p>{button} {block.id}</p>
        {expandedData}
      </td>
    )
  }

  renderBlockRow(block) {

    const timestamp = utcToLocal(block.timestamp).format('YYYY-MM-DD HH:mm:ss.S')

    return (
      <tr key={block.id}>
        <td>{block.block_num}</td>
        {this.renderBlockHashExpansionCol(block)}
        <td>{timestamp}</td>
        {this.renderBlockActionsCol(block)}
      </tr>
    )
  }

  renderBody(blocks, isLoading) {

    const content =
      blocks && blocks.length && !isLoading ?
        blocks.map(this.renderBlockRow) :
        this.renderEmptyRow(isLoading)

    return (
      <tbody>
        {content}
      </tbody>
    )
  }

  renderHeader() {
    return (
      <thead>
        <tr>
          <th>Block Num</th>
          <th>Block Hash</th>
          <th>Timestamp</th>
          <th>Actions</th>
        </tr>
      </thead>
    )
  }

  render() {

    const { blocks, isLoading } = this.props
    const { currentBlockNum, showActions } = this.state

    const header = this.renderHeader()
    const body = this.renderBody(blocks, isLoading)

    return (
      <div>
        <Table isBordered isStriped width={'100%'}>
          {header}
          {body}
        </Table>

        {showActions && currentBlockNum &&
          <ActionsModal isActive
                        onClose={this.closeActions}
                        actions={showActions}
                        blockNum={currentBlockNum} />
        }
      </div>
    )
  }
}

export default BlocksTable
