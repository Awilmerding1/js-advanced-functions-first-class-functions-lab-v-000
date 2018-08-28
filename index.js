// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  let firstAndSecond = []
  firstAndSecond[0] = drivers[0]
  firstAndSecond[1] = drivers[1]
  return firstAndSecond
}

const returnLastTwoDrivers = function (drivers) {
  let lastTwo = []
  lastTwo[0] = drivers[-2]
  lastTwo[1] = drivers[-1]
  return lastTwo
}