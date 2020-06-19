import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdsPageRoutingModule } from './ads-routing.module';

import { AdsPage } from './ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdsPageRoutingModule
  ],
  declarations: [AdsPage]
})
export class AdsPageModule {}
