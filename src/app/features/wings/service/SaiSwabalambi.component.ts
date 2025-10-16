import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SaiSwabalambi',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SaiSwabalambi' | translate }}
        </h1>
        <p>
          SSSSO Odisha rose to the occasion to serve the people of Odisha who
          were subject to endless sufferings. The State Organisation embarked
          upon providing sustainable life support to the people who have lost
          their work outside the state and are not in a position to go back to
          their place of work outside. Sai Swabalambi is a self-reliance project
          of Sri Sathya Sai Seva Organisations, Odisha to make the people
          self-reliant and bring back smiles on their face.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SaiSwabalambiComponent implements OnInit {
  ngOnInit(): void {}
}
