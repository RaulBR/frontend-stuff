import { Component, OnInit, Inject} from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack.bar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackBarComponent implements OnInit {
  message
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}


  ngOnInit() {
    this.message= this.data

  }

}

