import React, { Component } from 'react'
import Button from '../components/Button'
import ActionsModal from './ActionsModal'
import {LevelRight, LevelItem, Input, Field, Control} from 'bloomer'

import { getTransactionActions } from '../lib/eosApi'

class ActionsExplorer extends Component {

  constructor(props) {
    super(props)
    this.state = {isLoading: false, actions: [], showActions: false, transactionId: ''}
    this.updateTransactionId = this.updateTransactionId.bind(this)
    this.closeActions = this.closeActions.bind(this)
    this.searchTransaction = this.searchTransaction.bind(this)
    this.searchTransactionOk = this.searchTransactionOk.bind(this)
    this.searchTransactionFailure = this.searchTransactionFailure.bind(this)
  }

  searchTransaction() {
    const { transactionId } = this.state

    if (!transactionId)
      return alert('You need to enter a transaction Id')

    this.setState({isLoading: true})

    getTransactionActions(transactionId)
      .then(this.searchTransactionOk)
      .catch(this.searchTransactionFailure)
  }

  searchTransactionOk(data) {
    this.setState({
      isLoading: false,
      showActions: true,
      actions: data
    })
  }

  searchTransactionFailure(error) {
    const msg = 'Fail to read Transaction Data: \n' + error
    console.error(msg, error)
    alert(msg)
    this.setState({
      isLoading: false
    })
  }

  updateTransactionId(e) {
    this.setState({transactionId: e.target.value})
  }

  closeActions() {
    this.setState({showActions: false})
  }

  render() {

    const {isLoading, transactionId, showActions, actions} = this.state

    const actionsModal = showActions &&
      <ActionsModal isActive
                    onClose={this.closeActions}
                    actions={actions}
                    transactionId={transactionId} />

    return (
      <div>
          <div className="is-left has-margin-right">
            <Field>
                <Input type="text"
                      placeholder="Search for a TrxId..."
                      value={transactionId}
                      onChange={this.updateTransactionId} />
            </Field>
          </div>
          <div className="is-right">
            <Button color='info'
                  isLoading={isLoading}
                  icon='search'
                  onClick={this.searchTransaction} />
          </div>
          {actionsModal}
      </div>
    );
  }
}

export default ActionsExplorer
