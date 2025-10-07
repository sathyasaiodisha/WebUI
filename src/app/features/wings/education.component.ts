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
          {{ 'Education' | translate }}
        </h1>
        <div class="service_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>
        <p class="text-center my-4">
          “Education is for Life not for a living.”- Sri Sathya Sai
        </p>
        <p>
          Education Wing is an important wing of the SSSSO worldwide, deeply
          committed to the sacred task of imparting human values to children of
          varying, faiths, cultures and backgrounds. The activities mostly
          include Sri Sathya Sai Bal Vikas programme, Value Educations at
          Schools, Dynamic Parenting, One day at a school, Inter School
          Competitions, Free Education / Coaching for needy students, Education
          in Human Values Awareness programmes for teachers etc. The Bal Vikas
          programme is spread over a period of nine years (from the age of five
          years to fifteen years), during which the children are taught to not
          only understand values, but also to implement them in their daily
          lives. The Bal Vikas programme is conducted on every Sunday for 1 Hr
          30 minutes only through the use of five teaching techniques - Silent
          sitting/ guided visualization, Story-telling, Prayers, Group singing,
          Group Activities. For the success of this programme the children are
          taught daily introspection and the older children are given spiritual
          diaries to aid them in this process of character development. The
          cooperation of the parents is imperative if the instruction given in
          the classes is to have the desired result. Keeping this in mind, the
          Bal Vikas guru remains in touch with the parents, through regular
          meetings.
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
