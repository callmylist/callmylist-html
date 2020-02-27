import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-text-speech',
  templateUrl: './text-speech.component.html',
  styleUrls: ['./text-speech.component.css']
})
export class TextSpeechComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TextSpeechComponent>) { }

  ngOnInit() {
  	
  }

}
