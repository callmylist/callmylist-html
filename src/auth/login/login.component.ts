import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public bTogglePassword: Boolean = false;
  public bLoginFailed: Boolean = false;
  constructor() {}

  ngOnInit() {}

  togglePassword() {
    this.bTogglePassword = !this.bTogglePassword;
  }

  login() {
    this.bLoginFailed = true;
  }
}
