import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.css']
})
export class UpdateCampaignComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateCampaignComponent>) { }

  ngOnInit() {
  }

  onUpdate()
  {  	
    this.dialogRef.close();
  }
}
