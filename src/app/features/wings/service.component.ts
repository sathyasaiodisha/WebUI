import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [SharedModule, RouterLink, RouterLinkActive],
  template: `
    <div class="container py-2 px-4 border-secondary">
      <!--content_topgape-->
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Service' | translate }}
        </h1>
        <div class="service_wrapper_top">
          <div class="events">Alerts for events which are drawing near</div>
          <a
            title="Link to recent and upcoming events"
            class="eventLink"
            routerLink="/events/service"
            >Events</a
          >
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage></app-slideshowimage>
          </div>
        </div>

        <p>
          The Concept of Service in Sri Sathya Sai Mission Though there are many
          path-ways to God realization, yet the easiest among them is the path
          of service - for it is not confined to any boundaries or borders and
          completely secular in nature. Service essentially is a spontaneous
          feeling for serving and helping the needy in any form. In other words,
          service is actually the true character of the human body. The service
          is rendered in communities across the globe with an underlying concept
          of “the person who serves is the person served”. Sri Sathya Sai Baba
          says, ‘Love All Serve All’, ‘Help Ever Hurt Never’ and ‘The Hands that
          serve are holier than the lips that pray’. Encompassing this Divine
          concept, the service wing of the Sri Sathya Sai Seva Organisation,
          coordinates internally to help compliment the activities of the
          spiritual and educational wing as well. The activities conducted
          include – Sri Sathya Sai Village Integrated Programme, Sri Sathya Sai
          Holistic Health Care, Sri Sathya Sai Integrated Animal Care, Seva
          during Disasters / Natural calamities, National Narayan Seva etc.
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
export class ServiceComponent implements OnInit {
  // data: {
  //   designation: string;
  //   name: string;
  //   phoneNo: string;
  //   whatsAppNo: string;
  //   emailid: string;
  // }[] = [];
  links = [
    { name: 'Agri care', url: '/' },
    { name: 'Animal care', url: '/wings' },
    { name: 'Aqua care', url: '/wings/service' },
    { name: 'Digital archive', url: '/wings/service' },
    { name: 'Holistic health', url: '/wings/service' },
    { name: 'Blood donation', url: '/wings/service' },
  ];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
