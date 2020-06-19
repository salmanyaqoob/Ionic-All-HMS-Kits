import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdsPage } from './ads.page';

const routes: Routes = [
  {
    path: '',
    component: AdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsPageRoutingModule {}
