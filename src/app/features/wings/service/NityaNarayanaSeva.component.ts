import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-NityaNarayanaSeva',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'NityaNarayanaSeva' | translate }}
        </h1>
        <p>
          Nitya Narayan Seva is a regular food distribution service conducted by
          the members of Sri Sathya Sai Seva Organisation, Odisha as a part of
          their broader service activities aiming to help the hungry and needy
          everyday. Organisation has identified the needy Narayans those are
          helpless and live in without any support/assistance.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class NityaNarayanaSevaComponent implements OnInit {
  ngOnInit(): void {}
}
