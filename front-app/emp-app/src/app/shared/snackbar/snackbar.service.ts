import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "./snackbar.component";
import { Subject } from "rxjs";

@Injectable()
export class SnackBarService {
    constructor(private snackBar: MatSnackBar) { }
    message = new Subject<string>()
    openSnackBar(message) {
        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 2000, data:message
        });
        
      }
      
}
