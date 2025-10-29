import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-Videos',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Videos' | translate }}
        </h1>

        <div class="row">
          <div class="col-md-3">
            <ul class="nav flex-column leftMenu">
              @for(v of videos;track v; let i = $index) {
              <li class="nav-item">
                <a
                  [class]="{ active: selected === i, 'nav-link': true }"
                  (click)="selected = i"
                >
                  {{ v.title }}
                </a>
              </li>
              }
            </ul>
          </div>
          <div class="col-md-9" style="text-align: center;">
            <iframe
              width="100%"
              height="500"
              [src]="getURL()"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <a href="https://www.youtube.com/@PrasanthiExpress" target="_blank"
        ><h3>Prasanthi Express</h3></a
        >
        <a href="https://www.youtube.com/@sathyasaiodisha" target="_blank"
        ><h3>Sri Sathya Sai Seva Organisations, Odisha</h3></a
        >
        <a href="https://youtube.com/@srisathyasaivandanam" target="_blank"
        ><h3>Sri Sathya Sai Vandanam, SSSSO Odisha</h3></a
        >
      </div>
    </div>
  `,
})
export class VideosComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  selected: number = 0;
  videos = [
    {
      title: 'Journey of Odisha with Sri Sathya Sai',
      url: 'https://www.youtube-nocookie.com/embed/videoseries?si=ASH7XEkMiGZseUfN&amp;list=PL4F97Peh1Vy60Xewo8rRfZi_5Nj67LQpF',
    },
    {
      title: 'Odisha Bhajan Sandhya 2023',
      url: 'https://www.youtube-nocookie.com/embed/jyl5mPaauYM?si=9cSaYVhC84OelpkX',
    },
    {
      title: 'Parthi Yatra Odisha A Glimpse | Sssso, Odisha',
      url: 'https://www.youtube-nocookie.com/embed/jyl5mPaauYM?si=9cSaYVhC84OelpkX',
    },
    {
      title: 'Liquid Love Donor Registration/Blood',
      url: 'https://www.youtube-nocookie.com/embed/IccgcivS3sw?si=F01H8UqbwR12BWkJ',
    },
    {
      title:
        'Nuakhai Bhet Ghat by Sai Sanatani, Sri Sathya Sai Seva Organisations, Odisha on 14.09.2025',
      url: 'https://www.youtube-nocookie.com/embed/-0kOeyAJVls?si=tgh_3kPaBITb-F3b',
    },
    {
      title: 'Awareness on Video Liquid Love and Blood Donation',
      url: 'https://www.youtube-nocookie.com/embed/hJ1eDYn47pw?si=H3ydKiXM9cRmCM-_',
    },
    {
      title:
        'Sharing some glimpses Sri Sathya Sai Prema Tharu planted by various units of the Org. across Odisha',
      url: 'https://www.youtube-nocookie.com/embed/hOGaCDuZC5c?si=inuEASyyjnIvuJpy',
    },
    {
      title:
        'Some glimpses of Raja festival celebration by the sisters of SSSSO, Odisha across the state',
      url: 'https://www.youtube-nocookie.com/embed/5S-Lsl1omkM?si=b-jU85Do_LvOsPud',
    },
    {
      title: 'Sri Sathya Sai Divya Paduka Yatra, Odisha',
      url: 'https://www.youtube-nocookie.com/embed/AgGwyoUdKn0?si=YXQkxDLpIZwAM-HC',
    },
    {
      title:
        'Address by Sri Amiya Ranjan Kanungo, State Education Coordinator at Sai Kulwant Hall',
      url: 'https://www.youtube-nocookie.com/embed/ZAup33R486A?si=kzdYH6zafIuihCq6',
    },
    {
      title: 'District Presidents Spiritual Retreat',
      url: 'https://www.youtube-nocookie.com/embed/9ROxmrffCiQ?si=oK9xgMUd1BB7CRmv  ',
    },
    {
      title:
        'On March 30th 2025, Sri Sathya Sai Seva Organisations Odisha observed Grama Seva Sankalpa Divas',
      url: 'https://www.youtube-nocookie.com/embed/lELPmj6MKW0?si=3_R-0Ksij0mnL0Wp',
    },
    {
      title:
        '2025 03 27 Partisudha- Special Episode on Sri Sathya Sai Bhajan Mahotsavam',
      url: 'https://www.youtube-nocookie.com/embed/Dast7hK7Lj8?si=5NS3OyV3fQoYqxzM',
    },
    {
      title:
        'Chitravati Arati',
      url: 'https://youtu.be/FBzk-1f9eWg?si=trUoxkgPaxZELsys',
    },
    {
      title:
        'Lambodara Hey Gowri Nandana',
      url: 'https://youtu.be/qE0f1v1Rrts?si=Ftkq0woYHGiqtCPq',
    },
    {
      title:
        'Tum Sang Baandhi Prem Ki Dori',
      url: 'https://youtu.be/Ty9TckHztNg?si=WedbXwsWHYlnHahQ',
    },
    {
      title:
        'Sri Guru Paduka Stotram',
      url: 'https://youtu.be/61YqlmAJJr0?si=ymp0UIq1TWy8oJ5l',
    },
    {
      title:
        'Tuma Binu Anya Gati Nahin',
      url: 'https://youtu.be/GanMOAuHzrY?si=eiC3Zhcgst99nwq6',
    },
    {
      title:
        'Rama Shri Ramachandra Jaya Jaya Rama',
      url: 'https://youtu.be/u-YeGZkch8E?si=616gU8jj2n-DhVtg',
    },
    {
      title:
        'Shirdi Nivasa Sai Shankara',
      url: 'https://youtu.be/fc7FDlSXnsM?si=HyYojU-ItaHE4MXi',
    },
  ];
  ngOnInit(): void {}
  getURL() {
    let safeUrl: SafeResourceUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(
        this.videos[this.selected].url
      );
    return safeUrl;
  }
}
