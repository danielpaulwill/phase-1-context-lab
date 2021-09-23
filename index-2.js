function createEmployeeRecord(array1) {
  let employeeRecord = {
    firstName: array1[0],
    familyName: array1[1],
    title: array1[2],
    payPerHour: array1[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employeeRecord
};

function createEmployeeRecords(array2) {
  let employeeRecords = []
  array2.forEach(employee => {
    let employeeRecord = createEmployeeRecord(employee) 
    employeeRecords.push(employeeRecord)
  })
  return employeeRecords
};

function createTimeInEvent(employeeRecord, dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  })
  return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
  })
  return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date) {
  let hourIn = employeeRecord.timeInEvents.find(timeIn => date === timeIn.date)
  let hourOut = employeeRecord.timeOutEvents.find(timeOut => date === timeOut.date)
  let hoursWorked = ((hourOut.hour - hourIn.hour)/100)
  return hoursWorked
  };

function wagesEarnedOnDate(employeeRecord, date) {
let payOwed = hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
return payOwed
};






const employeeRecordArray = [
employeeRecord1 = {
  firstName: 'Garfield',
  familyName: 'Arbuckle',
  title: 'Cat',
  payPerHour: 3,
  timeInEvents: [{
    type: "TimeIn",
    hour: 1100,
    date: "2014-02-28"
  },
  {
    type: "TimeIn",
    hour: 1000,
    date: "2014-03-28"
  }],
  timeOutEvents: [{
    type: "TimeOut",
    hour: 1400,
    date: "2014-02-28"
  },
  {
    type: "TimeOut",
    hour: 1500,
    date: "2014-03-28"
  }]
},
employeeRecord2 = {
  firstName: 'Odie',
  familyName: 'Arbuckle',
  title: 'Dog',
  payPerHour: 5,
  timeInEvents: [{
    type: "TimeIn",
    hour: 1100,
    date: "2014-02-28"
  },
  {
    type: "TimeIn",
    hour: 1000,
    date: "2014-03-28"
  }],
  timeOutEvents: [{
    type: "TimeOut",
    hour: 1400,
    date: "2014-02-28"
  },
  {
    type: "TimeOut",
    hour: 1500,
    date: "2014-03-28"
  }]
}
];

function allWagesFor(employeeRecord) {
  let wagesArray = []
  let employeeEvents = employeeRecord.timeInEvents
  employeeEvents.map(timeInDays => {
    let wages = wagesEarnedOnDate(employeeRecord, timeInDays.date)
    wagesArray.push(wages)
  })
  let reducer = (previousValue, currentValue) => previousValue + currentValue;
  let allWages = wagesArray.reduce(reducer)
  return allWages
};

function calculatePayroll(array) {
  let allEmployeesWages = []
  array.map(employee => {
    let employeeWages = allWagesFor(employee)
    allEmployeesWages.push(employeeWages)
  })
  let reducer = (previousValue, currentValue) => previousValue + currentValue;
  let allWages = allEmployeesWages.reduce(reducer)
  return allWages
}
