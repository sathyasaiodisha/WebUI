import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-PracticingCod',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'PracticingCod' | translate }}
        </h1>
        <p>
          Ceiling On Desire(COD) is a transformative and effective programme
          advocated by Sri Sathya Sai Baba to curb excessive wants and foster
          contentment. It encourages individuals toLimit their desires in four
          key areas: food, money, time, and energy.
        </p>
        <app-sub-sections-links [page]="'wings_youth'"></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class PracticingCodComponent implements OnInit {
  ngOnInit(): void {}
}
