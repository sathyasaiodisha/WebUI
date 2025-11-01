import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SSSOOTweet {
  ID?: number;
  TweetID?: number;
  TweetText?: string;
  TweetLongText?: string;
  CreatedDate?: Date;
  TweeterUserName?: string;
  UserProfileImgUrl?: string;
  MediaType?: string;
  MediaKey?: number,
  MediaUrl?: string
}

@Injectable({
  providedIn: 'root'
})
export class SSSOOtweetsService {

  private apiUrl = 'https://www.sathyasaiodisha.org/api/sssootweets';

  constructor(private http: HttpClient) { }
  
  getItems(): Observable<SSSOOTweet[]> {
      return this.http.get<SSSOOTweet[]>(`${this.apiUrl}`);
    }
}
