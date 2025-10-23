import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-sss-life',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri_Sathya_Sai_life_title' | translate }}
        </h1>
        <p>{{ 'Sri_Sathya_Sai_life_p1' | translate }}</p>
        <p>{{ 'Sri_Sathya_Sai_life_p2' | translate }}</p>
        <p>{{ 'Sri_Sathya_Sai_life_p3' | translate }}</p>
        <p>{{ 'Sri_Sathya_Sai_life_p4' | translate }}</p>
        <p>{{ 'Sri_Sathya_Sai_life_p5' | translate }}</p>
        <p>{{ 'Sri_Sathya_Sai_life_p6' | translate }}</p>
        <p>
          Source: www.srisathyasai.org SRI SATHYA SAI TIME LINE:<a
            href="https://www.srisathyasai.org/sai-timeline"
            target="_blank"
            rel="noopener"
            >https://www.srisathyasai.org/sai-timeline</a
          >
        </p>
      </div>
    </div>
  `,
})
export class LifeComponent implements OnInit {
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
