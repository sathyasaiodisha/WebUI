import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-JalaChhatraSeva',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'JalaChhatraSeva' | translate }}
        </h1>
        <div class="carousel">
          <!--Image carousel (Each image is linked to a page)-->
          <app-slideshowimage [banner]="banner"></app-slideshowimage>
        </div>
        <p>
          Jala Chhatra Seva is a humanitarian initiative that involves
          distributing free, cool drinking water to the public, especially
          during the intense summer & scorching heat. Organized by local Sai
          Samitis and volunteers (Sevadals), the initiative embodies Sri Sathya
          Sai Baba's message of "Love All, Serve All" by providing refreshment
          and comfort to pedestrians, commuters, and people at public gatherings
          like markets and festivals.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class JalaChhatraSevaComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/service_wing/jala_chhatra.jpg', caption: '' }
  ];
}
