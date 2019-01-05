import { Request, Response } from "express";
import { EmployeeController } from "../controllers/employee.controller";
import { UserController } from "../controllers/user.controller";
import  { AuthService } from "../service/auth.service"
export class Routes {
    private employeeservice = new EmployeeController();
    private userService = new UserController();
    private auth = new AuthService();
    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                });
            });
        // Employee 
        app.route('/employee')
            // GET endpoint 
            .get(this.auth.authenticate,this.employeeservice.getEmployees)
            // POST endpoint
            .post(this.auth.authenticate,this.employeeservice.addNewEmployee);
        // Employee detail
        app.route('/employee/:employeeId')
            // get specific Employee
            .get(this.employeeservice.getEmployeeByID)
            // add specific Employee
            .put(this.employeeservice.updateEmployee)
            // delete specific Employee
            .delete(this.employeeservice.deleteEmployee);

        // USER
        app.route('/user')
            .post(this.userService.addUser)
            //.get(this.userService.getUsers);
            // USER PRIVATE ROUTE
            app.route('/user/login').post(this.userService.login);
            app.route('/user/me').get(this.auth.authenticate,this.userService.findByToken);
            app.route('/user/logout').delete(this.auth.authenticate,this.userService.logout);

    }
}