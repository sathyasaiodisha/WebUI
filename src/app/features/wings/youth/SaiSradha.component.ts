import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SaiSradha',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SaiSradha' | translate }}
        </h1>
        <p>
          Sai Sradha is an initiative to offer our gratitude to the seniors who
          have contributed at lot for the organisation. Due to old age or health
          ground they cannot attend the Regular Bhajans or any other activities
          conducted in the Sai Centres. The Youths are attending at the
          residence to conduct Bhajan and to sharing the love and gratitude to
          them. Also get the divine experience from the seniors.
        </p>
        <app-sub-sections-links [page]="'wings_youth'"></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SaiSradhaComponent implements OnInit {
  ngOnInit(): void {}
}
