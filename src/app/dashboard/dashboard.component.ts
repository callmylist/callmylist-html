import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartType} from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import {Router} from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestCallComponent } from './test-call/test-call.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chartContainer', {static: true}) el:ElementRef;

  private nStep : number = 0;
  constructor(private router: Router, public dialog: MatDialog) {
  }

  public doughnutChartLabels: Label[] = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData: ChartDataSets[];
  public doughnutOptions = {
    rotation: Math.PI,
    cutoutPercentage:60,
    circumference: Math.PI,
    responsive: true
  };

  public textCampaigns = [
    {
      name:"North Central",
      dateSent: "1/1/2018",
      completed: true
    },
    {
      name:"North Central",
      dateSent: "1/1/2018",
      completed: true
    },
    {
      name:"North Central",
      dateSent: "1/1/2018",
      completed: true
    },
    {
      name:"North Central",
      dateSent: "1/1/2018",
      completed: false
    }
  ];

  public callCampaigns = [
    {
      name: "North Central",
      dateSent: "1/1/2018",
      totalContacts: 13384,
      totalDialed:13212,
      live:2031,
      voicemail:13384,
      transfer:13384,
      listeningDuration: 38
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      totalContacts: 232,
      totalDialed:221,
      live:5,
      voicemail:232,
      transfer:232,
      listeningDuration:76
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      totalContacts: 84485,
      totalDialed:81215,
      live:23487,
      voicemail:84485,
      transfer:84485,
      listeningDuration:51
    },
    {
      name: "North Central",
      dateSent: "1/1/2018",
      totalContacts: 34373,
      totalDialed:33703,
      live:10038,
      voicemail:34373,
      transfer:34373,
      listeningDuration:89
    }
  ];

  public mySounds = [
    { name: "North Central", lastUsed: "1/1/2018"},
    { name: "North Central", lastUsed: "1/1/2018"},
    { name: "North Central", lastUsed: "1/1/2018"},
    { name: "North Central", lastUsed: "1/1/2018"}
  ];

  public myContactList = [
    { name: "North Central", total: 100},
    { name: "North Central", total: 100},
    { name: "North Central", total: 100},
    { name: "North Central", total: 100}
  ];

  ngOnInit() {
    let context = this.el.nativeElement.getContext("2d");
    let gradient = context.createLinearGradient(0, 0, 150, 0);
    gradient.addColorStop(0, '#be5112');
    gradient.addColorStop(1, '#f26d24');
    this.doughnutChartData = [
      {
        data: [70, 30],
        backgroundColor: [
          gradient,
          '#23242511'
        ]
      }
    ];
  }


  next()
  {
    if(this.nStep > 2)
    {
      return
    }
    
    this.nStep ++
  }

  onRerun()
  {
    this.router.navigateByUrl('/app/my-campaigns?rerun=1');
  }

  onTestCall()
  {
    const dialogRef = this.dialog.open(TestCallComponent, {
        width: '966px',
        position : { top: '163px'},
        backdropClass: 'black-background'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
