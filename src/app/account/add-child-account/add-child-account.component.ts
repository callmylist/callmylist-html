import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-child-account",
  templateUrl: "./add-child-account.component.html",
  styleUrls: ["./add-child-account.component.css"],
})
export class AddChildAccountComponent implements OnInit {
  public bTogglePassword: Boolean = false;

  constructor() {}

  ngOnInit() {}

  togglePassword() {
    this.bTogglePassword = !this.bTogglePassword;
  }
}
