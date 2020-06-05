import { Component, OnInit } from "@angular/core";
declare var cordova: any;

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.page.html",
  styleUrls: ["./analytics.page.scss"],
})
export class AnalyticsPage implements OnInit {
  analyticsLog: string = "";
  constructor() {}

  ngOnInit() {}

  logEvent() {
    console.log("LogEvent Analytics");
    try {
      var message = { uProp: "testAccount", time: "2020", page: "Analytics" };
      cordova.plugins.HMSAnalyticsPlugin.logEvent(
        message,
        (_res) => {
          this.analyticsLog =
            this.analyticsLog +
            this.appendP("Event log Successfully", "success");
          this.analyticsLog = this.analyticsLog + this.appendP(_res, "normal");
          this.updateLog();
        },
        (_err) => {
          this.analyticsLog = this.analyticsLog + this.appendP(_err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert(JSON.stringify(_e, null, 4));
    }
  }

  updateLog() {
    document.getElementById("analyticsLog").innerHTML = this.analyticsLog;
  }

  clearLog() {
    this.analyticsLog = "";
    this.updateLog();
  }

  appendP(text: String, pClass: String) {
    return "<p class='" + pClass + "'>" + text + "</p>";
  }
}
