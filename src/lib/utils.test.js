import moment from 'moment'
import {lastBlocks, utcToLocal} from './utils';


it('getting 3 last blocks', () => {
  expect(lastBlocks(1000,3)).toEqual([1000,999,998])
});

it('getting 10 last blocks', () => {
  expect(lastBlocks(1000,10).length).toBe(10)
});

it('getting 100 last blocks', () => {
  expect(lastBlocks(1000,100).length).toBe(100)
});

it('utc format', () => {
  expect(utcToLocal('2018-06-26 13:00:41').format('LLL')).toBe('June 26, 2018 9:00 AM')
});
