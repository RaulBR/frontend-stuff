import * as mongoose from 'mongoose';
import * as _ from 'lodash'
import { UserSchema } from '../models/user-schema';
import { Request, Response } from 'express';
const User = mongoose.model('Users', UserSchema);

export class UserService {

    public addUser (req: Request, res: Response) {  
        let body = _.pick(req.body,['email','passwoard']);             
        let user = new User(body);
        //modelmethod
        //User.findByToken
        //instance method
       // user.generateAuthToken
       user.save().then(()=>{
           return user.generateAuthToken();
       }).then((token)=>{
           res.header('x-auth',token).send(user);

       }).catch((e)=>{
           res.status(400).sendStatus(e)
       })
        // user.save((err, user) => {
        //     return user.generateAuthToken();
        //     if (err) {
        //         res.status(400).send(err);
        //     }
        //     res.json(user);
        // });
    }
    public getUser (req: Request, res: Response) {         
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    public getUserByID(req: Request, res: Response) {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    public deleteUser(req: Request, res: Response) {
        User.remove({ _id: req.params.contactId }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!' });
        });
    }
    public login(req: Request, res: Response){

    }

}