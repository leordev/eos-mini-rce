
import { parseRcFromData, readRcWithData } from './eosRcParser';

jest.mock('eosjs', () => {
  const {transaction, delegateBwAbi} = require('./mock.data')

  const eosjs = () => {
    const getTransaction = () => {
      return Promise.resolve(transaction)
    }

    const getAbi = () => {
      return Promise.resolve(delegateBwAbi)
    }

    return { getTransaction, getAbi }
  }
  return eosjs
})

it('reading ricardian contract with data', () => {

  const actionData = {"from":"anoxanoxanox","receiver":"anoxanoxanox","stake_net_quantity":"0.0000 EOS","stake_cpu_quantity":"0.9000 EOS","transfer":0}

  return readRcWithData('eosio', 'delegatebw', actionData).then(data => {
    expect(data.indexOf('anoxanoxanox')).toBeGreaterThan(0)
  })
});

it('parsing ricardian contracts from data', () => {

  const sellRamContract = '# Action - `{{ sellram }}`\n\n## Description\n\nThe `{{ sellram }}` action sells unused RAM for tokens.\n\nAs an authorized party I {{ signer }} wish to sell {{ bytes }} of unused RAM from account {{ account }}. \n'

  const sampleData = {
    signer: 'leo',
    bytes: 243,
    account: 'acctest'
  }

  const result = '# Action - `sellram`\n\n## Description\n\nThe `sellram` action sells unused RAM for tokens.\n\nAs an authorized party I leo wish to sell 243 of unused RAM from account acctest. \n'

  expect(parseRcFromData(sellRamContract, 'sellram', sampleData)).toEqual(result)
});
