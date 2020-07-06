import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { UploadAudioComponent } from "./upload-audio/upload-audio.component";
import { TextSpeechComponent } from "./text-speech/text-speech.component";

@Component({
  selector: "app-sounds",
  templateUrl: "./sounds.component.html",
  styleUrls: ["./sounds.component.css"],
})
export class SoundsComponent implements OnInit {
  public isUploading: boolean = false;

  public audios = [];
  public sounds = [
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
    {
      id: "1556827691380",
      name: "Summer 2019",
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onSpeech() {
    this.audios = this.sounds;
  }

  onSpeechToText() {
    this.isUploading = true;

    const dialogRef = this.dialog.open(TextSpeechComponent, {
      width: "966px",
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }

  onUploadAudio() {
    this.isUploading = true;

    const dialogRef = this.dialog.open(UploadAudioComponent, {
      width: "378px",
      height: "162px",
      position: { bottom: "24px", right: "24px" },
      panelClass: "upload-audio",
      backdropClass: "upload-audio-background",
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }
}
