import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private bTogglePassword : Boolean = false;
	private bLoginFailed : Boolean = false;
	constructor() { }

	ngOnInit() {
	}

	togglePassword()
	{
		this.bTogglePassword = !this.bTogglePassword
	}

	login()
	{
		this.bLoginFailed = true
	}
}
