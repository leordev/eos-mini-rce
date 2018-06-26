import React, { Component } from 'react'
import { Table } from 'bloomer'
import Button from '../components/Button'

class BlocksTable extends Component {

  renderEmptyRow() {
    return (
      <tr>
        <td colspan='4'>
          No data is available. Please check your Internet Connection.
        </td>
      </tr>
    )
  }

  renderBlockRow(block) {
     return (
        <tr>
          <td>{block.id}</td>
          <td>{block.timestamp}</td>
          <td>{block.actions}</td>
          <td>
            <Button color='info' icon='plus-circle' />
          </td>
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
          <th></th>
        </tr>
      </thead>
    )
  }

  render() {

    const { blocks } = this.props

    const header = this.renderHeader()

    const body = this.renderBody(blocks)

    return (
      <Table isBordered isStriped>
        {header}
        {body}
      </Table>
    )
  }
}

export default BlocksTable
