import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcountPageRoutingModule } from './acount-routing.module';

import { AcountPage } from './acount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcountPageRoutingModule
  ],
  declarations: [AcountPage]
})
export class AcountPageModule {}
