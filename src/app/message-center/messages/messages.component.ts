import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = [
  {
  	name: "Steve Smith",
  	companyName: "Company Name",
  	date: "10/5/2019",
  	time: "9:36AM",
  	message: "I am interested in renewing my season tickets. Please let me know if there is a discount."
  },
  {
  	name: "Wang Dan",
  	companyName: "Company Name",
  	date: "10/5/2019",
  	time: "9:36AM",
  	message: "I am interested in renewing my season tickets. Please let me know if there is a discount."
  },
  {
  	name: "Steve Smith",
  	companyName: "Company Name",
  	date: "10/5/2019",
  	time: "9:36AM",
  	message: "I am interested in renewing my season tickets. Please let me know if there is a discount."
  },
  {
  	name: "Wang Dan",
  	companyName: "Company Name",
  	date: "10/5/2019",
  	time: "9:36AM",
  	message: "I am interested in renewing my season tickets. Please let me know if there is a discount."
  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
