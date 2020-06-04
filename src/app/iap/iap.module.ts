import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IapPageRoutingModule } from './iap-routing.module';

import { IapPage } from './iap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IapPageRoutingModule
  ],
  declarations: [IapPage]
})
export class IapPageModule {}
