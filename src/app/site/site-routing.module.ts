import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitePage } from './site.page';

const routes: Routes = [
  {
    path: '',
    component: SitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitePageRoutingModule {}
