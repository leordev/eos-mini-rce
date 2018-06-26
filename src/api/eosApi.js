const rpcEndpoint = 'https://api.eosnewyork.io/v1'

const getChainInfo = 'getChainInfo'

const getBlockInfo = 'getBlockInfo'

const getTransactionActions = (transactionId) => {
    return fetch(`${rpcEndpoint}/history/get_transaction`, {
      body: JSON.stringify({id: transactionId}),
      method: 'POST'
    })
    .then(response => response.json())
    .then(json => json.trx.trx.actions)
}

const getActionContract = (action) => {
    return fetch(`${rpcEndpoint}/chain/get_abi`, {
      body: JSON.stringify({account_name: action.account }),
      method: 'POST'
    })
    .then(response => response.json())
    .then(json =>
      json.abi.actions.filter(act => act.name == action.name)
        .map((act) =>
          ({ account: action.account,
             name: act.name,
             contract: act.ricardian_contract}))[0]
    )
}

// const getContractsForActions = (actions) => {
//   const getActionRequests = []

//   actions.forEach(action => {
//     getActionRequests.push(getActionContract(action))
//   })

//   return Promise.all(getActionRequests)
// }

// const renderContracts = (actions, contracts) => {
//   let transactionContractHtml = ""
//   let renderTarget = document.getElementById("renderContractsHere")
//   actions.forEach(action => {
//     let contract = contracts.filter(contract => (
//         contract.name == action.name &&
//         contract.account == action.account
//       ))[0].contract

//     let contractTemplate = Handlebars.compile(contract)

//     const md = new window.markdownit()
//     renderTarget.innerHTML = md.render(contractTemplate(action.data))
//   })
// }

export {
  getChainInfo,
  getBlockInfo,
  getTransactionActions
}
