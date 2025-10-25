import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-youth',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'wings_youth' | translate }}
        </h1>
        <div class="service_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>

        <p>
          {{ 'wings_youth_p1' | translate }}
        </p>
        <p>
          {{ 'wings_youth_p2' | translate }}
        </p>
        <p>
          {{ 'wings_youth_p3' | translate }}
        </p>
        <p>
          {{ 'wings_youth_p4' | translate }}
        </p>
        <app-sub-sections-links [page]="'wings_youth'"></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class YouthComponent implements OnInit {
  banner = [
    { image: 'assets/images/Youth-banner.jpg', caption: 'Youth' },
    { image: 'assets/images/konark.JPG', caption: '' },
  ];
  ngOnInit(): void {}
}
