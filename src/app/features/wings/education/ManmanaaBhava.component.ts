import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-education-ManmanaaBhava',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'ManmanaaBhava' | translate }}
        </h1>
        <div class="carousel">
          <!--Image carousel (Each image is linked to a page)-->
          <app-slideshowimage [banner]="banner"></app-slideshowimage>
        </div>
        <p>
          Baba has clearly defined the Role of BV Gurus in the Bal Vikash
          Movement:
        </p>
        <p>
          “Parents of some children are not readily coming forward to enrol
          their children in the BV classes. You should explain to such parents
          about the true importance of BV and make an attempt to join their
          children in BV group.” BV Gurus therefore need to take this message to
          thousands of parents and would-be parents.
        </p>
        <p>
          With the sagacity of Manmanaa Bhava, BV Gurus in our state are
          reaching out Thousands of Parents to get them convinced and motivated
          towards the Divine Program of BV. This out-reach is slowly but
          certainly fulfilling Bhagavan’s Idea of reaching-out the parents
          thereby to ensure Shatasahasra Sanjogikarana.
        </p>
        <p>
          Launched on 3rd July 2023 on the holy Guru Purnima day, Manmanaa Bhava
          is in full swing in Odisha with its Five Petal – Parents Contact
          Program, Parents Meet, Parents Involvement Program, Parents Study
          Circles and SSS Dynamic Parenting.
        </p>
        <p>
          Expansion of and Involvement in BV is a continuous process. Where
          there is Involvement, there is Expansion. Manmanaa Bhava ensures
          involvement of BV Parents into the Divine Mission leading to
          expansion. Where there is Expansion, there is a Flow.Where there is a
          Flow, there is a Goal. And the Goal is to Restore Dharma.
        </p>
        <p></p>

        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class ManmanaaBhavaComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/education_wing/manmana_bhava.jpg', caption: '' }
  ];
}
