import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"],
})
export class ContactListComponent implements OnInit {
  public contact_list = [];
  public contact_list_data = [
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
    {
      name: "Copy_o_F19robo1_xls",
      id: "5cc76dae90e8803aa207f5f9",
      total: "2031",
    },
  ];
  constructor() {}

  ngOnInit() {}

  onUploadNewList() {
    this.contact_list = this.contact_list_data;
  }
}
