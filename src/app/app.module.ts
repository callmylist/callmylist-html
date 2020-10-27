import { NgModule } from '@angular/core';
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import {MatSelectModule} from "@angular/material";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SoundsComponent } from "./sounds/sounds.component";
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { MyCampaignsComponent } from './my-campaigns/my-campaigns.component';
import { UpdateCampaignComponent } from './my-campaigns/update-campaign/update-campaign.component';
import { UploadAudioComponent } from './sounds/upload-audio/upload-audio.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import { TextSpeechComponent } from './sounds/text-speech/text-speech.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SupportComponent } from './support/support.component';
import { SendSuccessComponent } from './support/send-success/send-success.component';
import { AccountComponent } from './account/account.component';
import { MatMenuModule} from '@angular/material/menu';
import { AccountUpdateComponent } from './account/account-update/account-update.component';
import { MessageCenterComponent } from './message-center/message-center.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { LoadingDataComponent } from './message-center/loading-data/loading-data.component';
import { LoadingFinishedComponent } from './message-center/loading-finished/loading-finished.component';
import { NewMessageComponent } from './message-center/new-message/new-message.component';
import { SelectContactComponent } from './message-center/select-contact/select-contact.component';
import { AddContactComponent } from './message-center/add-contact/add-contact.component';
import { SettingsComponent } from './settings/settings.component';
import { AddChildAccountComponent } from './account/add-child-account/add-child-account.component';
import { MessagesComponent } from './message-center/messages/messages.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TestCallComponent } from './dashboard/test-call/test-call.component';
import { AuthorizePriceComponent } from './my-campaigns/authorize-price/authorize-price.component';
import { PaymentErrorComponent } from './my-campaigns/payment-error/payment-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SoundsComponent,
    AddFundsComponent,
    MyCampaignsComponent,
    UpdateCampaignComponent,
    UploadAudioComponent,
    TextSpeechComponent,
    ContactListComponent,
    SupportComponent,
    SendSuccessComponent,
    AccountComponent,
    AccountUpdateComponent,
    MessageCenterComponent,
    LoadingDataComponent,
    LoadingFinishedComponent,
    NewMessageComponent,
    SelectContactComponent,
    AddContactComponent,
    SettingsComponent,
    AddChildAccountComponent,
    MessagesComponent,
    DeleteConfirmComponent,
    ContactsComponent,
    TestCallComponent,
    AuthorizePriceComponent,
    PaymentErrorComponent
  ],
  imports: [
    ChartsModule,
    MatSelectModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSliderModule,
    MatMenuModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  entryComponents: [
      AddFundsComponent, 
      UpdateCampaignComponent, 
      UploadAudioComponent, 
      TextSpeechComponent, 
      SendSuccessComponent,
      AccountUpdateComponent,
      LoadingDataComponent,
      LoadingFinishedComponent,
      NewMessageComponent,
      AddContactComponent,
      SelectContactComponent,
      AddChildAccountComponent,
      MessagesComponent,
      DeleteConfirmComponent,
      TestCallComponent,
      AuthorizePriceComponent,
      PaymentErrorComponent
  ]
})
export class AppModule { }
