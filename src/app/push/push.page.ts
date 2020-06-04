import { Component, OnInit } from "@angular/core";
declare var cordova: any;

@Component({
  selector: "app-push",
  templateUrl: "./push.page.html",
  styleUrls: ["./push.page.scss"],
})
export class PushPage implements OnInit {
  pushLog: string = "";
  constructor() {}

  ngOnInit() {
    this.setMessageCallback();
  }

  getToken() {
    console.log("GetToken");
    try {
      cordova.plugins.CordovaHMSPushPlugin.getToken(
        "index.js",
        (_res) => {
          this.pushLog =
            this.pushLog + this.appendP("Get Token Successfully", "success");

          this.pushLog =
            this.pushLog + this.appendP("Push Token : " + _res, "normal");

          this.updateLog();
        },
        (_err) => {
          this.pushLog =
            this.pushLog + this.appendP("Get Token Fail: " + _err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert(JSON.stringify(_e, null, 4));
    }
  }

  topicSubscribe(topic) {
    console.log("TopicSubscribe");
    try {
      cordova.plugins.CordovaHMSPushPlugin.subscribeTopic(
        topic,
        (_res) => {
          this.pushLog =
            this.pushLog +
            this.appendP("Topic subcription Successfully", "success");

          this.pushLog = this.pushLog + this.appendP(_res, "normal");

          this.updateLog();
        },
        (_err) => {
          this.pushLog =
            this.pushLog +
            this.appendP("Topic subcription Fail:" + _err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert("error");
      alert(JSON.stringify(_e, null, 4));
    }
  }

  setMessageCallback() {
    console.log("SetMessageCallback");
    try {
      cordova.plugins.CordovaHMSPushPlugin.getMessageCallback(
        "index.js",
        (_res) => {
          this.pushLog =
            this.pushLog + this.appendP("Data Message Callback", "heading");

          this.pushLog = this.pushLog + this.appendP(_res, "heading");
          this.updateLog();
        },
        (_err) => {
          this.pushLog = this.pushLog + this.appendP(_err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert(JSON.stringify(_e, null, 4));
    }
  }

  updateLog() {
    document.getElementById("pushLog").innerHTML = this.pushLog;
  }

  clearLog() {
    this.pushLog = "";
    this.updateLog();
  }

  appendP(text: String, pClass: String) {
    return "<p class='" + pClass + "'>" + text + "</p>";
  }
}
