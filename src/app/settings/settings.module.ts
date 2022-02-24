import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PassowrdComponent } from './passowrd/passowrd.component';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PassowrdComponent,
    LogComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
