import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HmsGmsCheckPage } from './hms-gms-check.page';

const routes: Routes = [
  {
    path: '',
    component: HmsGmsCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HmsGmsCheckPageRoutingModule {}
