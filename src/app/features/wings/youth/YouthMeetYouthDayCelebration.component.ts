import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-YouthMeetYouthDayCelebration',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'YouthMeetYouthDayCelebration' | translate }}
        </h1>
        <p>
          Sai Youths of Odisha engage in various spiritual and service
          activities as inspired by Swami. One day is observed as Youth Day in
          which various programmes such as organizing Rallies for Unity and
          Walks for Values to promote spiritual and human values etc are taken
          up. Every year Youth Meets at District, Zonal & State Level are also
          organised in which large numbers of youths participate, deliberate on
          action plans, share their devotional experiences, and expressg
          gratitude to Sri Sathya Sai Baba.
        </p>
        <app-sub-sections-links [page]="'wings_youth'"></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class YouthMeetYouthDayCelebrationComponent implements OnInit {
  ngOnInit(): void {}
}
