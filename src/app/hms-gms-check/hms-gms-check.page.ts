import { Component, OnInit } from "@angular/core";
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
// import {Device} from 'ionic-native';
declare var cordova: any;

@Component({
  selector: "app-hms-gms-check",
  templateUrl: "./hms-gms-check.page.html",
  styleUrls: ["./hms-gms-check.page.scss"],
})
export class HmsGmsCheckPage implements OnInit {
  hmsAvailable: boolean = null;
  gmsAvailable: boolean = null;
  deviceInfo: string = null;

  constructor(private device: Device, private platform: Platform) { 
    platform.ready().then(() => {
      this.deviceInfo = device.manufacturer;
    });

  }

  ngOnInit() 
  {
    this.isHuaweiDevice().then(isHuawei=>{
      if(isHuawei === true){
        alert("Huawei Device");
      } else {
        alert("Not Huawei Device");
      }
    });
    this.checkHMSGMS();
  }

  async isHuaweiDevice(): Promise<boolean>{
    var isHuawei: boolean = false;
    var ready = await this.platform.ready();
    if(ready){
      var manufacturer = this.device.manufacturer;
      if(manufacturer === 'HUAWEI'){
        isHuawei = true;
      }
    }
    return isHuawei
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
