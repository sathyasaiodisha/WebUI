import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityItem } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private apiUrl = 'https://www.sathyasaiodisha.org/api/activities'; 

  constructor(private http: HttpClient) {}

  getItems(): Observable<ActivityItem[]> {
      return this.http.get<ActivityItem[]>(`${this.apiUrl}/all`);
    }

  getActivitiesByProgrammeId(programmeID: number): Observable<ActivityItem[]> {
      return this.http.get<ActivityItem[]>(`${this.apiUrl}/${programmeID}`);
    }

  getActivitiesByProgrammeIdAndOrgLvl(programmeID: number, orgLevel: number): Observable<ActivityItem[]> {
      return this.http.get<ActivityItem[]>(`${this.apiUrl}/${programmeID}/${orgLevel}`);
    }
}