import * as mongoose from 'mongoose';
import * as validator from 'validator'
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash'
const Schema = mongoose.Schema;
export const UserSchema = new Schema({
 
    email: {
        type: String,
        requierd: true,
        trim:true,
        minlength:1,
        unique:true,
        validate:{
            validator: validator.isEmail,
            message:'{VALUE} is not a valid email'
        }
    },
    passwoard: {
        type: String,
        requierd:true,
        minlength:5            
    },
    tokens:[{
        access:{
            type: String,
            requierd:true
        },
        token:{
            type: String,
            requierd:true
        }
        }], 
    created_date: {
        type: Date,
        default: Date.now
    }
});
UserSchema.methods.toJSON = function (){
    let user =this;
    let userObject = user.toObject();
    return _.pick(userObject,'_id','email');

}
UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth'
    let token = jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
    user.tokens = user.tokens.concat({access,token});
    return user.save().then(()=>{
        return token;
    });
}