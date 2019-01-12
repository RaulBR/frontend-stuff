"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact_service_1 = require("../service/contact.service");
const user_service_1 = require("../service/user.service");
const auth_service_1 = require("../service/auth.service");
class Routes {
    constructor() {
        this.contactservice = new contact_service_1.ContactService();
        this.userService = new user_service_1.UserService();
        this.auth = new auth_service_1.AuthService();
    }
    // public contactservice: ContactService = new ContactService();
    routes(app) {
        app.route('/')
            .get((req, res) => {
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
            .get(this.userService.getUser);
        // USER PRIVATE ROUTE
        app.route('/user/me').get(this.auth.authenticate, this.userService.findByToken);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map