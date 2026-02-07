import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WingItem } from '../models/wing';

@Injectable({
  providedIn: 'root'
})
export class WingService {

  private apiUrl = 'https://www.sathyasaiodisha.org/api/wings'; 

  constructor(private http: HttpClient) {}

  getItems(): Observable<WingItem[]> {
    return this.http.get<WingItem[]>(this.apiUrl);
  }
}
