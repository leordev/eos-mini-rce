import React, { Component } from 'react'
import { Table } from 'bloomer'
import moment from 'moment'
import Button from '../components/Button'
import BlockActionsModal from './BlockActionsModal'
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
    console.log(this.state.expandedBlocks, expandedBlocks)
    this.setState({expandedBlocks})
  }

  collapseBlock(blockId) {
    const expandedBlocks = this.state.expandedBlocks.filter(b => b !== blockId)
    console.log(expandedBlocks)
    this.setState({expandedBlocks})
  }

  renderEmptyRow() {
    return (
      <tr>
        <td colSpan={3}>
          No data is available. Please check your Internet Connection.
        </td>
      </tr>
    )
  }

  showActions(blockNum, actions) {
    this.setState({showActions: actions, currentBlockNum: blockNum})
  }

  closeActions() {
    this.setState({showActions: null, currentBlockNum: null})
  }

  renderBlockRow(block) {
    let actions = []
    block.transactions.forEach(t => {
      const as = (t.trx.transaction && t.trx.transaction.actions)
      if (as && as.length) {
        actions = actions.concat(as)
      }
    })

    const isExpanded = this.state.expandedBlocks.filter(b => b === block.id).length

    let buttonAction, button, expandedData = null

    if (isExpanded) {
      buttonAction = () => this.collapseBlock(block.id)
      button = <Button color="danger" icon="minus-circle" size="small" onClick={buttonAction} />
      expandedData = <pre className="BlocksTable-pre">{JSON.stringify(block, null, 2)}</pre>
    } else {
      buttonAction = () => this.expandBlock(block.id)
      button = <Button color="info" icon="plus-circle" size="small" onClick={buttonAction} />
    }

    const utcDate = moment.utc(block.timestamp).toDate();
    const timestamp = moment(utcDate).local().format('YYYY-MM-DD HH:mm:ss.S')

    const viewActionsButton = actions.length > 0 &&
      <Button icon="book" size="small"
              onClick={()=> this.showActions(block.block_num, actions)} />

    return (
      <tr key={block.id}>
        <td>
          <p>{button} {block.block_num} / {block.id}</p>
          {expandedData}

        </td>
        <td>{timestamp}</td>
        <td>{actions.length} {viewActionsButton}</td>
      </tr>
    )
  }

  renderBody(blocks) {

    const content =
      blocks && blocks.length ?
        blocks.map(this.renderBlockRow) :
        this.renderEmptyRow()

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
          <th>Block Num / Hash</th>
          <th>Timestamp</th>
          <th>Actions</th>
        </tr>
      </thead>
    )
  }

  render() {

    const { blocks } = this.props
    const { currentBlockNum, showActions } = this.state

    const header = this.renderHeader()

    const body = this.renderBody(blocks)

    console.log(currentBlockNum, showActions)

    return (
      <div>
        <Table isBordered isStriped width={'100%'}>
          {header}
          {body}
        </Table>

        {showActions && currentBlockNum &&
          <BlockActionsModal isActive
                            onClose={this.closeActions}
                            actions={showActions}
                            blockNum={currentBlockNum} />
        }
      </div>
    )
  }
}

export default BlocksTable
