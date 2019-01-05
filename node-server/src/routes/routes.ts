import { Request, Response } from "express";
import { EmployeeController } from "../controllers/employee.controller";
import { UserController } from "../controllers/user.controller";
import  { AuthService } from "../service/auth.service"
export class Routes {
    private contactservice = new EmployeeController();
    private userService = new UserController();
    private auth = new AuthService();
    // public contactservice: ContactService = new ContactService();
    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                });
            });
        // Contact 
        app.route('/contact')
            // GET endpoint 
            .get(this.auth.authenticate,this.contactservice.getEmployees)
            // POST endpoint
            .post(this.auth.authenticate,this.contactservice.addNewEmployee);
        // Contact detail
        app.route('/contact/:employeeId')
            // get specific contact
            .get(this.contactservice.getEmployeeByID)
            // add specific contact
            .put(this.contactservice.updateEmployee)
            // delete specific contact
            .delete(this.contactservice.deleteEmployee);

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