import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-education-MadhuVadishyami',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'MadhuVadishyami' | translate }}
        </h1>

        <p>
          To sow the seeds of faith in the tender hearts of tiny-tots, the
          Balvikash Wing of Sri Sathya Sai Seva Organisations Odisha prayed
          Bhagavan for implementation of Madhu Vadishyami, A Divine Project in
          all our Sai Schools so that the <u>“Seeds of Faith”</u> will grow into
          <u>“Plants of Love”</u>. Bhagavan blessed our state profusely as a
          result of which the Balvikash Wing of Odisha could implement Madhu
          Vadishyami in all Sai Schools. The project was launched on 3rd July
          2023, on the occasion of holy Guru Purnima Day in Sai Janani
          Bhubaneswar and schools started offering their saadhana with Faith and
          Love at the Lotus Feet involving children, teachers and parents into
          it. Madhu Vadishyami...became their language, the language of their
          heart.
        </p>
        <p>
          Children, teachers and parents are writing Likhita Japa; schools are
          reverberating with Vedic Chants by children and teachers; Study
          Classes for children on Bhagavan’s Divine Life and Study Circles for
          teachers and parents on Bhagavan’s Divine Mission are being held;
          children and teachers are rendering their Loving Seva by cleaning
          school premises, distributing fruits in hospitals, helping in
          plantations, offering Jala-seva and maintaining discipline in Samithi
          activities; And everybody is deriving Divine Bliss from Bhajans.
        </p>
        <p>
          To put enthusiasm in children and parents and give momentum to the
          project, various participatory events are also being conducted under
          the banner of Madhu Vadishyami. Children are practicing CoD and
          organising CoD Exhibition. Parents are also with all enthusiasm taking
          part in Open Mic, Wishing Tree and Craft Workshops. The details of all
          these activities are being recorded in the Saadhana Darpana .
        </p>

        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class MadhuVadishyamiComponent implements OnInit {
  ngOnInit(): void {}
}
