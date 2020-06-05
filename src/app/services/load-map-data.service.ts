import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IMapData } from "../interfaces/mapdata.interface";
import { IData } from "../interfaces/data.interface";
import { ICityData } from "../interfaces/citydata.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoadMapDataService {
  private mapDataUrl: string = "../assets/json/map_data.json";
  private regionDataUrl: string = "../assets/json/region_data.json";
  private cityDataUrl: string = "../assets/json/city_data.json";

  constructor(private http: HttpClient) {}

  getMapData(): Observable<IMapData[]> {
    return this.http.get<IMapData[]>(this.mapDataUrl);
  }

  getRegionData(): Observable<ICityData[]> {
    return this.http.get<ICityData[]>(this.regionDataUrl);
  }

  getCityData(): Observable<IData[]> {
    return this.http.get<IData[]>(this.cityDataUrl);
  }
}
