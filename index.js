const createEmployeeRecord = function(array) {
  let employeeRecord = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employeeRecord
}

function createEmployeeRecords(array2) {
  let employeeRecords = []
  array2.forEach(employee => {
    let employeeRecord = createEmployeeRecord(employee) 
    employeeRecords.push(employeeRecord)
  })
  return employeeRecords
};

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  })
  return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    })
    return this
  }
  
  function hoursWorkedOnDate(date) {
    let hourIn = this.timeInEvents.find(timeIn => date === timeIn.date)
    let hourOut = this.timeOutEvents.find(timeOut => date === timeOut.date)
    let hoursWorked = ((hourOut.hour - hourIn.hour)/100)
    return hoursWorked
  };
  
  function wagesEarnedOnDate(date) {
  let payOwed = hoursWorkedOnDate(date) * this.payPerHour
  return payOwed
  };





/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
  })
  
  const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}











// const employeeRecordArray = [
// employeeRecord1 = {
//   firstName: 'Garfield',
//   familyName: 'Arbuckle',
//   title: 'Cat',
//   payPerHour: 3,
//   timeInEvents: [{
//     type: "TimeIn",
//     hour: 1100,
//     date: "2014-02-28"
//   },
//   {
//     type: "TimeIn",
//     hour: 1000,
//     date: "2014-03-28"
//   }],
//   timeOutEvents: [{
//     type: "TimeOut",
//     hour: 1400,
//     date: "2014-02-28"
//   },
//   {
//     type: "TimeOut",
//     hour: 1500,
//     date: "2014-03-28"
//   }]
// },
// employeeRecord2 = {
//   firstName: 'Odie',
//   familyName: 'Arbuckle',
//   title: 'Dog',
//   payPerHour: 5,
//   timeInEvents: [{
//     type: "TimeIn",
//     hour: 1100,
//     date: "2014-02-28"
//   },
//   {
//     type: "TimeIn",
//     hour: 1000,
//     date: "2014-03-28"
//   }],
//   timeOutEvents: [{
//     type: "TimeOut",
//     hour: 1400,
//     date: "2014-02-28"
//   },
//   {
//     type: "TimeOut",
//     hour: 1500,
//     date: "2014-03-28"
//   }]
// }
// ];


// function calculatePayroll(array) {
//   let allEmployeesWages = []
//   array.map(employee => {
//     let employeeWages = allWagesFor(employee)
//     allEmployeesWages.push(employeeWages)
//   })
//   let reducer = (previousValue, currentValue) => previousValue + currentValue;
//   let allWages = allEmployeesWages.reduce(reducer)
//   return allWages
// }
