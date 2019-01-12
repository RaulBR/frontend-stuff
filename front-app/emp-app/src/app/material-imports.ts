import{ MatButtonModule, 
         MatCheckboxModule,
         MatToolbarModule,
         MatSidenavModule,
         MatCardModule,
         MatSelectModule,
         MatInputModule,
         MatDialogModule,
         MatRippleModule,
         MatTableModule} from '@angular/material';
         import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[ MatButtonModule,
         MatCheckboxModule,
         MatToolbarModule,
         MatSidenavModule,
         MatCardModule,
         MatSelectModule,
         MatCardModule,
         MatInputModule,
         MatIconModule,
         MatDialogModule,
         MatRippleModule,
         MatTableModule],

    exports:[ MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatRippleModule,
        MatTableModule],
})
export class MaterialModule{}