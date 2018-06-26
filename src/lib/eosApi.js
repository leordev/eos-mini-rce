
import Eos from 'eosjs'
import { lastBlocks } from './utils'

const RPC_ENDPOINT = 'https://eos.greymass.com'

const eos = Eos({httpEndpoint: RPC_ENDPOINT})

/**
 * Function to Load Chain and Blocks Info
 * @param {int} total quantity of blocks you want to read
 */
const readChainLastBlocks = async (total = 10) => {
  const chainData = await eos.getInfo({})

  const blocksToLoad = lastBlocks(chainData.head_block_num, total)

  const blocksRequests = blocksToLoad.map(b => eos.getBlock(b))

  const blocks = await Promise.all(blocksRequests)

  return { chainData, blocks }
}

/**
 * Read a Ricardian Contract content for a given account::action
 * @param {string} account smart contract account
 * @param {string} action desired action to query the contract
 */
const readRicardianContract = async (account, action) => {
  const abiData = await eos.getAbi(account)

  if (abiData && abiData.abi && abiData.abi.actions) {
    const abiAction = abiData.abi.actions.find(a => a.name === action)
    return abiAction.ricardian_contract
  }

  return "ABI or Ricard Contract Not Found"
}

/**
 * Read transaction actions for a given transaction hash id
 * @param {string} transactionId transaction hash id
 */
const getTransactionActions = async (transactionId) => {
  const transaction = await eos.getTransaction(transactionId)

  if (transaction && transaction.trx && transaction.trx.trx) {
    return transaction.trx.trx.actions.map((action, index) => ({
      ...action,
      internalId: `${transactionId}-${index}`
    }))
  }

  return []
}

export {
  readChainLastBlocks,
  readRicardianContract,
  getTransactionActions
}
