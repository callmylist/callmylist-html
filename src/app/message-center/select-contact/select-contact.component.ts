import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-select-contact',
  templateUrl: './select-contact.component.html',
  styleUrls: ['./select-contact.component.css']
})
export class SelectContactComponent implements OnInit {

  private contacts_list = [
  	{
  		name: "Pavel Korchakin",
  		company: "Company Name",
  		phone: "(398) 343-3948",
  		last_activity: "1/1/2019"
  	},
  	{
  		name: "Pavel Korchakin",
  		company: "Company Name",
  		phone: "(398) 343-3948",
  		last_activity: "1/1/2019"
  	},
  	{
  		name: "Pavel Korchakin",
  		company: "Company Name",
  		phone: "(398) 343-3948",
  		last_activity: "1/1/2019"
  	},
  ];
  constructor(public dialogRef: MatDialogRef<SelectContactComponent>) { }

  ngOnInit() {
  }

  onAddContact()
  {
    this.dialogRef.close();
  }

}
