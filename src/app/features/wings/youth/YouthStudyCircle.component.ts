import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-YouthStudyCircle',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'YouthStudyCircle' | translate }}
        </h1>
        <p>
          The Youth Study Circle by Sai Youths of Odisha, is a regular activity
          where young members gather to discuss Swami's teachings (Sri Sathya
          Sai Baba's discourses and teachings) to foster spiritual growth and
          gain deeper understanding of their practical application.
        </p>
        <app-sub-sections-links [page]="'wings_youth'"></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class YouthStudyCircleComponent implements OnInit {
  ngOnInit(): void {}
}
