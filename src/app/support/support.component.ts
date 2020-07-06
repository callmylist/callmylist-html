import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { SendSuccessComponent } from "./send-success/send-success.component";
@Component({
  selector: "app-support",
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.css"],
})
export class SupportComponent implements OnInit {
  public firstName: string = "";
  public lastName: string = "";
  public email: string = "";
  public phone: string = "";
  public message: string = "";

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onSendMessage() {
    const dialogRef = this.dialog.open(SendSuccessComponent, {
      width: "331px",
      position: { right: "24px", top: "76px" },
      panelClass: "send-success-container",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });

    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.phone = "";
    this.message = "";
  }
}
