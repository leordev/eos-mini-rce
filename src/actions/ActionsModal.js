import React, { Component } from 'react'
import { Field, Content, Control, Select, Modal, ModalBackground, ModalCardHeader, ModalCardTitle, ModalCard, Delete, ModalCardBody, ModalCardFooter } from 'bloomer'
import ReactMarkdown from 'react-markdown'

import { readRcWithData } from '../lib/eosRcParser'

class ActionsModal extends Component {

  constructor(props) {
    super(props)
    this.state = {isLoading: false, ricardianContract: null, selectedAction: null}
    this.readContract = this.readContract.bind(this)
    this.readContractLoadOk = this.readContractLoadOk.bind(this)
    this.readContractLoadFailure = this.readContractLoadFailure.bind(this)
  }

  readContract(e) {
    const value = e.target.value
    const { actions } = this.props

    const action = value && actions.find(a => a.internalId === value)

    if (action) {
      const selectedAction = value
      this.setState({isLoading: true, ricardianContract: null,
        selectedAction})

      readRcWithData(action.account, action.name, action.data)
        .then(this.readContractLoadOk)
        .catch(this.readContractLoadFailure)
    } else {
      this.setState({ricardianContract:null, selectedAction: null})
    }
  }

  readContractLoadOk(data) {
    this.setState({
      isLoading: false,
      ricardianContract: data
    })
  }

  readContractLoadFailure(error) {
    const msg = 'Fail to read EOS Contract Data: \n' + error
    console.error(msg, error)
    alert(msg)
    this.setState({
      isLoading: false
    })
  }

  actionsMenu() {
    const {actions} = this.props
    const {selectedAction, isLoading} = this.state

    const options = actions.map(action => {
      const label = `${action.account}::${action.name}`

      return (
        <option key={action.internalId} value={action.internalId}>
          {label}
        </option>
      )
    })

    return (
      <Field>
          <Control>
              <Select onChange={this.readContract}
                      value={selectedAction || ''}
                      isLoading={isLoading}>
                  <option value={''}>
                    Select an Action to View Ricardian Contract
                  </option>
                  {options}
              </Select>
          </Control>
      </Field>
    )
  }

  renderActionRicardianContract() {
    const { ricardianContract } = this.state

    return (
      <Content>
        <ReactMarkdown source={ricardianContract} />
      </Content>
    )
  }

  render() {

    const { blockNum, transactionId, isActive, onClose } = this.props
    const {selectedAction, isLoading} = this.state

    let title

    if (blockNum) {
      const blockNumTxt = Number(blockNum).toLocaleString()
      title = `Actions found in Block ${blockNumTxt}`
    } else {
      const blockNumTxt = Number(blockNum).toLocaleString()
      title = `Actions for Trx ${transactionId.substring(0,10)}...`
    }

    let content = <p>Please select an Action Above to view Ricardian Contract</p>
    if (isLoading)
      content = <p>Please Wait, Loading...</p>
    else if (selectedAction)
      content = this.renderActionRicardianContract()

    return (
      <Modal isActive={isActive}>
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
                <ModalCardTitle>{title}</ModalCardTitle>
                <Delete onClick={onClose} />
            </ModalCardHeader>
            <ModalCardBody>
                {this.actionsMenu()}
                {content}
            </ModalCardBody>
            <ModalCardFooter></ModalCardFooter>
          </ModalCard>
      </Modal>
    );
  }
}

export default ActionsModal
