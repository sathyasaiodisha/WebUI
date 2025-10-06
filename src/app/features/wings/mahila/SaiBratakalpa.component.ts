import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SaiBratakalpa',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SaiBratakalpa' | translate }}
        </h1>
        <p>
          Sai Brata Kalpa is a devotional ritual or puja (worship ceremony)
          observed by sisters being organized at the community level (e.g., in
          "samithis" or local service units) to foster spiritual discipline,
          devotion, and service (seva). It draws inspiration from Sai Baba's
          teachings on love, truth, and selfless action, and is often performed
          by women's groups (Mahila wings) within the organisation.
        </p>
        <app-sub-sections-links
          [page]="'wings_ladies'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SaiBratakalpaComponent implements OnInit {
  ngOnInit(): void {}
}
