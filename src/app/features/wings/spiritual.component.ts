import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-spiritual',
  imports: [SharedModule, RouterLink, RouterLinkActive],
  template: `
    <div class=" container py-2 px-4 border-secondary">
      <!--content_topgape-->
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Spiritual' | translate }}
        </h1>

        <div class="spiritual_wrapper_top">
          <div class="events">Alerts for events which are drawing near</div>
          <a class="eventLink" routerLink="/events/spiritual"
            >Link to recent and upcoming events</a
          >
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage></app-slideshowimage>
          </div>
        </div>

        <p>
          "When there is purity in thought, word and deed human values are
          practised."<br />
          More<br />
          The Spiritual Wing is an integral part of the Sri Sathya Sai Seva
          Organization. The primary objective of this wing is to facilitate
          devotees’ spiritual progress based on Swami’s teachings by conducting
          multiple spiritual activities like Namasmaran, Study Circle, Sadhana
          Camp, Vedic Prayer, Lakhyarchana, Bratakalpam, Parayan, Nagar
          Sankirtanam, Seminar & Symposiums, Value based Cultural programmes,
          Bhajan & Spiritual Discussions at public places / Jail etc. in
          accordance with the organization’s guidelines. These activities richly
          complement those of the other Wings of the Organization (Educational
          and Service) in spreading Swami’s message to the broader community and
          in helping individuals progress on the Divine journey.
        </p>

        <div class="spiritual_wrapper_bottom">
          <a
            *ngFor="let link of links"
            class="serviceR1"
            [routerLink]="link.url"
            routerLinkActive="active"
            >{{ link.name }}</a
          >
        </div>
      </div>
    </div>
  `,
})
export class SpiritualComponent implements OnInit {
  // data: {
  //   designation: string;
  //   name: string;
  //   phoneNo: string;
  //   whatsAppNo: string;
  //   emailid: string;
  // }[] = [];
  links = [
    { name: 'Sai Symphony', url: '/' },
    { name: 'Veda Prabaham', url: '/wings' },
    { name: 'Bhajan', url: '/wings/spiritual' },
    { name: 'Study circle', url: '/wings/spiritual' },
    { name: 'Parthi Yatra', url: '/wings/spiritual' },
    { name: 'Jyothi Yatra', url: '/wings/spiritual' },
  ];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
