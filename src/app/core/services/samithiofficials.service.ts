import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SamithiOfficeBearerItem {
  ID?: number;
  DistrictID?: number;
  DistrictCode?: string;
  DistrictName?: string;
  SamithiID?: number,
  SamithiCode?: string,
  SamithiName?: string,
  DesignationID?: number;
  DesignationCode?: string;
  OfficeBearerName: string;
  AddressLine1: string;
  AddressLine2?: string;
  AddressLine3?: string;
  ContactNo1: string;
  ContactNo2?: string;
  Email: string;
  Gender: string
  isEditing?: boolean;
}

export interface DistrictItem {
  ID?: number;
  DistrictCode?: string;
  DistrictName: string;
}

export interface SamithiItem {
  ID?: number;
  SamithiCode?: string;
  SamithiName: string;
}

export interface DesignationItem {
  ID?: number;
  DesignationCode: string;
  DesignationName: string;
}

@Injectable({
  providedIn: 'root'
})

export class SamithiOfficialsService {

private apiUrl = 'https://www.sathyasaiodisha.org/api/samithiofficebearers';
    private saidistrictUrl = 'https://www.sathyasaiodisha.org/api/saidistricts';
    private samithisBySaidistrictUrl = 'https://www.sathyasaiodisha.org/api/district';
    private samithiDesignationsUrl = 'https://www.sathyasaiodisha.org/api/samithidesignations';
  
    constructor(private http: HttpClient) { }
    
    getItems(): Observable<SamithiOfficeBearerItem[]> {
        return this.http.get<SamithiOfficeBearerItem[]>(`${this.apiUrl}/all`);
      }
  
    getDistricts(): Observable<DistrictItem[]> {
        return this.http.get<DistrictItem[]>(this.saidistrictUrl);
      }

    getSamithisByDistrict(distID: number): Observable<SamithiItem[]> {
        return this.http.get<SamithiItem[]>(`${this.samithisBySaidistrictUrl}/${distID}/samithis`);
      }
    
    getSamithiDesignations(): Observable<DesignationItem[]> {
        return this.http.get<DesignationItem[]>(this.samithiDesignationsUrl);
      }
  
    createItem(itemrow: SamithiOfficeBearerItem): Observable<any> {
          let itemRowjson = {
                districtId: itemrow.DistrictID,
                samithiId: itemrow.SamithiID,
                designationId: itemrow.DesignationID,
                officebeaerername: itemrow.OfficeBearerName,
                adrline1: itemrow.AddressLine1,
                adrline2: itemrow.AddressLine2,
                adrline3: itemrow.AddressLine3,
                contactno1: itemrow.ContactNo1,
                contactno2: itemrow.ContactNo2,
                email: itemrow.Email,
                gender: itemrow.Gender,
                createdBy: "PortalUser"
          }
          return this.http.post(`${this.apiUrl}/add`, itemRowjson);
        }
    
      updateItem(itemrow: SamithiOfficeBearerItem): Observable<any> {
          let itemRowjson = {
            officebeaerername: itemrow.OfficeBearerName,
            adrline1: itemrow.AddressLine1,
            adrline2: itemrow.AddressLine2 == null ? "" : itemrow.AddressLine2,
            adrline3: itemrow.AddressLine3 == null ? "" : itemrow.AddressLine3,
            contactno1: itemrow.ContactNo1,
            contactno2: itemrow.ContactNo2 == null ? "" : itemrow.ContactNo2,
            email: itemrow.Email,
            gender: itemrow.Gender,
            updatedBy: "PortalUser"
          }
          return this.http.put(`${this.apiUrl}/update/${itemrow.ID}`, itemRowjson);
        } 
    
      deleteItem(itemID: number): Observable<any> {
          return this.http.delete(`${this.apiUrl}/delete/${itemID}`);
        }
}