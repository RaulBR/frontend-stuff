import { Component, OnInit, Inject} from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snack.bar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackBarComponent implements OnInit {
  message
 
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  private snackBar: MatSnackBar) {}


  ngOnInit() {
    this.message= this.data

  }
  close(){
    this.snackBar.dismiss();
  }

}

