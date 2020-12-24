import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-campaigns',
  templateUrl: './text-campaigns.component.html',
  styleUrls: ['./text-campaigns.component.css']
})
export class TextCampaignsComponent implements OnInit {
  
  public textCampaigns = [
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: true,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: true,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: true,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: false,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: true,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: true,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: true,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: false,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: true,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: true,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: true,
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      completed: false,
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
