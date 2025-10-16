import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-MaintainingOfSpiritualDairy',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'MaintainingOfSpiritualDairy' | translate }}
        </h1>
        <p>
          Sai Youths in Odisha, maintaining a spiritual diary involves regular
          self-introspection based on the teachings of Sri Sathya Sai Baba. It
          serves as a tool for character development and tracking spiritual
          progress by documenting adherence to the organizati. on's principles
          and daily spiritual practices.
        </p>
        <app-sub-sections-links [page]="'wings_youth'"></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class MaintainingOfSpiritualDairyComponent implements OnInit {
  ngOnInit(): void {}
}
