import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SriSathyaSaiWaterProject',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SriSathyaSaiWaterProject' | translate }}
        </h1>
        <p>
          Water is ‘Elixir of Life’. Providing clean and safe drinking water to
          the needy in places which do not have access to the same is one of the
          flagship projects of Sri Sathya Sai Seva Organisation. Providing clean
          drinking water is one of the top needs for these villagers as it
          enhances their health and quality of life.
        </p>
        <p>
          Sri Sathya Sai Water Project (Nirmal Jhar) is a innovative initiative
          by the Sri Sathya Sai Seva Organisations , providing clean drinking
          water to communities through installations of cool water points and
          village-level water purification RO & de-fluoridationplants. These
          projects are self-sufficient units, often featuring overhead tanks and
          submersible pumps, which are handed over to the public or local
          committees for operation. The program has been extended to numerous
          villages and public locations, focusing on areas with limited access
          to safe water and aiming to improve public health and quality of life.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SriSathyaSaiWaterProjectComponent implements OnInit {
  ngOnInit(): void {}
}
