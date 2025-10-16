import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-NationalInitiatives',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'NationalInitiatives' | translate }}
        </h1>
        <p>
          The national initiatives involving Sai Youths include participating in
          the Sri Sathya Sai National Leadership Programme (SSSNLP), which
          provides value-based education for character development and
          nation-building. Sri Sathya Sai National Leadership Programmed for
          Self-Transformation (SSSNLP) is one of the flagship programme of the
          Organisation for the youth.It is a 9-months online, value-based
          certificate course for the Young Adults between the age of 21 and 35
          years highlighting the importance of Individual Character for Nation
          Building built on a solid foundation of Self Mastery.
        </p>
        <app-sub-sections-links [page]="'wings_youth'"></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class NationalInitiativesComponent implements OnInit {
  ngOnInit(): void {}
}
