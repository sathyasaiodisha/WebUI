import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-stateCoordinators',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'sssTrustOdisha_about_t' | translate }}
        </h1>
        <p>
          {{ 'sssTrustOdisha_about_p1' | translate }}
        </p>
        <b>
          {{ 'sssTrustOdisha_about_p2' | translate }}
        </b>
        <p>
          {{ 'sssTrustOdisha_about_p3' | translate }}
        </p>
        <ol>
          <li>{{ 'sssTrustOdisha_about_ul1' | translate }}</li>
          <li>{{ 'sssTrustOdisha_about_ul2' | translate }}</li>
          <li>{{ 'sssTrustOdisha_about_ul3' | translate }}</li>
          <ol>
            <li>{{ 'sssTrustOdisha_about_ul3_1' | translate }}</li>
            <li>{{ 'sssTrustOdisha_about_ul3_2' | translate }}</li>
            <li>
              {{ 'sssTrustOdisha_about_ul3_3' | translate }}
            </li>
          </ol>
          <li>{{ 'sssTrustOdisha_about_ul4' | translate }}</li>
          <ol>
            <li>{{ 'sssTrustOdisha_about_ul4_1' | translate }}</li>
            <li>{{ 'sssTrustOdisha_about_ul4_2' | translate }}</li>
          </ol>
          <li>{{ 'sssTrustOdisha_about_ul5' | translate }}</li>
          <li>{{ 'sssTrustOdisha_about_ul6' | translate }}</li>
        </ol>
      </div>
    </div>
  `,
})
export class CentralTrustComponent implements OnInit {
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
