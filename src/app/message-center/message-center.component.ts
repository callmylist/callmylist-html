import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { LoadingDataComponent } from "./loading-data/loading-data.component";
import { LoadingFinishedComponent } from "./loading-finished/loading-finished.component";
import { NewMessageComponent } from "./new-message/new-message.component";
import { MessagesComponent } from "./messages/messages.component";
import { SelectContactComponent } from "./select-contact/select-contact.component";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { DeleteConfirmComponent } from "../delete-confirm/delete-confirm.component";

@Component({
  selector: "app-message-center",
  templateUrl: "./message-center.component.html",
  styleUrls: ["./message-center.component.css"],
})
export class MessageCenterComponent implements OnInit {
  public bStarted: boolean = false;
  public nStep: number = 0;
  public areaCode: string = "";
  public areaCodeTemp: string = "";
  public responderMessage: string = "";
  public contact_filter: number = 0;

  public contact_list = [
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
      badge: true,
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
      badge: true,
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
      favorite: true,
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description:
        "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onGetStarted() {
    this.bStarted = true;
  }

  onAreaCodeChange() {}

  onGetPhoneNumber() {
    if (this.areaCodeTemp.length == 0) {
      return;
    }

    this.areaCode = this.areaCodeTemp;
  }

  onGetStartedPhone() {
    this.nStep = 1;
  }

  onResponderMessageChange() {}

  onFinishAutoResponder() {
    this.nStep = 2;
  }

  onFinishCRMData() {
    this.nStep = 3;
  }

  onSelectFile() {
    const dialogRef = this.dialog.open(LoadingDataComponent, {
      width: "350px",
      position: { right: "24px", top: "76px" },
      panelClass: "loading-data-panel",
      backdropClass: "loading-data-background",
    });

    dialogRef.afterClosed().subscribe((result) => {
      const dialogRef = this.dialog.open(LoadingFinishedComponent, {
        width: "391px",
        position: { right: "24px", top: "76px" },
        panelClass: "loading-data-panel",
        backdropClass: "loading-data-background",
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log("The dialog was closed");
        // this.animal = result;
      });
    });
  }

  onContactFilter(filter: number) {
    this.contact_filter = filter;
  }

  onNewMessage() {
    const dialogRef = this.dialog.open(NewMessageComponent, {
      width: "488px",
      height: window.innerHeight + "px",
      position: { top: "0", right: "0px", bottom: "0px" },
      panelClass: "add-contact-panel",
      backdropClass: "new-message-background",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }

  onSelectContact() {
    const dialogRef = this.dialog.open(SelectContactComponent, {
      width: "833px",
      position: { top: "110px" },
      panelClass: "select-contact-panel",
      backdropClass: "new-message-background",
    });

    dialogRef.afterClosed().subscribe((result) => {
      const dialogRef = this.dialog.open(AddContactComponent, {
        width: "421px",
        height: window.innerHeight + "px",
        position: { top: "12px", right: "0px", bottom: "0px" },
        panelClass: "add-contact-panel",
        backdropClass: "new-message-background",
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log("The dialog was closed");
        // this.animal = result;
      });
    });
  }

  onMessages() {
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: "488px",
      height: window.innerHeight + "px",
      position: { top: "0", right: "0px", bottom: "0px" },
      panelClass: "add-contact-panel",
      backdropClass: "new-message-background",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }

  onDelete() {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: "900px",
      panelClass: "black-panel",
      backdropClass: "black-background",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }
}
