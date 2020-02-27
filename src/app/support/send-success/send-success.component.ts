import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-send-success',
  templateUrl: './send-success.component.html',
  styleUrls: ['./send-success.component.css']
})
export class SendSuccessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SendSuccessComponent>) { }

  ngOnInit() {
  }

}
