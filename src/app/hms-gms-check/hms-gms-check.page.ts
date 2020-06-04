import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
declare var cordova: any;

@Component({
  selector: "app-hms-gms-check",
  templateUrl: "./hms-gms-check.page.html",
  styleUrls: ["./hms-gms-check.page.scss"],
})
export class HmsGmsCheckPage implements OnInit {
  hmsAvailable: boolean = null;
  gmsAvailable: boolean = null;

  constructor() {}

  ngOnInit() {
    this.checkGMS();
    this.checkHMS();
  }

  //  Check HMS Available
  checkHMS() {
    cordova.plugins.CordovaHMSGMSCheckPlugin.isHmsAvailable(
      "index.js",
      (_res) => {
        var hmsAvailable = _res === "true";
        this.hmsAvailable = hmsAvailable;
      },
      (_err) => {
        alert(_err);
      }
    );
  }

  // Check GMS Available
  checkGMS() {
    cordova.plugins.CordovaHMSGMSCheckPlugin.isGmsAvailable(
      "index.js",
      (_res) => {
        var gmsAvailable = _res === "true";
        this.gmsAvailable = gmsAvailable;
      },
      (_err) => {
        alert(_err);
      }
    );
  }
}
