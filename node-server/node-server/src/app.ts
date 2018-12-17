import * as express from "express";
import * as bodyParser from "body-parser";
// import * as IndexRouter from "./routes/index";
export class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();        
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
    //   this.app.use('/', indexRouter);
        //this.app.use('/users', usersRouter);
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;