import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface DesignationItem{
  ID?: number;
  DesignationName: string;
  DesignationCode: string;
  HierarchyOrder: string;
  OrgLevelID?: string;
  isEditing?: boolean;
  gentsAndLadies?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  private apiUrl = 'https://www.sathyasaiodisha.org/api/designations';
  constructor(private http: HttpClient) { }

  getItems(): Observable<DesignationItem[]> {
    return this.http.get<DesignationItem[]>(this.apiUrl);
  }

  createItem(itemrow: DesignationItem): Observable<any> {
    let itemRowjson = {
      designationName: itemrow.DesignationName,
      designationCode:itemrow.DesignationCode,
      hierarchyOrder: itemrow.HierarchyOrder,
      orgLevelID: itemrow.OrgLevelID?.toString(),
      createdBy: "PortalUser",
      gentsAndLadies: itemrow.gentsAndLadies
    }
    return this.http.post(`${this.apiUrl}/add`, itemRowjson);
  }

  updateItem(itemrow: DesignationItem): Observable<any> {
    let itemRowjson = {
      designationName: itemrow.DesignationName,
      designationCode:itemrow.DesignationCode,
      hierarchyOrder: itemrow.HierarchyOrder.toString(),
      updatedBy: "PortalUser"
    }
    return this.http.put(`${this.apiUrl}/update/${itemrow.ID}`, itemRowjson);
  }

  deleteItem(itemID: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${itemID}`);
  }
}
