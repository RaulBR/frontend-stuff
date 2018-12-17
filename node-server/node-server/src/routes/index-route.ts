import * as express from "express";

export class IndexRouter{
 router = express.Router();
constructor(){
  
    /* GET home page. */
    this.router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });
    
    
    module.exports = this.router;
}

}

