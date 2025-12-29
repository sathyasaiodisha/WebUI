import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SaiSandeshItem {
  SaiSandeshPhoto: string,
  isEditing?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SaisandeshService {
  private saiSandeshUpoadUrl = 'https://www.sathyasaiodisha.org/api/uploadsaisandesh';
  constructor(private http: HttpClient) { }

  uploadSaiSandeshPhoto(fileToUpload: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', fileToUpload, "sai-sandesh.jpg");
      return this.http.post<any>(`${this.saiSandeshUpoadUrl}`, formData,
        {
          observe: 'events',
          reportProgress: true
        }
      );
    }
}