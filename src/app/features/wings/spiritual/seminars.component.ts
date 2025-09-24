import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-seminars',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SEMINAR – SYMPOSIUM-EXHIBITION' | translate }}
        </h1>
        <p>
          Sri Sathya Sai Seva Organisation, Odisha, regularly host seminars,
          symposiums, and exhibitions focused on human values, spiritual and
          educational development, and community service. These events serve to
          promote the organization's mission and offer platforms for spiritual
          and personal growth. Well researched content were compiled and
          developed with help of Multimedia platform both virtually & physically
          on aptly selected Topics/Themes for the event. The same was carried to
          different parts of Odisha for devotees and to educational institutions
          for students and intellectuals.
        </p>
      </div>
    </div>
  `,
})
export class SeminarsComponent implements OnInit {
  ngOnInit(): void {}
}
