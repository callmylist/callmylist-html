import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-loading-finished',
  templateUrl: './loading-finished.component.html',
  styleUrls: ['./loading-finished.component.css']
})
export class LoadingFinishedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoadingFinishedComponent>) { }

  ngOnInit() {
  }

}
