import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IapPage } from './iap.page';

const routes: Routes = [
  {
    path: '',
    component: IapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IapPageRoutingModule {}
