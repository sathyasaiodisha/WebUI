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
          {{ 'Sri Sathya Sai Central Trust' | translate }}
        </h1>
        <p>
          About Sri Sathya Sai Trust, Odisha The Sri Sathya Sai Trust, Odisha
          (SSSTO), established in 1976 under the divine guidance of Bhagawan Sri
          Sathya Sai Baba, functions as a public charitable trust based in
          Bhubaneswar. The Trust was created as an instrument of His love and
          compassion, with the sole objective of serving society through
          large-scale humanitarian projects. Over the years, SSSTO has reached
          thousands across Odisha through a wide range of
          initiatives—construction of homes for disaster-affected families,
          provision of safe drinking water in fluoride- and salinity-prone
          regions, healthcare projects including mobile hospitals and
          rehabilitation clinics, skill development centres for youth and women,
          and educational institutions imparting value-based learning. Every
          activity is provided free of cost to the beneficiaries, reflecting
          Bhagawan’s dictum that “Service to Man is Service to God. ” The work
          of the Trust is enabled by the tireless efforts of volunteers from the
          Sri Sathya Sai Seva Organisations, Odisha, who are inspired by His
          teachings of Love All, Serve All.
        </p>
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
