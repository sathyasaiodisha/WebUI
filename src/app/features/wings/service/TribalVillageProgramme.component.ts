import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-TribalVillageProgramme',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'TribalVillageProgramme' | translate }}
        </h1>
        <p>
          Sri Sathya Sai Tribal Development Programme is a nationwide initiative
          that includes efforts in Odisha to uplift tribal communities. The
          broader program integrates multiple areas of service, including
          education, healthcare, and economic empowerment, with the aim of
          holistic village transformation.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class TribalVillageProgrammeComponent implements OnInit {
  ngOnInit(): void {}
}
