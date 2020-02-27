import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-loading-data',
  templateUrl: './loading-data.component.html',
  styleUrls: ['./loading-data.component.css']
})
export class LoadingDataComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoadingDataComponent>) { }

  ngOnInit() {
  }

}
