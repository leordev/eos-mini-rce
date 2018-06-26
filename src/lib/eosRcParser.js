/**
 * Mini Lib to Parse Ricardian Contracts
 */
import Handlebars from 'handlebars'
import { readRicardianContract } from './eosApi'

/**
 * Parses the Action Data into Ricardian Contract via Handlebars
 * @param {string} ricardianContract Ricardian Contract Markdown
 * @param {object} actionData Action Data
 */
const parseRcFromData = (ricardianContract, actionName, actionData = {}) => {
  // adds the name of the action into handlebars data
  const dataWithMeta = {
    ...actionData,
    [actionName]: actionName
  }

  // handlebars fix for wrong if clauses (happens on delegatebw)
  // https://github.com/EOSIO/eos/issues/4341
  const finalRicardianContract = ricardianContract
    .replace(/\{\{if /g, '{{#if ')
    .replace(/\{\{ if /g, '{{ #if ')

  // handlebar parsing
  const contractTemplate = Handlebars.compile(finalRicardianContract)
  const contractParsed = contractTemplate(dataWithMeta)
  return contractParsed
}

/**
 * Reads Abi to get Ricardian Contract and Parse the Given Data into it
 * @param {string} account
 * @param {string} actionName
 * @param {object} actionData
 */
const readRcWithData = async (account, actionName, actionData) => {
  const ricardianContract = await readRicardianContract(account, actionName)

  if (ricardianContract)
    return parseRcFromData(ricardianContract, actionName, actionData)
  else
    return 'Empty Ricardian Contract'
}

export { parseRcFromData, readRcWithData }
