import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';
import { SlideShowImageComponent } from '../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-education',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'wings_education' | translate }}
        </h1>
        <div class="service_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>
        <p class="text-center my-4">
          {{ 'wings_education_p1' | translate }}
        </p>
        <p>
          {{ 'wings_education_p2' | translate }}
        </p>
        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class EducationComponent implements OnInit {
  banner = [{ image: 'assets/images/Education-banner.jpg', caption: '' }];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
