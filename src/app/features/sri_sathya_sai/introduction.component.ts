import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-sss-introduction',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri_Sathya_Sai_introduction_title' | translate }}
        </h1>
        <!-- <div class="service_wrapper_top">
          <div class="carousel">
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div> -->

        <div class="row">
          <div class="col-md-4">
            <img src="assets/images/sai_standing.png" style="width:100%;" />
          </div>
          <div class="col-md-8">
            <br />
            <br />
            <p>
              {{ 'Sri_Sathya_Sai_introduction_p1' | translate }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class IntroductionComponent implements OnInit {
  banner = [
    { image: 'assets/images/Sri_Sathya_Sai_Seva_org.jpg', caption: '' },
  ];
  ngOnInit(): void {}
}
