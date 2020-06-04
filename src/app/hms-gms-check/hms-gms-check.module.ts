import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HmsGmsCheckPageRoutingModule } from './hms-gms-check-routing.module';

import { HmsGmsCheckPage } from './hms-gms-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HmsGmsCheckPageRoutingModule
  ],
  declarations: [HmsGmsCheckPage]
})
export class HmsGmsCheckPageModule {}
