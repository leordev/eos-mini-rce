import React, { Component } from 'react'
import { Table } from 'bloomer'
import Button from '../components/Button'

class BlocksTable extends Component {

  renderEmptyRow() {
    return (
      <tr>
        <td colSpan={3}>
          No data is available. Please check your Internet Connection.
        </td>
      </tr>
    )
  }

  renderBlockRow(block) {
    let actions = 0
    block.transactions.forEach(t => {
      actions += (t.trx.transaction && t.trx.transaction.actions.length) || 0
    })

    return (
      <tr key={block.id}>
        <td>
          <Button color='info' icon='plus-circle' size='small' /> {block.id}
        </td>
        <td>{block.timestamp}</td>
        <td>{actions}</td>
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
          <th>Id</th>
          <th>Timestamp</th>
          <th>Actions</th>
        </tr>
      </thead>
    )
  }

  render() {

    const { blocks } = this.props

    const header = this.renderHeader()

    const body = this.renderBody(blocks)

    return (
      <Table isBordered isStriped width={'100%'}>
        {header}
        {body}
      </Table>
    )
  }
}

export default BlocksTable
