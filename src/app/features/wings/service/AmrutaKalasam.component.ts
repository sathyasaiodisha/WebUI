import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-AmrutaKalasam',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'AmrutaKalasam' | translate }}
        </h1>
        <p>
          Amrut Kalash is a dry ration and essential items distribution to the
          needy by members by the Sri Sathya Sai Seva Organisations, Odisha.
          These kits typically include staples like rice, pulses, oil, and soap,
          and the distribution happens on a scheduled basis, to support families
          and individuals facing hardship. The program serves as a form of
          selfless service (seva) embodying the human values taught by Sri
          Sathya Sai Baba.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class AmrutaKalasamComponent implements OnInit {
  ngOnInit(): void {}
}
