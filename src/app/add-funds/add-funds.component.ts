import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFundsComponent>) { }

  ngOnInit() {
  }

  onClose()
  {
    this.dialogRef.close();
  }

}
