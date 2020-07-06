import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AccountUpdateComponent } from "./account-update/account-update.component";
import { AddChildAccountComponent } from "./add-child-account/add-child-account.component";
import { AddFundsComponent } from "../add-funds/add-funds.component";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent implements OnInit {
  public fund_image = "";
  public accounts_data = [
    {
      name: "Pavel Korchakin",
      date: "1/1/2018",
      email: "me@me.com",
      funds: 5254.5,
    },
    {
      name: "Pavel Korchakin",
      date: "1/1/2018",
      email: "me@me.com",
      funds: 325.25,
    },
  ];

  public accounts = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.accounts = this.accounts_data;
  }

  onUploadFundImage() {
    this.fund_image = "assets/butler_logo.png";
  }

  onEditAccount() {
    const dialogRef = this.dialog.open(AccountUpdateComponent, {
      width: "355px",
      position: { right: "24px", top: "76px" },
      panelClass: "send-success-container",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }

  onAddChildAccount() {
    const dialogRef = this.dialog.open(AddChildAccountComponent, {
      width: "800px",
      panelClass: "black-panel",
      backdropClass: "black-background",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }

  onAddFunds() {
    const dialogRef = this.dialog.open(AddFundsComponent, {
      width: "966px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }
}
