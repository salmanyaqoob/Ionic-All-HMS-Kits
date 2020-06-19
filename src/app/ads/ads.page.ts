import { Component, OnInit } from "@angular/core";
declare var cordova: any;
// declare var window: any;
// const HMSAds: any = cordova.plugins.HMSAds;

const getId = (id) => document.getElementById(id);
const ad = {
  gender: 0,
  nonPersonalizedAd: 0,
};
let nativeAdInstance = null;

@Component({
  selector: "app-ads",
  templateUrl: "./ads.page.html",
  styleUrls: ["./ads.page.scss"],
})
export class AdsPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.error(JSON.stringify(cordova.plugins));
    // console.error(JSON.stringify(window.plugins));
    // this.initAds();
  }

  // async initAds() {
  //   // Initialize HMSAds
  //   await HMSAds.init({
  //     bannerFloat: false,
  //   });
  //   this.loadOptions();
  // }

  // loadOptions() {
  //   // Load colors
  //   Object.keys(HMSAds.Colors).forEach((color) => {
  //     const opt = document.createElement("option");
  //     opt.value = HMSAds.Colors[color];
  //     opt.innerHTML = color;
  //     if (color === "TRANSPARENT") {
  //       opt.selected = true;
  //     }
  //     getId("bannerAdBgColor").appendChild(opt);
  //     getId("splashLogoColor").appendChild(opt.cloneNode(true));
  //   });

  //   // Load banner sizes
  //   Object.getOwnPropertyNames(HMSAds).forEach((constant) => {
  //     if (constant.startsWith("BANNER_SIZE")) {
  //       const opt = document.createElement("option");
  //       opt.value = HMSAds[constant];
  //       opt.innerHTML = constant.replace("BANNER_SIZE_", "");
  //       if (constant.endsWith("320_50")) {
  //         opt.selected = true;
  //       }
  //       getId("bannerAdSize").appendChild(opt);
  //     }
  //   });
  // }
}
