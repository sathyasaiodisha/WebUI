import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-education-SriSathyaSaiVidyaJyothi',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SriSathyaSaiVidyaJyothi' | translate }}
        </h1>
        <p>
          Sri Sathya Sai Vidyajyothi programme, a national initiative has been
          taken up by the Sri Sathya Sai Seva Organisations, Odisha, with an
          objective of empowering schools so as to improve the holistic learning
          and character development of students in selected rural and backward
          government schools. Key activities include providing education in
          human values through Bal Vikas classes, offering medical and
          nutritional support, donating study materials, teaching aids and
          libraries, and involving the community in school improvement.
        </p>
        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SriSathyaSaiVidyaJyothiComponent implements OnInit {
  ngOnInit(): void {}
}
