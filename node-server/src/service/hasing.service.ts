import * as SHA265 from 'crypto-js'
import * as jwt from 'jsonwebtoken';
export class HashingService {
    
    private salt:string;
    public hash(string){
        return SHA265(string).toString()
    }
    public token(data,secret){
        return jwt.sign(data,secret);
    }
    public verifyToken(token, secret){
        return jwt.verify(token, secret);
    }
}