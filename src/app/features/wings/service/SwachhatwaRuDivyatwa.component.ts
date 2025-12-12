import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-SwachhatwaRuDivyatwa',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SwachhatwaRuDivyatwa' | translate }}
        </h1>
        <div class="carousel">
          <!--Image carousel (Each image is linked to a page)-->
          <app-slideshowimage [banner]="banner"></app-slideshowimage>
        </div>
        <p>
          "SWACHHATA RU DIVYATWA" (Cleanliness to Godliness) is a nationwide
          annual cleanliness drive by the Sri Sathya Sai Seva Organisations,
          India and Odisha too actively participates in the campaign. The 19-day
          initiative runs from Gandhi Jayanti (October 2nd) to the Sai Avatar
          Declaration Day (October 20th), encouraging volunteers to clean public
          spaces, places of worship, and water bodies to cultivate inner purity.
          The drive also incorporates tree plantation to promote environmental
          sustainability. During the period, mass cleaning activities are taken
          up in various districts of Odiaha, engaging a large number of
          volunteers and contributing significant man-hours to the initiativ.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SwachhatwaRuDivyatwaComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/service_wing/swacchata_se_divyata.jpg', caption: '' }
  ];
}
