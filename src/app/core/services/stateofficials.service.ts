import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StateOfficeBearerItem {
  ID?: number;
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

export interface DesignationItem {
  ID?: number;
  DesignationCode: string;
  DesignationName: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateofficialsService {

  private apiUrl = 'https://www.sathyasaiodisha.org/api/stateofficebearers';
  private stateDesignationsUrl = 'https://www.sathyasaiodisha.org/api/statedesignations';

  constructor(private http: HttpClient) { }

  getItems(): Observable<StateOfficeBearerItem[]> {
      return this.http.get<StateOfficeBearerItem[]>(`${this.apiUrl}/all`);
    }

  getStateDesignations(): Observable<DesignationItem[]> {
      return this.http.get<DesignationItem[]>(this.stateDesignationsUrl);
    }

  createItem(itemrow: StateOfficeBearerItem): Observable<any> {
        let itemRowjson = {
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
  
    updateItem(itemrow: StateOfficeBearerItem): Observable<any> {
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
