import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SaiSanatani',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SaiSanatani' | translate }}
        </h1>
        <p>
          Sai Sanatani popularly known as “Sanatani Mancha” provides a platform
          to celebrate the glory of womanhood, of the great culture and
          tradition of Odisha. Its a part of Mahila Bibhaga, where each Mahila
          of the organization of the state is a member. The objective of this
          Mancha is to spread & promote the spirit of Service, Amity, Literature
          and Culture . It also provides a platform for the Mahilas to express
          their views and talents. It helps to revive and restore the bye old
          culture and tradition which is likely to be extinct in due to rapid
          urbanization. Keeping this in view, Shanatani Manch celebrates
          different Festivals of Odisha, (Popular in different areas) in
          different parts of the state. Throughout the year, this Mancha
          provides ample opportunities to the members of Sai Family to celebrate
          their regional festival such as Raja, Nuakhai etc at their very own
          place with a spiritual vibration coupled with the cultural and
          traditional practice. Thus, it becomes a medium of cultural exchange
          among the members of Sai Family of Odisha.
        </p>
        <app-sub-sections-links
          [page]="'wings_ladies'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SaiSanataniComponent implements OnInit {
  ngOnInit(): void {}
}
