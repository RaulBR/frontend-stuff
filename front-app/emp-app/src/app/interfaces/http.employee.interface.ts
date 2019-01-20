export interface HttpEmployeeInterface<Employee>{
    getEmployees()    
     saveEmployee<Employee>(data: Employee) 
    deleteEmployee(id)
    editEmployee(data: Employee)
    getSpecificEmployee<Employee>(id)

}