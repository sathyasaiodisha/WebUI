import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-spiritual',
  imports: [SharedModule],
  template: `
    <div class=" container py-2 px-4 border-secondary">
      <!--content_topgape-->
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Spiritual' | translate }}
        </h1>
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

        <div class="spiritual_wrapper">
          <div class="events">Alerts for events which are drawing near</div>
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage></app-slideshowimage>
          </div>
          <div class="recent">Recent and upcoming spiritual events</div>

          <div class="serviceR1">Sai Symphony</div>
          <div class="serviceR1">Vedic Prayer</div>
          <div class="serviceR1">Spiritual Activities</div>
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
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
