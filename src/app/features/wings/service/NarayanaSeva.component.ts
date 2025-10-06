import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-NarayanaSeva',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'NarayanaSeva' | translate }}
        </h1>
        <p>
          Sri Sathya Sai Summer course is one of the outreach activities by the
          Youth wing of SSSSO Odisha, where the youths from the educational
          institutions are approached, appreciated with the importance of Indian
          Culture and spirituality based on the summer showers at Brindaban. The
          summer course over the years has come up as an unique platform to
          reenergize youths of the state.
        </p>
        <app-sub-sections-links [page]="'wings_youth'"></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class NarayanaSevaComponent implements OnInit {
  ngOnInit(): void {}
}
