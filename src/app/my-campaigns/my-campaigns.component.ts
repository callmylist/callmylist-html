import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { UpdateCampaignComponent } from "./update-campaign/update-campaign.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-my-campaigns",
  templateUrl: "./my-campaigns.component.html",
  styleUrls: ["./my-campaigns.component.css"],
})
export class MyCampaignsComponent implements OnInit {
  readonly COMPAIGN_TYPE_TEXT = 1;
  readonly COMPAIGN_TYPE_CALL = 2;

  readonly SCHEDULING_NOW = 1;
  readonly SCHEDULING_FUTURE = 2;

  public createStage: boolean = false;

  public campaignType: number = 2;
  public nStep: number = 0;
  public text_campaign_process = [
    "Campaign Type",
    "Campaign Name",
    "Select Area Code",
    "Compose Message",
    "Contact List",
    "Scheduling",
  ];
  public sound_campaign_process = [
    "Campaign Type",
    "Campaign Name",
    "Caller ID",
    "Audio Files",
    "Contact List",
    "Campaign Settings",
    "Scheduling",
  ];
  public transfer: boolean = false;
  public useDefaultAudio: boolean = false;
  public doNotCall: boolean = false;
  public uploadContactList: boolean = false;
  public settingsCount: number = 0;
  public counterForm: FormGroup;
  public schedulingType: number = 0;
  public bCompleted: boolean = false;
  public type: number = 0;

  public callCampaings = [];

  public callCampaigns_data = [
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "unchecked",
    },
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "scheduled",
    },
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "checked",
    },
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "checked",
    },
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "checked",
    },
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "checked",
    },
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "checked",
    },
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "checked",
    },
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "checked",
    },
    {
      name: "North Central",
      cpm: 2,
      total_contacts: 123,
      total_dialed: 123,
      live: 123,
      voicemail: 123,
      transfer: 123,
      dnc: 123,
      duration: 123,
      state: "checked",
    },
  ];

  constructor(public dialog: MatDialog, public route: ActivatedRoute) {}

  ngOnInit() {
    this.counterForm = new FormGroup({
      counter: new FormControl("", [Validators.required, Validators.max(50)]),
    });

    this.route.queryParams.subscribe((params) => {
      let rerun = params["rerun"];

      if (rerun == 1) {
        this.type = 1;
        this.createStage = true;
        this.nStep = 6;
      }
    });
  }

  onCreateCampaign() {
    this.createStage = true;
    // this.callCampaings = this.callCampaigns_data
  }

  onUpdate(event) {
    const dialogRef = this.dialog.open(UpdateCampaignComponent, {
      width: "370px",
      height: "76px",
      position: {
        top: event.clientY - 38 + "px",
        left: Math.min(event.clientX + 50, window.innerWidth - 370) + "px",
      },
      panelClass: "update-campaign",
      backdropClass: "update-background",
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      // this.animal = result;
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.counterForm.controls[controlName].hasError(errorName);
  };

  onSelectType(campaignType: number) {
    this.campaignType = campaignType;
  }

  onSelectScheduling(schedulingType: number) {
    this.schedulingType = schedulingType;
  }

  onContinue() {
    if (this.campaignType == this.COMPAIGN_TYPE_CALL) {
      if (this.nStep > 5) {
        this.callCampaings = this.callCampaigns_data;
        this.createStage = false;
        return;
      }

      this.nStep++;
    } else {
      if (this.nStep > 4) {
        this.callCampaings = this.callCampaigns_data;
        this.createStage = false;
        return;
      }

      this.nStep++;
    }
  }

  onStep(step: number) {
    this.nStep = step;
  }

  onComplete() {
    this.bCompleted = true;
  }

  onToggleTransfer(event) {
    this.transfer = event.checked;
  }

  onDoNotCall(event) {
    this.doNotCall = event.checked;
  }

  onUseDefaultAudio(event) {
    this.useDefaultAudio = event.checked;
  }

  onUploadContactList() {
    this.uploadContactList = true;
  }
}
