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

  constructor(private http: HttpClient) {}

    createItem(itemrow: EventItem): Observable<any> {
      let itemRowjson = {
          activityID: itemrow.ActivityID,
          orgLevelID: itemrow.OrgLevelID,
          districtID: itemrow.DistrictID,
          samithiID: itemrow.SamithiID,
          eventTitle: itemrow.EventTitle,
          eventVenue: itemrow.EventVenue,
          eventDescription: itemrow.EventDescription,
          eventDate: itemrow.EventDate,
          eventAgendaImageUrl: itemrow.EventAgendaImageUrl
      }
      return this.http.post(`${this.apiUrl}/add`, itemRowjson);
    }
}