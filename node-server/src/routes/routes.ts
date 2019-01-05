import { Request, Response } from "express";
import { ContactController } from "../controllers/contact.controller";
import { UserController } from "../controllers/user.controller";
import  { AuthService } from "../service/auth.service"
export class Routes {
    private contactservice = new ContactController();
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
            .get(this.contactservice.getContacts)
            // POST endpoint
            .post(this.contactservice.addNewContact);
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.contactservice.getContactByID)
            // add specific contact
            .put(this.contactservice.updateContact)
            // delete specific contact
            .delete(this.contactservice.deleteContact);

        // USER
        app.route('/user')
            .post(this.userService.addUser)
            //.get(this.userService.getUsers);
            // USER PRIVATE ROUTE
            app.route('/user/login').post(this.userService.login);
            app.route('/user/me').get(this.auth.authenticate,this.userService.findByToken);

    }
}