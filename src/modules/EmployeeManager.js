const remoteURL = "http://localhost:5002"

export const getEmployeeById = (employeeId) => {
  //be sure your employees have good data and related to a location
  return fetch(`${remoteURL}/employees/${employeeId}?_expand=location`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
  .then(result => result.json())
}

export const deleteEmployee = (id) => {
  return fetch(`${remoteURL}/employees/${id}`,{
    method:"DELETE"
  }).then(result => result.json())
}