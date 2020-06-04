import { Component, OnInit } from "@angular/core";
declare var cordova: any;

@Component({
  selector: "app-location",
  templateUrl: "./location.page.html",
  styleUrls: ["./location.page.scss"],
})
export class LocationPage implements OnInit {
  locationLog: string = "";
  constructor() {}

  ngOnInit() {}

  requestLocation() {
    console.log("RequestLocation");
    this.clearLog();
    try {
      // this.locationLog = null;

      this.locationLog =
        this.locationLog + this.appendP("Location update", "heading");
      cordova.plugins.CordovaHMSLocationPlugin.requestLocation(
        "index.js",
        (_res) => {
          this.locationLog = this.locationLog + this.appendP(_res, "normal");
          this.updateLog();
        },
        (_err) => {
          this.locationLog = this.locationLog + this.appendP(_err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert("error: " + JSON.stringify(_e, null, 4));
    }
  }

  removeLocation() {
    console.log("RemoveLocation");
    try {
      cordova.plugins.CordovaHMSLocationPlugin.removeLocation(
        "index.js",
        (_res) => {
          this.locationLog =
            this.locationLog +
            this.appendP("Location remove: " + _res, "normal");
          this.updateLog();
        },
        (_err) => {
          this.locationLog =
            this.locationLog + this.appendP("Remove Fali" + _err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert(JSON.stringify(_e, null, 4));
    }
  }

  lastLocation() {
    this.clearLog();
    console.log("Getlastlocation");
    try {
      this.locationLog =
        this.locationLog + this.appendP("Last Location", "heading");
      cordova.plugins.CordovaHMSLocationPlugin.getLastlocation(
        "index.js",
        (_res) => {
          this.locationLog = this.locationLog + this.appendP(_res, "normal");
          this.updateLog();
        },
        (_err) => {
          this.locationLog = this.locationLog + this.appendP(_err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert(JSON.stringify(_e, null, 4));
    }
  }

  updateLog() {
    document.getElementById("locationLog").innerHTML = this.locationLog;
  }

  clearLog() {
    this.locationLog = "";
    this.updateLog();
  }

  appendP(text: String, pClass: String) {
    return "<p class='" + pClass + "'>" + text + "</p>";
  }
}
