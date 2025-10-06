import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-sssNirmalaJhar',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai Nirmala Jhar' | translate }}
        </h1>
        <div class="spiritual_wrapper_top">
          <div class="carousel">
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>

        <p>
          Water is life’s most essential resource, yet safe drinking water
          remains inaccessible to many communities. Bhagawan Sri Sathya Sai Baba
          placed great emphasis on this need, launching monumental water supply
          projects in Andhra Pradesh, Telangana, and Tamil Nadu during the 1990s
          and 2000s. These projects, serving millions at no cost, stand as
          enduring examples of how private initiative, guided by compassion, can
          achieve what often seems impossible. Drawing inspiration from His
          example, the Sri Sathya Sai Trust, Odisha undertook the Nirmal Jhar
          (Pure Stream) initiative to address the challenge of contaminated
          groundwater-particularly salinity and fluoride—that afflicts many
          villages across the State. The project’s objective is simple yet
          profound: to provide every family in these regions with access to
          clean and safe drinking water. During FY 2024–25, the Trust
          commissioned 7 new water purification plants in different districts,
          while 3 additional plants remained under construction as of 31st March
          2025. Alongside, 4 previously installed units underwent major repairs
          to restore their functionality. Each plant is operated and monitored
          with the active support of local Sai Centres under the Sri Sathya Sai
          Seva Organisations. These centres oversee day-to-day operations and
          ensure that water distribution continues smoothly. The newly
          commissioned plants are estimated to benefit approximately 6,100
          villagers every day, adding to the thousands already being served by
          earlier installations. In total, the Trust has now established 19
          functional water projects across Odisha, directly impacting nearly
          19,300 people daily.
        </p>
      </div>
    </div>
  `,
})
export class SSSNirmalaJharComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/nirmalaJhara/b1.jpg', caption: '' },
    { image: 'assets/images/nirmalaJhara/b2.jpg', caption: '' },
    { image: 'assets/images/nirmalaJhara/b3.jpg', caption: '' },
    { image: 'assets/images/nirmalaJhara/b5.jpg', caption: '' },
    { image: 'assets/images/nirmalaJhara/b6.jpg', caption: '' },
    { image: 'assets/images/nirmalaJhara/b7.jpg', caption: '' },
  ];
}
