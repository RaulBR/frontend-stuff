import * as bcrypt from 'bcryptjs'
export class HashingService {
    public hash(passwoard){
        bcrypt.genSalt(10, (err,salt)=>{
              bcrypt.hash(passwoard,salt,(err,hash)=>{
                return hash;
            })
        });
       
    }
    public checkPasswoard(passwoard,hashPass){
        return bcrypt.compare(passwoard,hashPass,(err,res)=>{
            return res;
        });
    }
}