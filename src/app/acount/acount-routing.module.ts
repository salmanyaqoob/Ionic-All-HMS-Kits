import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcountPage } from './acount.page';

const routes: Routes = [
  {
    path: '',
    component: AcountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcountPageRoutingModule {}
