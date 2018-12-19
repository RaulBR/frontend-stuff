import * as SHA265 from 'crypto-js'

export class HashingService {
    private salt:string;
    public hash(string){
        return SHA265(string).toString()
    }
}