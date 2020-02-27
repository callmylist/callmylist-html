import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-test-call',
  templateUrl: './test-call.component.html',
  styleUrls: ['./test-call.component.css']
})
export class TestCallComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TestCallComponent>) { }

  ngOnInit() {
  }
  
  onClose()
  {
    this.dialogRef.close();
  }
}
