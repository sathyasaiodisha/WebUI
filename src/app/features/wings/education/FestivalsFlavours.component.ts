import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-education-FestivalsFlavours',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'FestivalsFlavours' | translate }}
        </h1>

        <p>
          All stakeholders of BV experience a new flavour of Aradhana Mahotshava
          during 1st – 24th April every year. During this period celebrations
          are arranged in hundreds of BV Families. Aradhana Month is
          reverberated with Bhajan and Sathsang in every home.
        </p>
        <p>
          Adding to this flavour, the Eswaramma Week quickly comes to multiply
          the Divine Joy of BV Children. It touches every heart in a unique way.
          Every day in first week of May (1st – 7th) is a Day of Celebration by
          the children, of the children and for the children in their respective
          homes with their parents and other family members.
        </p>
        <p>
          The first day is the day of preparing the Home-Sweet-Home for
          celebration, the second day is for worshiping the parents in the
          feeling of Maatru Devo Bhabah, and the third day is the day of Plant
          Parenting which is celebrated with a promise to parent a plant by the
          child. The fourth day is meant for Blossoming of Excellences inherent
          in each child, the fifth day is for Swadhyaya Sadhana, the sixth day
          is dedicated to Mother Eswaramma, and the seventh day is for Happy
          Culmination of Eswaramma Week, nay, a beginning for a more purposeful
          life.
        </p>

        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class FestivalsFlavoursComponent implements OnInit {
  ngOnInit(): void {}
}
