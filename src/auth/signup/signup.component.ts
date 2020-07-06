import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  public bTogglePassword: Boolean = false;
  constructor(public router: Router) {}

  ngOnInit() {}

  togglePassword() {
    this.bTogglePassword = !this.bTogglePassword;
  }

  signup() {
    this.router.navigateByUrl("auth/login");
  }
}
