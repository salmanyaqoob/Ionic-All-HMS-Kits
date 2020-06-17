import { Component, OnInit } from "@angular/core";

declare var cordova: any;

@Component({
  selector: "app-site",
  templateUrl: "./site.page.html",
  styleUrls: ["./site.page.scss"],
})
export class SitePage implements OnInit {
  sitelog: string = "";
  siteText: string = "";

  constructor() {}

  ngOnInit() {
    this.initSite();
  }

  initSite() {
    //Initialize service
    var config = {
      apiKey:
        "CV8Ar6UWCy1TxqEBk/BCBISSk9bHFmK8GgOPSkP2YlSCAN4H33BT48wnT/ZDvEdpLEDUSySyXg85eG9JYkxpRzU7uhb+",
    };

    cordova.plugins.HMSSite.initializeService(
      config,
      () => {
        console.log("Service is initialized successfully");
        this.sitelog =
          this.sitelog +
          this.appendP("Service is initialized successfully", "success");

        this.updateLog();
      },
      (err) => {
        console.log("Error : " + err);
        this.sitelog =
          this.sitelog +
          this.appendP("Error : " + JSON.stringify(err), "error");
        this.updateLog();
      }
    );
  }

  onTextSearch() {
    var textSearchReq = {
      query: JSON.stringify(this.siteText),
      location: {
        lat: 24.613374,
        lng: 46.728183,
      },
      radius: 5000,
      poiType: cordova.plugins.HMSSite.LocationType.ADDRESS,
      countryCode: "SA",
      language: "en",
      pageIndex: 1,
      pageSize: 5,
    };
    cordova.plugins.HMSSite.textSearch(
      textSearchReq,
      (res) => {
        console.log(JSON.stringify(res));
        this.sitelog =
          this.sitelog + this.appendP(JSON.stringify(res), "normal");
        document.getElementById("sitelog").innerHTML = this.sitelog;
      },
      (err) => {
        console.error(JSON.stringify(err));
        this.sitelog =
          this.sitelog +
          this.appendP("Error : " + JSON.stringify(err), "error");
        document.getElementById("sitelog").innerHTML = this.sitelog;
      }
    );
  }

  onDetailSearch() {
    var detailSearchReq = {
      siteId: "16DA89C6962A36CB1752A343ED48B78A",
      language: "fr",
    };
    cordova.plugins.HMSSite.detailSearch(
      detailSearchReq,
      (res) => {
        console.log(JSON.stringify(res));
        this.sitelog =
          this.sitelog + this.appendP(JSON.stringify(res), "normal");
        document.getElementById("sitelog").innerHTML = this.sitelog;
      },
      (err) => {
        console.error(JSON.stringify(err));
        this.sitelog =
          this.sitelog +
          this.appendP("Error : " + JSON.stringify(err), "error");
        document.getElementById("sitelog").innerHTML = this.sitelog;
      }
    );
  }

  onQuerySuggestion() {
    var querySuggestionReq = {
      query: JSON.stringify(this.siteText),
      // location: {
      //   lat: 48.893478,
      //   lng: 2.334595,
      // },
      poiTypes: [
        cordova.plugins.HMSSite.LocationType.ADDRESS,
        cordova.plugins.HMSSite.LocationType.GEOCODE,
      ],
      radius: 1000,
      countryCode: "SA",
      language: "en",
    };
    cordova.plugins.HMSSite.querySuggestion(
      querySuggestionReq,
      (res) => {
        console.log(JSON.stringify(res));
        this.sitelog =
          this.sitelog + this.appendP(JSON.stringify(res), "normal");
        document.getElementById("sitelog").innerHTML = this.sitelog;
      },
      (err) => {
        console.error(JSON.stringify(err));
        this.sitelog =
          this.sitelog +
          this.appendP("Error : " + JSON.stringify(err), "error");
        document.getElementById("sitelog").innerHTML = this.sitelog;
      }
    );
  }

  onNearbySearch() {
    var nearbySearchReq = {
      query: JSON.stringify(this.siteText),
      location: {
        lat: 24.613374,
        lng: 46.728183,
      },
      radius: 5000,
      poiType: cordova.plugins.HMSSite.LocationType.ADDRESS,
      countryCode: "SA",
      language: "en",
      pageIndex: 1,
      pageSize: 5,
    };
    cordova.plugins.HMSSite.nearbySearch(
      nearbySearchReq,
      (res) => {
        console.log(JSON.stringify(res));
        this.sitelog =
          this.sitelog + this.appendP(JSON.stringify(res), "normal");
        document.getElementById("sitelog").innerHTML = this.sitelog;
      },
      (err) => {
        console.error(JSON.stringify(err));
        this.sitelog =
          this.sitelog +
          this.appendP("Error : " + JSON.stringify(err), "error");
        document.getElementById("sitelog").innerHTML = this.sitelog;
      }
    );
  }

  updateLog() {
    document.getElementById("sitelog").innerHTML = this.sitelog;
  }

  clearLog() {
    this.sitelog = "";
    this.updateLog();
  }

  appendP(text: String, pClass: String) {
    return "<p class='" + pClass + "'>" + text + "</p>";
  }
}
