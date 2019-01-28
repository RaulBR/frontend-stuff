import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "./snackbar.component";
import { Subject } from "rxjs";

@Injectable()
export class SnackBarService {
    constructor(private snackBar: MatSnackBar) { }
    message = new Subject<string>()

    openSnackBar(message,duration:number) {
      duration ? duration=duration:duration=2000;
      duration > 60000 ? duration = 20000:'';
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: duration, data:message
        });
        
      }
      close(){
        this.snackBar.dismiss();
      }
     openSnackBarStandard(message){
      this.openSnackBar(message,2000)
     } 
}
