import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  public mySounds = [
    { name: "North Central", phone: "(398) 343-3948"},
    { name: "North Central", phone: "(398) 343-3948"},
    { name: "North Central", phone: "(398) 343-3948"},
    { name: "North Central", phone: "(398) 343-3948"}
  ];

  bEditing = false;

  constructor(public dialogRef: MatDialogRef<NewMessageComponent>) { }

  ngOnInit() {
  }

  onKeywordChange()
  {
    this.bEditing = true;
  }

  selectContact()
  {
    this.bEditing = false;
  }

}
