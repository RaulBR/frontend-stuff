import { MatDialog } from "../../../../node_modules/@angular/material";
import { PopupInputComponent, DialogData } from "./popup-input.component";
import { Injectable } from "../../../../node_modules/@angular/core";
import { getViewData } from "@angular/core/src/render3/instructions";
@Injectable()
export class PopupInputOpen {
    constructor(public dialog: MatDialog) {}
    private popup;
    openDialog(input:DialogData): void {
      this.popup  = this.dialog.open(PopupInputComponent, {
        data: input,
        maxWidth: 'auto',
        minWidth:'300px',
        panelClass: 'custom-dialog-container' 
      });
      
      this.popup.afterClosed().subscribe(result => {
        // console.log(result);
      
      });
    
    }

    getDialogData(){
      return  this.popup.afterClosed();
     }

  }

