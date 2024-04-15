/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass and it will be available
 for you to use if you need it!
 */

 const allWagesFor = function (employee) {
    const eligibleDates = this.timeInEvents.map((e) => e.date);
  
    const payable = eligibleDates.reduce((memo, d) => {
      return memo + wagesEarnedOnDate.call(this, d);
    }, 0);
  
    return payable;
  };
  
  const createEmployeeRecord = (employeeData) => ({
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: [],
  });
  
  const createEmployeeRecords = (employeesData) =>
    employeesData.map((employeeData) => createEmployeeRecord(employeeData));
  
  const createTimeInEvent = (employee, dateStamp) => {
    const [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date,
    });
    return employee;
  };
  
  const createTimeOutEvent = (employee, dateStamp) => {
    const [date, hour] = dateStamp.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date,
    });
    return employee;
  };
  
  const hoursWorkedOnDate = (employee, date) => {
    const timeInEvent = employee.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find((event) => event.date === date);
  
    const startTime = timeInEvent.hour;
    const endTime = timeOutEvent.hour;
  
    return (endTime - startTime) / 100;
  };
  
  const wagesEarnedOnDate = (employee, date) => {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    const payRate = employee.payPerHour;
  
    return hoursWorked * payRate;
  };
  
  const allWagesFor = (employee) => {
    const datesWorked = employee.timeInEvents.map((event) => event.date);
    const totalWages = datesWorked.reduce(
      (total, date) => total + wagesEarnedOnDate(employee, date),
      0
    );
    return totalWages;
  };
  
  const findEmployeeByFirstName = (srcArray, firstName) =>
    srcArray.find((employee) => employee.firstName === firstName);
  
  const calculatePayroll = (employees) =>
    employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  