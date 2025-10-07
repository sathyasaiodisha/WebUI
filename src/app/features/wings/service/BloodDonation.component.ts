import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-BloodDonation',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'BloodDonation' | translate }}
        </h1>
        <p>
          The Sathya Sai Seva Organisation runs the "Liquid Love" and "Amrut
          Bindu" blood donation initiatives to serve patients in need and
          promote voluntary blood donation. They organize blood donation camps,
          collaborate with hospitals, and provide registration for potential
          donors via online portals.
        </p>
        <p>
          Prema Sanjivani: This is the Blood Donation initiatives through which
          blood units are collected through camps round the year across the
          state.
        </p>
        <p>
          Amruta Bindu: This is a special drive of blood donation during summer
          as there is acute shortage felt all across.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class BloodDonationComponent implements OnInit {
  ngOnInit(): void {}
}
