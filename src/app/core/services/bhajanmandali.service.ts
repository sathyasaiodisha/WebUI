import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BhajanmandaliItem {
  ID?: number;
  DistrictID?: number;
  SamithiID?: number;
  BhajanMandaliCode: string;
  BhajanMandaliName: string;
  BhajanMandaliRegNo: string;
  isEditing?: boolean;
}

export interface SamithiItem {
  ID?: number;
  DistrictID?: number;
  SamithiCode?: string;
  SamithiName: string;
  SamithiRegNo?: string;
  isEditing?: boolean;
}

export interface DistItem {
  ID?: number;
  DistrictName: string;
}

@Injectable({
  providedIn: 'root'
})
export class BhajanmandaliService {

  private apiUrl = 'http://172.93.223.88:8080/bhajanmandalis';
  private byDistApiUrl = 'http://172.93.223.88:8080/district';
  private samithiApiUrl = 'http://172.93.223.88:8080/samithis'; 
  private distApiUrl = 'http://172.93.223.88:8080/saidistricts';

  constructor(private http: HttpClient) { }

  getItems(): Observable<BhajanmandaliItem[]> {
      return this.http.get<BhajanmandaliItem[]>(this.apiUrl);
    }

  getSamithis(): Observable<SamithiItem[]> {
      return this.http.get<SamithiItem[]>(this.samithiApiUrl);
    }

  getDists(): Observable<DistItem[]> {
      return this.http.get<DistItem[]>(this.distApiUrl);
    }

  getSamithisbyDistrict(districtID: number): Observable<SamithiItem[]> {
      return this.http.get<SamithiItem[]>(`${this.byDistApiUrl}/${districtID}/samithis`);
    }

  getBhajanMandalisbyDistrict(districtID: number): Observable<BhajanmandaliItem[]> {
      return this.http.get<BhajanmandaliItem[]>(`${this.byDistApiUrl}/${districtID}/bhajanmandalis`);
    }

  createItem(itemrow: BhajanmandaliItem): Observable<any> {
      let itemRowjson = {
        bmName: itemrow.BhajanMandaliName,
        bmRegNo:itemrow.BhajanMandaliRegNo,
        samithiId: itemrow.SamithiID,
        createdBy: "PortalUser"
      }
      return this.http.post(`${this.apiUrl}/add`, itemRowjson);
    }

  updateItem(itemrow: BhajanmandaliItem): Observable<any> {
      let itemRowjson = {
        bmRegNo: itemrow.BhajanMandaliRegNo,
        bmName: itemrow.BhajanMandaliName,
        updatedBy: "PortalUser"
      }
      return this.http.put(`${this.apiUrl}/update/${itemrow.ID}`, itemRowjson);
    }

  deleteItem(itemID: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/delete/${itemID}`);
    }
}
