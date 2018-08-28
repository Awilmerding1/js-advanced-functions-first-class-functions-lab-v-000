// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.filter(function (driver) {return driver[0] && driver[1]})
}