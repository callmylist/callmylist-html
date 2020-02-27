import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SoundsComponent } from "./sounds/sounds.component";
import { MyCampaignsComponent } from './my-campaigns/my-campaigns.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SupportComponent } from './support/support.component';
import { AccountComponent } from './account/account.component';
import { MessageCenterComponent } from './message-center/message-center.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
    { path: '', component: AppComponent, children: [    
    	{ path: 'dashboard', component : DashboardComponent },
    	{ path: 'sounds', component : SoundsComponent },
    	{ path: 'my-campaigns', component : MyCampaignsComponent },
    	{ path: 'contact-list', component : ContactListComponent },
    	{ path: 'support', component : SupportComponent },
        { path: 'account', component : AccountComponent },
        { path: 'message-center', component : MessageCenterComponent },
        { path: 'settings', component : SettingsComponent },
        { path: 'contacts', component : ContactsComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
