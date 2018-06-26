/**
 * Generic Util functions
 */
import moment from 'moment'

/**
 * It lists the block numbers starting in a descending order
 * @param {int} num starting block num
 * @param {int} total quantity of blocks you want to get
 * @param {int} index current index (internal usage)
 */
const lastBlocks = (num, total, index = 1) => {
  return index < total ?
    [num].concat(lastBlocks(num - 1, total, index + 1)) :
    num
}

/**
 * Converts and return a UTC timestamp to Local Timestamp
 * @param {string} timestamp UTC Timestamp ISO Format
 */
const utcToLocal = (timestamp) => {
  const utcDate = moment.utc(timestamp).toDate();
  return moment(utcDate).local()
}

export { lastBlocks, utcToLocal }
