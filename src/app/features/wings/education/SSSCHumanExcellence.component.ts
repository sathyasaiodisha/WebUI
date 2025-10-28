import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-education-SSSCHumanExcellence',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SSSCHumanExcellence' | translate }}
        </h1>

        <p>
          Bhagavan says,
          <i
            >“....People feel that education helps in materialistic pursuits and
            rest content with this. This is not a right attitude. Education
            should promote culture. It is not by education alone but by culture
            that one gets refined.... What is education without culture? It is
            like a kite cut off from its main thread. It is not possible to
            predict where this kite would land....”</i
          >.
        </p>
        <p>
          Therefore, the development of approaches to
          <b><i>“education-interweaved-with-culture”</i></b> needs to be placed
          in the global context but rooted in the national and local cultural
          needs. The research paradigms in this field needs to be evolved.
          Keeping this in mind and taking it forward and inward, a Research
          Institute with the name
          <b><i>“Sri Sathya Sai Centre for Human Excellence (SSSCHE)”</i></b>
          and with the moral <b><i>“Tasya Pragnya Pratisthitaa”</i></b> has been
          established in the premises of Sai Janani Bhubaneswar.
        </p>
        <p>
          The SSSCHE aims at Creating an opportunity for the pursuit of research
          in the fields of Spirituality & Culture, Ensuring its visibility in
          the society by empowering itself to confer Academic Degrees (Diplomas,
          Certificate Courses, etc.), Digitizing the ancient literatures,
          Establishing a Digital Library, Imparting training and orientation,
          Conducting short-term as well as residential long-term courses,
          Conducting Workshops, Seminars, Symposia, Conferences, Setting up of a
          Library with a well-furnished Reading Room with acquisition of Sai
          Literatures along with other classic publications, Using Social Media
          Platform like its own Website, Twitter/FB Page, etc.
        </p>

        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SSSCHumanExcellenceComponent implements OnInit {
  ngOnInit(): void {}
}
