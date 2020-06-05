import { Component, OnInit } from "@angular/core";
declare var cordova: any;

@Component({
  selector: "app-acount",
  templateUrl: "./acount.page.html",
  styleUrls: ["./acount.page.scss"],
})
export class AcountPage implements OnInit {
  accountLog: string = "";
  constructor() {}

  ngOnInit() {}

  signInByIdToken() {
    console.log("SignInByIdToken");
    try {
      cordova.plugins.CordovaHMSAccountPlugin.signInWithIdToken(
        "index.js",
        (_res) => {
          this.accountLog =
            this.accountLog + this.appendP("Sign Successfully", "success");
          this.accountLog = this.accountLog + this.appendP(_res, "normal");
          this.updateLog();
        },
        (_err) => {
          this.accountLog = this.accountLog + this.appendP(_err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert(JSON.stringify(_e, null, 4));
    }
  }

  signInByAuthCode() {
    console.log("SignInByAuthCode");
    try {
      cordova.plugins.CordovaHMSAccountPlugin.signInWithAuthCode(
        "index.js",
        (_res) => {
          this.accountLog =
            this.accountLog + this.appendP("Sign Successfully", "success");
          this.accountLog = this.accountLog + this.appendP(_res, "normal");
          this.updateLog();
        },
        (_err) => {
          this.accountLog =
            this.accountLog + this.appendP(_err, "error") + "\n";
          this.updateLog();
        }
      );
    } catch (_e) {
      alert(JSON.stringify(_e, null, 4));
    }
  }

  signOut() {
    console.log("SignOut");
    try {
      cordova.plugins.CordovaHMSAccountPlugin.signOut(
        "index.js",
        (_res) => {
          this.accountLog =
            this.accountLog + this.appendP("Signout Successfully", "success");
          this.accountLog = this.accountLog + this.appendP(_res, "normal");
          this.updateLog();
        },
        (_err) => {
          this.accountLog = this.accountLog + this.appendP(_err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert(JSON.stringify(_e, null, 4));
    }
  }

  revokeAuth() {
    console.log("RevokeAuth");
    try {
      cordova.plugins.CordovaHMSAccountPlugin.revokeAuth(
        "index.js",
        (_res) => {
          this.accountLog = this.accountLog + this.appendP(_res, "success");
          this.updateLog();
        },
        (_err) => {
          this.accountLog = this.accountLog + this.appendP(_err, "error");
          this.updateLog();
        }
      );
    } catch (_e) {
      alert(JSON.stringify(_e, null, 4));
    }
  }

  updateLog() {
    document.getElementById("accountLog").innerHTML = this.accountLog;
  }

  clearLog() {
    this.accountLog = "";
    this.updateLog();
  }

  appendP(text: String, pClass: String) {
    return "<p class='" + pClass + "'>" + text + "</p>";
  }
}
