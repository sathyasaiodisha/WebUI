import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-HolisticHealthCare',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'HolisticHealthCare' | translate }}
        </h1>
        <div class="carousel">
          <!--Image carousel (Each image is linked to a page)-->
          <app-slideshowimage [banner]="banner"></app-slideshowimage>
        </div>
        <p>
          Sathya Sai Holistic Health Care refers to the universal, free
          healthcare mission inspired by Sathya Sai Baba, which emphasizes
          holistic, compassionate, and state-of-the-art treatment with no cost
          to the patient, including super-specialty hospitals, mobile clinics,
          preventive health education, and global humanitarian services like
          blood drives and telemedicine.
        </p>

        <p>
          Since 2006, organisation has been relentlessly striving to provide
          holistic health Seva through hundreds of doctors and Health workers
          across odisha. It is maintaining 9 permanent health seva Centres in
          state providing health seva at primary level to more than lakhs of
          persons per anaum, and secondary and tertiary health seva through
          backup service of specialty hospitals and Sri Sathya Sai Telemedicine
          center Bhubaneswar . It has been providing mother and child care in
          SSVIP villages of state through project Sai Premdhara which has been
          blessed by Swami. First Aid Training and blood donation and eye
          donation drive etc are also part of this movement.
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class HolisticHealthCareComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/service_wing/health_check.jpg', caption: '' }
  ];
}
