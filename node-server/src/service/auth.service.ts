import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user-schema';
const User = mongoose.model('Users', UserSchema);

export class AuthService {
    public  authenticate(req,res,next) {
        let token = req.header('x-auth');
        User.findByToken(token).then((user)=>{
            if(!user){
                return Promise.reject('Must be Loged in');
            }
            req.user = user;
            req.token = token;
            next();
        }).catch((e)=>{
            res.status(401).send(e);
        });
    }
}