import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-education-AnandaUdyan',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'AnandaUdyan' | translate }}
        </h1>

        <p>
          In a letter to His elder brother Bhagavan wrote in 1947, “I have a
          task, to foster all mankind and ensure them lives full of Ananda.” So
          His Mission was to ensure a life full of Ananda for all. His call
          therefore was, “I am Ananda Swarupa. Come and take as much Ananda as
          you can from Me.” To fulfil His Divine Mission, Bhagavan granted
          mankind His greatest gift, Sri Sathya Sai Seva Organisation. Every
          activity of Sai Organisation aims at giving Ananda to the
          participants. Ananda Udyaan is one such activity.
        </p>
        <p>
          Ananda Udyaan is a unique initiative of the Balvikas Wing of Sri
          Sathya Sai Seva Organisations Odisha. It is a one-year Pre-Balvikas
          Program which serves as a Purposeful Nursery leading to Balvikas. It
          is a village-based program which was started in Odisha in November
          2023.
        </p>
        <p>
          Ananda Udyaan Centres are being run in villages where there is no
          Balvikas with an aim to start Balvikas there after one year of
          completion of Ananda Udyaan. In all these villages children from all
          age groups are participating in this program. A specific syllabus
          which is inspiring and enjoyable for village children is being
          implemented for this purpose. To give support to Ananda Udyaan Gurus,
          two state level training programs have already been conducted through
          which 195 gurus have undergone training and acquired required skill to
          run Ananda Udyaan Centres.
        </p>
        <p>
          Now Ananda Udyaan is in full swing leading to the formation of 123 new
          Rural Balvikas Centres in November 2024 with thousands of Balvikas
          Children and hundreds of Balvikas Gurus. This will give momentum to
          the Gram Seva activities in many new villages.
        </p>
        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class AnandaUdyanComponent implements OnInit {
  ngOnInit(): void {}
}
