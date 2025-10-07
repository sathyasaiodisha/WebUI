import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-PrasanthiSeva',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'PrasanthiSeva' | translate }}
        </h1>
        <p>
          Prasanthi Seva refers to the service performed by devotees in
          thousands from the state of Odisha at Prasanthi Nilayam, the ashram of
          Sri Sathya Sai Baba. These dedicated volunteers, known as Sevadals,
          offer their time and energy for specific periods, participating in
          various duties such as sanitation, discipline, security etc. within
          the ashram every year. This selfless service is a significant offering
          of love and gratitude from the Odisha Sai devotees to their Divine
          Master, often undertaken with deep reverence.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class PrasanthiSevaComponent implements OnInit {
  ngOnInit(): void {}
}
