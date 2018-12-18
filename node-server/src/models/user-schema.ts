import * as mongoose from 'mongoose';
import * as validator from 'validator'
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
        minlength:6            
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