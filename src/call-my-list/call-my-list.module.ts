import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CallMyListRoutingModule } from './call-my-list-routing.module';
import { RootComponentComponent } from './root-component/root-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [RootComponentComponent],
  imports: [
  	BrowserModule,
  	BrowserAnimationsModule,
    CallMyListRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponentComponent]
})
export class CallMyListModule { }
