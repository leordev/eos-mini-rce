
import Eos from 'eosjs'

const RPC_ENDPOINT = 'https://api.eosnewyork.io'
const BLOCKS_TO_LOAD = 10

const eos = Eos({httpEndpoint: RPC_ENDPOINT})

/**
 * Recursive function to generate last 10 blocks array
 */
const last10Blocks = (num, index) => {
  return index < BLOCKS_TO_LOAD ?
    [num].concat(last10Blocks(num - 1, index + 1)) :
    num
}

/**
 * Function to Load Chain and Blocks Info
 */
const readChainAndTop10Blocks = async () => {
  const chainData = await eos.getInfo({})

  const blocksToLoad = last10Blocks(chainData.head_block_num, 1)

  const blocksRequests = blocksToLoad.map(b => eos.getBlock(b))

  const blocks = await Promise.all(blocksRequests)

  return { chainData, blocks }
}

const getTransactionActions = (transactionId) => {
    return fetch(`${RPC_ENDPOINT}/history/get_transaction`, {
      body: JSON.stringify({id: transactionId}),
      method: 'POST'
    })
    .then(response => response.json())
    .then(json => json.trx.trx.actions)
}

const getActionContract = (action) => {
    return fetch(`${RPC_ENDPOINT}/chain/get_abi`, {
      body: JSON.stringify({account_name: action.account }),
      method: 'POST'
    })
    .then(response => response.json())
    .then(json =>
      json.abi.actions.filter(act => act.name === action.name)
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
  readChainAndTop10Blocks
}
