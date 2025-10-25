import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DataAdminItem {
  ID?: number;
  UserName?: string;
  UserEmail?: string;
  UserPwd?: string;
  JurisdictionID?: number;
  DistrictID?: number;
  IsEditing?: boolean;
}

export interface JurisdictionItem {
  ID?: number;
  JurisdicionName: string;
}

export interface DistrctItem {
  ID?: number;
  DistrictName: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataAdminService {

  private apiUrl = 'https://www.sathyasaiodisha.org/api/dataadmins';
  private adminJurisdictionUrl = 'https://www.sathyasaiodisha.org/api/dataadminjurisdictions';
  private districtUrl = 'https://www.sathyasaiodisha.org/api/saidistricts';

  // private apiUrl = 'http://127.0.0.1:8000/dataadmins';
  // private adminJurisdictionUrl = 'http://127.0.0.1:8000/dataadminjurisdictions';
  // private districtUrl = 'http://127.0.0.1:8000/saidistricts';

  constructor(private http: HttpClient) { }
  
  getItems(): Observable<DataAdminItem[]> {
      return this.http.get<DataAdminItem[]>(`${this.apiUrl}/all`);
    }

  getUserByUserName(userName: string): Observable<DataAdminItem> {
      return this.http.get<DataAdminItem>(`${this.apiUrl}/${userName}`);
    }

  getJurisdictions(): Observable<JurisdictionItem[]> {
      return this.http.get<JurisdictionItem[]>(this.adminJurisdictionUrl);
    }

  getDistricts(): Observable<DistrctItem[]> {
      return this.http.get<DistrctItem[]>(this.districtUrl);
    }
  
  createItem(itemrow: DataAdminItem): Observable<any> {
        let itemRowjson = {
              userJurisdiction: itemrow.JurisdictionID,
              userDistrict: itemrow.DistrictID,
              userName: itemrow.UserName,
              userEmail: itemrow.UserEmail,
              userPwd: itemrow.UserPwd,
              createdBy: "PortalUser"
        }

        return this.http.post(`${this.apiUrl}/add`, itemRowjson);
      }
  
    updateItem(itemrow: DataAdminItem): Observable<any> {
        let itemRowjson = {
          userJurisdiction: itemrow.JurisdictionID,
          userDistrict: itemrow.DistrictID,
          userName: itemrow.UserName,
          userEmail: itemrow.UserEmail,
          userPwd: itemrow.UserPwd,
          updatedBy: "PortalUser"
        }

        return this.http.put(`${this.apiUrl}/update/${itemrow.ID}`, itemRowjson);
      } 
  
    deleteItem(itemID: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${itemID}`);
      }
}
