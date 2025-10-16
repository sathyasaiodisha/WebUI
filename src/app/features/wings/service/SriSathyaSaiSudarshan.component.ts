import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SriSathyaSaiSudarshan',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SriSathyaSaiSudarshan' | translate }}
        </h1>
        <p>
          Sri Sathya Sai Seva Organisation,Odisha conducts regularly disaster
          management activities programmes through trained volunteers, not only
          to increase the awareness, but also to equip them with the skills and
          confidence to become first responders in emergencies. Further it also
          provides relief and rescue support during calamities like floods,
          Cyclones, Fire and Accidents etc. They offer essential supplies,
          emotional support, and post-disaster reconstruction.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SriSathyaSaiSudarshanComponent implements OnInit {
  ngOnInit(): void {}
}
