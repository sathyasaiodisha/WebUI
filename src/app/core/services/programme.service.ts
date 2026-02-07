import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgrammeItem } from '../models/programme';

@Injectable({
  providedIn: 'root'
})

export class ProgrammeService {
  private apiUrl = 'https://www.sathyasaiodisha.org/api/programmes';
  private apiByOrgLvlUrl = 'https://www.sathyasaiodisha.org/api/orglevel';

  constructor(private http: HttpClient) {}

  getItems(): Observable<ProgrammeItem[]> {
      return this.http.get<ProgrammeItem[]>(`${this.apiUrl}/all`);
    }

  getProgrammesByWingId(wingID: number, orgLvlID: number): Observable<ProgrammeItem[]> {
      return this.http.get<ProgrammeItem[]>(`${this.apiUrl}/${orgLvlID}/${wingID}`);
    }

  getProgrammesByOrgLevel(orgLvlID: number): Observable<ProgrammeItem[]> {
      return this.http.get<ProgrammeItem[]>(`${this.apiByOrgLvlUrl}/${orgLvlID}/programmes`);
    }
}
