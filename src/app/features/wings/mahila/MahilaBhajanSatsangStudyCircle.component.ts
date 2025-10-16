import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-MahilaBhajanSatsangStudyCircle',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'MahilaBhajanSatsangStudyCircle' | translate }}
        </h1>
        <p>
          SAI PREMADHARA is an innovative program of the Sri Sathya Sai Seva
          Organisations,Odisha, that organizes spiritual and service activities
          in adopted villages to spread Sri Sathya Sai Baba's message of love
          and service focusing on care for mothers and children specifically
          pregnant and lactating mothers. The program involves community
          upliftment, such as health awareness, nutritional support with Sai
          Protein, and spiritual activities like bhajans and cultural events.
        </p>
        <app-sub-sections-links
          [page]="'wings_ladies'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class MahilaBhajanSatsangStudyCircleComponent implements OnInit {
  ngOnInit(): void {}
}
