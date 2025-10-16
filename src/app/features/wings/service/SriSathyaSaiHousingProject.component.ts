import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SriSathyaSaiHousingProject',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SriSathyaSaiHousingProject' | translate }}
        </h1>
        <p>
          Sri Sathya Sai Housing Project(SSSHP) in Odisha was initiated by the
          Sri Sathya Sai Central Trust in 2008 to provide flood-resistant homes
          for victims of the 2008 Odisha floods, fulfilling Bhagwan Sri Sathya
          Sai Baba's promise to rebuild the lives of those affected. The project
          involved extensive surveys, detailed construction, and the
          distribution of essential items, with the Trust and the Sri Sathya Sai
          Seva Organisation working together. Overall, around 700 houses were
          constructed in 16 villages of three districts of Cuttack, Kendrapara
          and Puri, and handed over to the beneficiaries in a record time of
          less than a year.
        </p>

        <p>
          In September 2011, when the fury of floods in Mahanadi and other
          rivers wreaked havoc in Odisha submerging hundreds of villages and
          affecting the lives of thousands, Sri Sathya Sai Central Trust came
          forward to provide solace to the worst affected people with the
          commencement of the second phase of its Housing Project in January
          2013. The Trust undertook the humanitarian task of constructing 300
          pucca houses in 8 villages in the districts of Keonjhar, Kendrapada,
          and Jajpur and completed the construction in a record time of five and
          half months. Thus the total number of houses constructed in both the
          phases comes to 1000, as promised by Baba, with a total outlay of
          nearly 15 crores, providing safe and secure shelter to 1000 poor
          families.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SriSathyaSaiHousingProjectComponent implements OnInit {
  ngOnInit(): void {}
}
