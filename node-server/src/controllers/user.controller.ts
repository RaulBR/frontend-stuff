import * as mongoose from 'mongoose';
import * as _ from 'lodash'
import { UserSchema } from '../models/user-schema';
import { Request, Response } from 'express';
const User = mongoose.model('Users', UserSchema);

export class UserController {

    public addUser(req: Request, res: Response) {
        let body = _.pick(req.body, ['email', 'passwoard']);
        let user = new User(body);
        user.save().then(() => {
            return user.generateAuthToken();
        }).then((token) => {
            res.header('x-auth', token).send(user);

        }).catch((e) => {
            res.status(400).sendStatus(e)
        })
    }
    public getUsers(req: Request, res: Response) {
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
    public login(req: Request, res: Response) {
        let body = _.pick(req.body, ['email', 'passwoard']);
        User.findByCredentials(body.email, body.passwoard)
            .then(user => {
                return user.generateAuthToken().then((token) => {
                    res.header('x-auth', token).send(user);
                })
            }).catch((e) => {
                res.status(400).send();
            })

    }
    public findByToken(req, res: Response) {
        res.send(req.user);
    }

}