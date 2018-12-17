import {Request, Response} from "express";
import { ContactService } from "../service/contact-service";

export class Routes {    
    public contactservice: ContactService = new ContactService();
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
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
        .delete(this.contactservice.deleteContact)
    }
}