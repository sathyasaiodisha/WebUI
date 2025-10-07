import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-education-NityaSikshyaDana',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'NityaSikshyaDana' | translate }}
        </h1>
        <p>
          Nitya Sikhya Danam (NSD) is a project by the Sri Sathya Sai Seva
          Organisations, Odisha that provides free educational support to
          underprivileged children, focusing on strengthening their foundation
          in basic subjects and instilling human values within them. NSD focuses
          on reinforcing fundamental skills in subjects such as English,
          Mathematics, and Odia, especially for children in government schools
          in villages and slums. In addition to academic learning, a core
          objective is to instill human values such as truth, right conduct,
          peace, love, and non-violence. The goal is to develop character and
          moral integrity in the children. By combining academics with values
          and character-building, the project aims for the all-round development
          of children, helping them become responsible and compassionate members
          of society. Like many of the Sathya Sai educational initiatives, the
          services provided through this project are free of charge. Presently
          being organized in various locations, including Bhubaneswar, Nuapada
          etc the program aims to provide a holistic education that goes beyond
          academics and emphasizing quote of Bhagwan Baba "Education is for Life
          not for mere Living".
        </p>
        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class NityaSikshyaDanaComponent implements OnInit {
  ngOnInit(): void {}
}
