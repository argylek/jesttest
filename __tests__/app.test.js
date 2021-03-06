import {
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  findItem,
  evensOnlyAndDoubleArray,
  sortArray,
  doubleLikes,
  moreThan100Likes,
  justArtistMoreThan100Likes,
  numberOfLikes,
  findObjByName,
  sortArtistByName,
  allArtistNames
} from "../app"

const array = [1, 2, 3, 4]
const evensArray = [2, 4, 6, 8]
const oddsArray = [1, 3, 5, 7, 9]
const zerosArray = [0, 2, 5, 6, 7, 0, 10, 15, 4, 17, 12, 103]
const negatives = [-1, -2, -3, -4, 2, 4, 6]

var artists = [
  {name: 'a', likes:100},
  {name: 'c', likes:99},
  {name: 'c', likes:101}
]
var moreArtists = [
  {name: 'a', likes:100},
  {name: 'c', likes:99},
  {name: 'c', likes:101},
  {name: 'd', likes:201},
  {name: 'e', likes:93}
]

test('baseline test', () => {})

describe('originalArray tests', () => {
  test('expected - array stays the same', () => {
    expect(originalArray(array)).toEqual([1, 2, 3, 4])
  })
  test('expected - evensArray stays the same', () => {
    expect(originalArray(evensArray)).toEqual([2, 4, 6, 8])
  })
  test('expected - evensArray stays the same', () => {
    expect(originalArray(oddsArray)).toEqual([1, 3, 5, 7, 9])
  })
})


describe('doubleArray tests', () => {

  test('expect array to double', () => {
    expect(doubleArray(array)).toEqual([2, 4, 6, 8])
  })
  test('expect evensArray to double', () => {
    expect(doubleArray(evensArray)).toEqual([4, 8, 12, 16])
  })
  test('expect oddsArray to double', () => {
    expect(doubleArray(oddsArray)).toEqual([2, 6, 10, 14, 18])
  })

})

describe('evensOnlyArray tests', () => {

  test('expect even numbers from mixed array', () => {
    expect(evensOnlyArray(array)).toEqual([2, 4])
  })
  test('expect all even array to return everything', () => {
    expect(evensOnlyArray(evensArray)).toEqual([2, 4, 6, 8])
  })
  test('expect all odds array to return empty array', () => {
    expect(evensOnlyArray(oddsArray)).toEqual([])
  })
})

describe('arraySum tests', ()=>{
test('take an array and sum everything in it', () => {
  expect(arraySum(array)).toEqual(10)
})
test('take an array of only even numbers', () => {
  expect(arraySum(evensArray)).toEqual(20)
})

})

describe('greaterThanZero Tests', ()=>{
  test('expects all numbers in array are greater than zero', () => {
    expect(allNumbersGreaterThanZero(array)).toEqual(true)
  })
  test('expects array with 0s in it to return false', ()=> {
    expect(allNumbersGreaterThanZero(zerosArray)).toEqual(false)
  })
})

describe('someItemsAreOdd tests', ()=> {
  test('expect numbers in evensArray to be all even', ()=>{
    expect(someNumbersAreOdd(evensArray)).toEqual(false)
  })
  test('expect mixed array to have some odds', ()=> {
    expect(someNumbersAreOdd(zerosArray)).toEqual(true)
  })
  test('expect an all odd array to return true', ()=>{
    expect(someNumbersAreOdd(oddsArray)).toEqual(true)
  })
})

describe('findItem Tests', ()=>{
  test('expect to find the number 1 in an array', ()=>{
    expect(findItem(array, 2)).toEqual(2)
  })
  test('expect not to find the number 15 in a zerosArray', ()=>{
    expect(findItem(zerosArray, 15)).toEqual(15)
  })
  test('expect search to fail for something that is not available', ()=>{
    expect(findItem(array, 10)).toEqual('not found')
  })
})

describe('evensOnlyAndDoubleArray', ()=>{
  test('expect [1,2,3,4] to return [4,8]', ()=>{
    expect(evensOnlyAndDoubleArray(array)).toEqual([4,8])
  })
  test('expect oddsArray to return empty array', ()=>{
    expect(evensOnlyAndDoubleArray(oddsArray)).toEqual([])
  })
  test('expect zerosArray to remove 0s and double remaining', ()=>{
    expect(evensOnlyAndDoubleArray(zerosArray)).toEqual([4,12,20,8,24])
  })
  test('expect negative evens to double appropriately', ()=>{
    expect(evensOnlyAndDoubleArray(negatives)).toEqual([-4,-8,4,8,12])
  })
})

describe('sortArray tests(decending)', ()=>{
  test('expect simple array to reverse', ()=>{
    expect(sortArray(array)).toEqual([4,3,2,1])
  })
  test('expect mixed array to decend highest to lowest', ()=>{
    expect(sortArray(zerosArray)).toEqual([103, 17, 15, 12, 10, 7, 6, 5, 4, 2, 0, 0])
  })
  test('expect array with negatives to sort with negatives lowest', ()=>{
    expect(sortArray(negatives)).toEqual([6, 4, 2, -1, -2, -3, -4])
  })
})

describe('doubleLikes tests', ()=> {
  test('expect all the likes to be double what they were before', ()=> {
    expect(doubleLikes(artists)).toEqual([{"likes": 200, "name": "a"}, {"likes": 198, "name": "c"}, {"likes": 202, "name": "c"}])
  })
})

describe('moreThan100Likes tests', ()=>{
  test('expect there to only be one artist with over 100 likes', ()=>{
    expect(moreThan100Likes(artists)).toEqual([{"likes": 101, "name": "c"}])
  })
})

describe('justArtistMoreThan100Likes tests', ()=>{
  test('expect only the name of c', ()=>{
    expect(justArtistMoreThan100Likes(artists)).toEqual('c')
  })
  test('expect return of two names, c and d', ()=>{
    expect(justArtistMoreThan100Likes(moreArtists)).toEqual('c','d')
  })
})

describe('numberOfLikes tests', ()=>{
  test('expect all the likes to equal 300', ()=>{
    expect(numberOfLikes(artists)).toEqual(300)
  }),
  test('expect all the likes to equal 300', ()=>{
    expect(numberOfLikes(moreArtists)).toEqual(594)
  })
})

describe('findObjByName tests', ()=> {
  test('expect search for a to return propper object', ()=>{
    expect(findObjByName(artists, 'a')).toEqual({"likes": 100, "name": "a"})
  })
  test('expect search to return not found', ()=>{
    expect(findObjByName(artists, 'e')).toEqual('not found')
  })
})

describe('sortArtistByName tests', ()=>{
  test('expect artists to be sorted by first name', ()=>{
    expect(sortArtistByName(artists)).toEqual([{"likes": 99, "name": "c"}, {"likes": 100, "name": "a"}, {"likes": 101, "name": "c"}])
  })
})

describe('allArtistNames tests', ()=>{
  test('expect all names in an array', ()=>{
    expect(allArtistNames(artists)).toEqual(["c", "a", "c"])
  })
  test('expect more names', ()=>{
    expect(allArtistNames(moreArtists)).toEqual(["a", "c", "c", "d", "e"])
  })
})

