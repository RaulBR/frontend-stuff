import { MatDialog } from "../../../../node_modules/@angular/material";
import { PopupInputComponent, DialogData } from "./popup-input.component";
import { Injectable } from "../../../../node_modules/@angular/core";
@Injectable()
export class PopupInputOpen {
    constructor(public dialog: MatDialog) {}
    
    openDialog(input:DialogData): void {
      const dialogRef = this.dialog.open(PopupInputComponent, {
        data: input,
        maxWidth: 'auto',
        minWidth:'300px',
        panelClass: 'custom-dialog-container' 
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      
      });
    
    }

  }

