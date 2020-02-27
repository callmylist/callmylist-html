import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddFundsComponent } from '../../add-funds/add-funds.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public balance: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.balance = 30;
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('push-right');

      dom.classList.toggle('mainback');
  }

  onAddFunds()
  {
    const dialogRef = this.dialog.open(AddFundsComponent, {
      width: '966px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
