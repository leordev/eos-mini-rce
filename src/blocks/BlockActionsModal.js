import React, { Component } from 'react'
import { Field, Content, Control, Select, Modal, ModalBackground, ModalCardHeader, ModalCardTitle, ModalCard, Delete, ModalCardBody, ModalCardFooter } from 'bloomer'
import ReactMarkdown from 'react-markdown'
import Handlebars from 'handlebars'
import { readRicardianContract } from '../api/eosApi'

class BlockActionsModal extends Component {

  constructor(props) {
    super(props)
    this.state = {isLoading: false, ricardianContract: null, selectedAction: ''}
    this.readContract = this.readContract.bind(this)
    this.readContractLoadOk = this.readContractLoadOk.bind(this)
    this.readContractLoadFailure = this.readContractLoadFailure.bind(this)
  }

  readContract(e) {
    console.log(e)

    const value = e.target.value

    if (!value) return

    const values = value.split('-')

    if (values.length !== 3) return

    const selectedAction = {account: values[1], name: values[2]}

    this.setState({isLoading: true, ricardianContract: null,
      selectedAction})

    readRicardianContract(values[1], values[2])
      .then(this.readContractLoadOk)
      .catch(this.readContractLoadFailure)
  }

  readContractLoadOk(data) {
    this.setState({
      isLoading: false,
      ricardianContract: data || 'Empty Ricardian Contract'
    })
  }

  readContractLoadFailure(error) {
    const msg = 'Fail to read EOS Contract Data: \n' + JSON.stringify(error)
    console.error(msg, error)
    alert(msg)
    this.setState({
      isLoading: false
    })
  }

  actionValue(action) {
    return action ? `act-${action.account}-${action.name}` : ''
  }

  actionsMenu() {
    const {actions} = this.props
    const {selectedAction, isLoading} = this.state

    const options = actions.map(action => {
      const id = this.actionValue(action)
      const label = `${action.account}::${action.name}`

      return (
        <option key={id} value={id}>
          {label}
        </option>
      )
    })

    return (
      <Field>
          <Control>
              <Select onChange={this.readContract}
                      value={this.actionValue(selectedAction)}
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
    const { ricardianContract, selectedAction } = this.state
    const { actions } = this.props

    const action = actions.find(a => a.account == selectedAction.account &&
      a.name == selectedAction.name)

    const contractTemplate = Handlebars.compile(ricardianContract)
    const contractParsed = contractTemplate(action.data)

    return (
      <Content>
        <ReactMarkdown source={contractParsed} />
      </Content>
    )
  }

  render() {

    const { blockNum, isActive, onClose } = this.props
    const {selectedAction, isLoading} = this.state

    return (
      <Modal isActive={isActive}>
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
                <ModalCardTitle>Actions found in Block {blockNum}</ModalCardTitle>
                <Delete onClick={onClose} />
            </ModalCardHeader>
            <ModalCardBody>
                {this.actionsMenu()}
                {isLoading ? <p>Please Wait, Loading...</p> :
                  !selectedAction ? <p>Please select an Action Above to view Ricardian Contract</p> :
                  this.renderActionRicardianContract()}
            </ModalCardBody>
            <ModalCardFooter></ModalCardFooter>
          </ModalCard>
      </Modal>
    );
  }
}

export default BlockActionsModal;
