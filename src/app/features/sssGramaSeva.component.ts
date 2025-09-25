import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-sssGramaSeva',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai Grama Seva' | translate }}
        </h1>

        <div class="spiritual_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SssGramaSevaComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/gramaSeva/1.png', caption: '' },
    { image: 'assets/images/gramaSeva/2.png', caption: '' },
    { image: 'assets/images/gramaSeva/3.png', caption: '' },
    { image: 'assets/images/gramaSeva/4.png', caption: '' },
  ];
}
