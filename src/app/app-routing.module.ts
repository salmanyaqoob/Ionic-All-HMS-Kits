import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "hms-gms-check",
    loadChildren: () =>
      import("./hms-gms-check/hms-gms-check.module").then(
        (m) => m.HmsGmsCheckPageModule
      ),
  },
  {
    path: "location",
    loadChildren: () =>
      import("./location/location.module").then((m) => m.LocationPageModule),
  },
  {
    path: "maps",
    loadChildren: () =>
      import("./maps/maps.module").then((m) => m.MapsPageModule),
  },
  {
    path: "push",
    loadChildren: () =>
      import("./push/push.module").then((m) => m.PushPageModule),
  },
  {
    path: "acount",
    loadChildren: () =>
      import("./acount/acount.module").then((m) => m.AcountPageModule),
  },
  {
    path: "iap",
    loadChildren: () => import("./iap/iap.module").then((m) => m.IapPageModule),
  },
  {
    path: "scan",
    loadChildren: () =>
      import("./scan/scan.module").then((m) => m.ScanPageModule),
  },
  {
    path: "analytics",
    loadChildren: () =>
      import("./analytics/analytics.module").then((m) => m.AnalyticsPageModule),
  },
  {
    path: "site",
    loadChildren: () =>
      import("./site/site.module").then((m) => m.SitePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
