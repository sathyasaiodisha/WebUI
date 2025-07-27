import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://dummy-json.mock.beeceptor.com/posts';
  private apiStateCoordinatorsUrl = '/assets/data/stateCoordinators.json';
  private apiSICUrl = '/assets/data/sic.json';
  private apiDistrictPresidentsUrl = '/assets/data/districtPresidents.json';
  private apiDistrictCoordinatorsUrl = '/assets/data/districtCoordinator.json';
  private apiSamithiConvenorsUrl = '/assets/data/samithiConvenors.json';
  private apiSamithisUrl = '/assets/data/samithis.json';
  private apiBhajanMandalisUrl = '/assets/data/bhajanMandalis.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getStateCoordinators(): Observable<any> {
    return this.http.get<any>(this.apiStateCoordinatorsUrl);
  }
  getSICs(): Observable<any> {
    return this.http.get<any>(this.apiSICUrl);
  }
  getDistrictPresidents(): Observable<any> {
    return this.http.get<any>(this.apiDistrictPresidentsUrl);
  }
  getDistrictCoordinators(): Observable<any> {
    return this.http.get<any>(this.apiDistrictCoordinatorsUrl);
  }
  getSamithiConvenors(): Observable<any> {
    return this.http.get<any>(this.apiSamithiConvenorsUrl);
  }
  getSamithis(): Observable<any> {
    return this.http.get<any>(this.apiSamithisUrl);
  }
  getBhajanMandalis(): Observable<any> {
    return this.http.get<any>(this.apiBhajanMandalisUrl);
  }
}
