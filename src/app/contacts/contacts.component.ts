import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {


  private contact_list = [
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
      badge: true
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
      badge: true
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
      favorite: true
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
    {
      name: "Steve Smith",
      companyName: "Steve Smith",
      time: "Steve Smith",
      description: "I am interested in renewing my season tickets. Please let me know if there is a discount.",
    },
  ];

  noContact = true;
  
  constructor() { }

  ngOnInit() {
  }

  onAddAsContact() {
    
  }

  onAddContact() {
    this.noContact = false;
  }
}
