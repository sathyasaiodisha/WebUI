import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SanitationSeva',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SanitationSeva' | translate }}
        </h1>
        <p>
          Sanitation Seva is a form of community service inspired by the
          teachings of Sri Sathya Sai Baba, focusing on creating clean and
          hygienic public spaces. This voluntary initiative involves organizing
          cleaning drives in various locations, such as health centers, old age
          homes, and public areas like Market Area, Bus Stand, Railway Station,
          Hospitals, Schools, Temple premises as well as during famous
          festivals. The goal is to promote health and well-being within the
          community through selfless service and the cultivation of cleanliness
          as a spiritual value, as emphasized by the Sathya Sai philosophy.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SanitationSevaComponent implements OnInit {
  ngOnInit(): void {}
}
