// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
  
    // Create a new object that is a copy of the employee object
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
//       expect(newEmployee['name']).to.equal(undefined);
//       expect(employee['name']).to.equal(undefined);
//     });
//   });
//   });
const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway'
};
module.exports = {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
  employee
};