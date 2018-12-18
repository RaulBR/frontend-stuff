import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/employee-schema';
import { Request, Response } from 'express';
const User = mongoose.model('Users', ContactSchema);

export class UserService {

    public addUser (req: Request, res: Response) {               
        let newUser = new User(req.body);
        console.log(req.body); 
        newUser.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    public getContacts (req: Request, res: Response) {         
        User.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    public getContactByID(req: Request, res: Response) {
        User.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    public updateContact(req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    public deleteContact(req: Request, res: Response) {
        User.remove({ _id: req.params.contactId }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }
    public login(req: Request, res: Response){

    }

}