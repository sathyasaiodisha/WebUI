import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-education-SaiVaatika',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SaiVaatika' | translate }}
        </h1>
        <div class="carousel">
          <!--Image carousel (Each image is linked to a page)-->
          <app-slideshowimage [banner]="banner"></app-slideshowimage>
        </div>
        <p>
          As Bhagavan says “Every child is a flower in the Garden of Sai”, the
          BV Alumni of Odisha decided to cater the Garden of Sai – “Sai Vaatika”
          – in each Sai Schools of Odisha so that the Flowers of the Garden will
          become more beautiful with soothing fragrance. The Team Sai Vaatika at
          each Sai School with their participation as Mentors in Madhu
          Vadishyami is now caring the flowers in Sai’s Garden so as to fill the
          flowers with Sai’s Love.
        </p>
        <p>
          Because they have proudly named them as “Messengers of Sai Love”, the
          BV Alumni of Odisha is offering their Loving Seva to spread Sai’s Love
          in all our Sai Schools since 24th April 2022 and with Swami’s Grace,
          it will go on and on….
        </p>

        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SaiVaatikaComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/education_wing/sai_vaatika.jpg', caption: '' }
  ];
}
