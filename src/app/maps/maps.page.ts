import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { LoadMapDataService } from "../services/load-map-data.service";
import { Observable } from "rxjs";
import { IMapData } from "../interfaces/mapdata.interface";
import { IData } from "../interfaces/data.interface";
import { ICityData } from "../interfaces/citydata.interface";

declare var HWMapJsSDK: any;
declare var cordova: any;

@Component({
  selector: "app-maps",
  templateUrl: "./maps.page.html",
  styleUrls: ["./maps.page.scss"],
})
export class MapsPage implements OnInit {
  map: any;
  marker: any[];
  markers: any[];
  markerCluster: any;
  currentLocation: any = null;
  regions: Observable<IData[]>;
  allCities: Observable<ICityData[]>;

  cities: ICityData[];

  selectedRegion: string;
  selectedCity: string;

  allBranches: Observable<IMapData[]>;
  selectedBranches: IMapData[];
  totalQuestions: number;

  baseLat = 24.713552;
  baseLng = 46.675297;

  constructor(
    public _dataService: LoadMapDataService,
    private _cdr: ChangeDetectorRef
  ) {
    this.regions = this._dataService.getRegionData();
    this.allCities = this._dataService.getCityData();
    this.allBranches = this._dataService.getMapData();
    setTimeout(() => this.addMarkers(), 500);
  }

  ngOnInit() {
    this.lastLocation();
  }

  ionViewWillEnter() {
    // this.showMap();
  }

  ionViewDidEnter() {
    setTimeout(() => {}, 1000);
  }

  lastLocation() {
    console.log("Getlastlocation");
    try {
      cordova.plugins.CordovaHMSLocationPlugin.getLastlocation(
        "index.js",
        (_res) => {
          this.currentLocation = _res;
          this.showMap(this.getLat(), this.getLong());
          var myMarker = new HWMapJsSDK.HWMarker({
            map: this.map,
            position: { lat: this.getLat(), lng: this.getLong() },
            label: "My",
            icon: {
              opacity: 0.5,
            },
          });
          var map = this.map;
          let infoWindow = new HWMapJsSDK.HWInfoWindow({
            map,
            position: { lat: this.getLat(), lng: this.getLong() },
            content: "My location",
            offset: [0, -40],
          });
          infoWindow.close();

          myMarker.addListener("click", () => {
            infoWindow.open(myMarker);
          });
          this.marker.push(myMarker);
          this.map.setZoom(16);
        },
        (_err) => {
          alert(_err);
          this.showMap();
        }
      );
    } catch (_e) {
      this.showMap();
      alert(JSON.stringify(_e, null, 4));
    }
  }

  showMap(lat = this.baseLat, lng = this.baseLng) {
    const mapOptions: any = {};
    mapOptions.center = { lat: lat, lng: lng };
    mapOptions.zoom = 10;
    mapOptions.language = "ENG";
    this.map = new HWMapJsSDK.HWMap(document.getElementById("map"), mapOptions);
    this.map.setCenter({ lat: lat, lng: lng });
  }

  addMarkers() {
    var map = this.map;
    this.allBranches.subscribe((branches) => {
      branches.map((branch) => {
        // alert(branch.address);
        let branchmarker = new HWMapJsSDK.HWMarker({
          map: this.map,
          position: {
            lat: this.convertCoordinates(branch.latitude),
            lng: this.convertCoordinates(branch.longitude),
          },
          label: "B",
          icon: {
            opacity: 0.8,
          },
        });

        let infoWindow = new HWMapJsSDK.HWInfoWindow({
          map,
          position: {
            lat: this.convertCoordinates(branch.latitude),
            lng: this.convertCoordinates(branch.longitude),
          },
          content: branch?.retailer_name,
          offset: [0, -40],
        });
        infoWindow.close();
        branchmarker.addListener("click", () => {
          infoWindow.open(branchmarker);
        });
      });
    });
  }

  getLat(): number {
    var LatLng = this.currentLocation.split(",");
    return this.convertCoordinates(LatLng[0]);
  }

  getLong(): number {
    var LatLng = this.currentLocation.split(",");
    return this.convertCoordinates(LatLng[1]);
  }

  convertCoordinates(value: any): number {
    return +parseFloat(value).toFixed(6);
  }

  onChangeRegion($event) {
    this.selectedRegion = $event.target.value;
    this.allCities.subscribe((res) => {
      this.cities = [];
      this.cities = res.filter((city) => {
        return parseInt(this.selectedRegion) == parseInt(city.region_id);
      });
    });

    // this._cdr.detectChanges();
  }

  onChangeCity($event) {
    // alert($event.target.value);
    this.selectedCity = $event.target.value;

    this.allBranches.subscribe((res) => {
      this.selectedBranches = [];
      this.selectedBranches = res.filter((branch) => {
        return parseInt(this.selectedCity) == parseInt(branch.area_id);
      });
    });

    setTimeout(() => {
      this.updateMap();
    }, 500);
  }

  updateMap() {
    let selectedBranches = this.selectedBranches;
    if (selectedBranches.length == 0) return;
    this.map.setCenter({
      lat: this.convertCoordinates(selectedBranches[0].latitude),
      lng: this.convertCoordinates(selectedBranches[0].longitude),
    });
    this.map.setZoom(10);
  }
}
