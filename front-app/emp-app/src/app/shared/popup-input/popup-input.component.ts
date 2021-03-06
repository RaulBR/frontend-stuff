import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-popup-input',
  templateUrl: './popup-input.component.html',
  styleUrls: ['./popup-input.component.scss'],
})
export class PopupInputComponent implements OnInit,OnDestroy {
  paragraph;
  title = 'My Popup';
  inputs = [{label:'label',placeholder:'PlaceHolder'}]
  constructor(
    public dialogRef: MatDialogRef<PopupInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(data): void {
    this.dialogRef.close(data);
  }
  ngOnInit() {
    this.paragraph = this.data.paragraph;
    this.title= this.data.title;
    this.inputs = this.data.inputs
  }

  ngOnDestroy(): void {
   
  }
}

export interface DialogData {
  title: string;
  paragraph :string
  inputs:{label:string,placeholder:string, value:string}[];

}
export interface PopupModel{
  title:string;
}