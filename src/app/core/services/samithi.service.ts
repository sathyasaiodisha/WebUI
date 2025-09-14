import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SamithiItem {
  ID?: number;
  DistrictID?: number;
  SamithiCode: string;
  SamithiName: string;
  SamithiRegNo: string;
  isEditing?: boolean;
}

export interface DistItem {
  ID?: number;
  DistrictName: string;
}

@Injectable({
  providedIn: 'root'
})

export class SamithiService {

  private apiUrl = 'http://172.93.223.88:8080/samithis'; 
  private distApiUrl = 'http://172.93.223.88:8080/saidistricts';

  constructor(private http: HttpClient) {}

  getItems(): Observable<SamithiItem[]> {
    return this.http.get<SamithiItem[]>(this.apiUrl);
  }

  getDists(): Observable<DistItem[]> {
    return this.http.get<DistItem[]>(this.distApiUrl);
  }

  getItemsbydistrict(distID: number): Observable<SamithiItem[]> {
    return this.http.get<SamithiItem[]>(`${this.distApiUrl}/${distID}/samithis`);
  }
  
  createItem(itemrow: SamithiItem): Observable<any> {
    let itemRowjson = {
      samithiName: itemrow.SamithiName,
      samithiRegNo:itemrow.SamithiRegNo,
      districtId: itemrow.DistrictID,
      createdBy: "PortalUser"
    }
    return this.http.post(`${this.apiUrl}/add`, itemRowjson);
  }

  updateItem(itemrow: SamithiItem): Observable<any> {
    let itemRowjson = {
      samithiCode: itemrow.SamithiCode,
      samithiName: itemrow.SamithiName,
      updatedBy: "PortalUser"
    }
    return this.http.put(`${this.apiUrl}/update/${itemrow.ID}`, itemRowjson);
  }

  deleteItem(itemID: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${itemID}`);
  }
}