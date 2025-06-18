import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DistictItem {
  ID?: number;
  DistrictCode: string;
  DistrictName: string;
  isEditing?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class DistrictService {

  private apiUrl = 'http://135.235.158.227/saidistricts'; 

  constructor(private http: HttpClient) {}

  getItems(): Observable<DistictItem[]> {
    return this.http.get<DistictItem[]>(this.apiUrl);
  }
  
  createItem(itemrow: DistictItem): Observable<any> {
    let itemRowjson = {
      distCode: itemrow.DistrictCode,
      distName: itemrow.DistrictName,
      createdBy: "PortalUser"
    }
    return this.http.post(`${this.apiUrl}/add`, itemRowjson);
  }

  updateItem(itemrow: DistictItem): Observable<any> {
    let itemRowjson = {
      distCode: itemrow.DistrictCode,
      distName: itemrow.DistrictName,
      updatedBy: "PortalUser"
    }
    return this.http.put(`${this.apiUrl}/update/${itemrow.ID}`, itemRowjson);
  }

  deleteItem(itemID: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${itemID}`);
  }
}
