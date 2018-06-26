
import Eos from 'eosjs'
import { readChainLastBlocks, readRicardianContract, getTransactionActions } from './eosApi';

jest.mock('eosjs', () => {
  const { chainInfo, blockInfo, transaction, delegateBwAbi } = require('./mock.data')

  const eosjs = () => {
    const getInfo = () => {
      return Promise.resolve(chainInfo)
    }

    const getBlock = () => {
      return Promise.resolve(blockInfo)
    }

    const getTransaction = () => {
      return Promise.resolve(transaction)
    }

    const getAbi = () => {
      return Promise.resolve(delegateBwAbi)
    }

    return { getInfo, getBlock, getTransaction, getAbi }
  }
  return eosjs
})

it('reading chain last 10 blocks', () => {
  return readChainLastBlocks(10).then(data => {
    expect(data.blocks.length).toEqual(10)
    expect(data.chainData.head_block_num).toEqual(2775501)
    expect(data.blocks[0].timestamp).toEqual('2018-06-26T17:43:53.500')
  })
});

it('reading ricardian contract', () => {
  return readRicardianContract('eosio', 'delegatebw').then(data => {
    expect(data.length).toBeGreaterThan(100)
  })
});

it('reading transaction actions', () => {
  return getTransactionActions('trxid')
    .then(data => {
      expect(data.length).toEqual(1)
      expect(data[0].account).toEqual('eosio')
    })
});
