import { Component, OnInit } from "@angular/core";

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
    // this.checkGMS();
    this.checkHMSGMS();
  }

  async checkHMSGMS() {
    await this.checkHMS();
    await this.checkGMS();
  }

  promisify = (f) => (...a) => new Promise((res, rej) => f(...a, res, rej));

  checkHMS() {
    const isHmsAvailableFn = this.isHmsAvailableFN;
    const isHmsAvailable = this.promisify(
      this.isHmsAvailableFN.bind(isHmsAvailableFn)
    );
    isHmsAvailable().then(
      (status: boolean) => {
        this.hmsAvailable = status;
      },
      (error) => alert(error)
    );
  }

  checkGMS() {
    const isGmsAvailableFN = this.isGmsAvailableFN;
    const isGmsAvailable = this.promisify(
      this.isGmsAvailableFN.bind(isGmsAvailableFN)
    );
    isGmsAvailable().then(
      (status: boolean) => {
        this.gmsAvailable = status;
      },
      (error) => alert(error)
    );
  }

  // Check HMS Available
  isHmsAvailableFN(success, failure) {
    cordova.plugins.CordovaHMSGMSCheckPlugin.isHmsAvailable(
      "index.js",
      (_res) => {
        var hmsAvailable = _res === "true";
        this.hmsAvailable = hmsAvailable;
        success(hmsAvailable);
      },
      (_err) => {
        failure(_err);
      }
    );
  }

  isGmsAvailableFN(success, failure) {
    cordova.plugins.CordovaHMSGMSCheckPlugin.isGmsAvailable(
      "index.js",
      (_res) => {
        var gmsAvailable = _res === "true";
        this.gmsAvailable = gmsAvailable;
        success(gmsAvailable);
      },
      (_err) => {
        failure(_err);
      }
    );
  }
}
