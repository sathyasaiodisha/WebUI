import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgrammeItem } from '../models/programme';
import { EventItem } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'https://www.sathyasaiodisha.org/api/events';
  private bannerUploadApiUrl = 'https://www.sathyasaiodisha.org/api/upload/banner';
  private agendaUploadApiUrl = 'https://www.sathyasaiodisha.org/api/upload/agenda';

  constructor(private http: HttpClient) {}

    createPlan(itemrow: EventItem): Observable<any> {
      let itemRowjson = {
          activityID: itemrow.ActivityID,
          orgLevelID: itemrow.OrgLevelID,
          districtID: itemrow.DistrictID,
          samithiID: itemrow.SamithiID,
          eventTitle: itemrow.EventTitle,
          eventVenue: itemrow.EventVenue,
          eventDate: itemrow.EventDate,
          eventBannerImageUrl: itemrow.EventBannerImageUrl,
          eventAgendaImage1Url: itemrow.EventAgendaImage1Url,
          eventAgendaImage2Url: itemrow.EventAgendaImage2Url,
      }

      return this.http.post(`${this.apiUrl}/plans/add`, itemRowjson);
    }

    uploadEventBannerPhoto(fileToUpload: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', fileToUpload, "event-banner.jpg");
      return this.http.post<any>(`${this.bannerUploadApiUrl}`, formData,
        {
          observe: 'events',
          reportProgress: true
        }
      );
    }

    uploadEventAgendaPhoto1(fileToUpload: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', fileToUpload, "event-agenda1.jpg");
      return this.http.post<any>(`${this.agendaUploadApiUrl}`, formData,
        {
          observe: 'events',
          reportProgress: true
        }
      );
    }

    uploadEventAgendaPhoto2(fileToUpload: File): Observable<any> {
      const formData = new FormData();
      formData.append('file', fileToUpload, "event-agenda2.jpg");
      return this.http.post<any>(`${this.agendaUploadApiUrl}`, formData,
        {
          observe: 'events',
          reportProgress: true
        }
      );
    }
}