/**
 * Generic Util functions
 */
import moment from 'moment'

// Recursive function to generate last blocks num array
const lastBlocks = (num, total, index = 1) => {
  return index < total ?
    [num].concat(lastBlocks(num - 1, total, index + 1)) :
    num
}

// Converts and return a UTC timestamp to Local Timestamp
const utcToLocal = (timestamp) => {
  const utcDate = moment.utc(timestamp).toDate();
  return moment(utcDate).local()
}

export { lastBlocks, utcToLocal }
