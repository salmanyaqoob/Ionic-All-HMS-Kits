import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitePageRoutingModule } from './site-routing.module';

import { SitePage } from './site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitePageRoutingModule
  ],
  declarations: [SitePage]
})
export class SitePageModule {}
