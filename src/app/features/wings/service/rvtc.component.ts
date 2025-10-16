import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-rvtc',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'rvtc' | translate }}
        </h1>
        <p>
          The Rural Vocational Training (RVT), an initiative of the Sri Sathya
          Sai Seva Organisations, Odisha aims to empower rural youths by
          training them in practical, locally relevant skills such as plumbing,
          tailoring, electrical work, auto mechanic, mobile repairing and
          computer literacy etc. The program seeks to promote economic
          independence, reduce urban migration, and improve the living standards
          of rural communities by fostering self-employment and providing access
          to gainful employment through local service centers by competent
          trainers and partnerships with companies.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class rvtcComponent implements OnInit {
  ngOnInit(): void {}
}
