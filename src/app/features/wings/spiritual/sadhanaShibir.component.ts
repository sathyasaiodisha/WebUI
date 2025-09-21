import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-sadhanaShibir',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SADHANA SIBIR- SADHANA CAMP' | translate }}
        </h1>
        <p>
          A Sadhana Shibir is a spiritual retreat or gathering organized by the
          Sri Sathya Sai Seva Organisations, Odisha, to foster spiritual growth
          and service among devotees. These events include devotional practices
          like Veda chanting, bhajans, and meditation, along with talks on
          spiritual subjects and community service activities. This is a regular
          event through out the year at Samithi/District/Zonal/State Levels.
        </p>
      </div>
    </div>
  `,
})
export class SadhanaShibirComponent implements OnInit {
  ngOnInit(): void {}
}
