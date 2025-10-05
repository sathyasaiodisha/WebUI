import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-sssMobileHospital',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai Mobile Hospital' | translate }}
        </h1>
        <div class="spiritual_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>

        <p>
          On 25th August 2024, the Sri Sathya Sai Mobile Hospital was formally inaugurated and flagged off by Dr P K Das,
          Director Cardiology, Capital Hospital, Dr. Satya Swaroop Patnaik, State President, Sri Sathya Sai Seva
          Organisations, Odisha, Sri Narayan Sar, Zonal President (East), Sri Sathya Sai Seva Organisations, India and the
          Superintendent of Police, Rayagada at the Sri Sathya Sai Centre, Rayagada, in the presence of distinguished
          medical professionals, senior members of the Sai Organisation, government officials, and community leaders. The
          initiative was launched after obtaining all necessary approvals, with the blessings of Bhagawan.
          This mobile hospital brings comprehensive medical care—including general medicine, dentistry, ophthalmology,
          pathology, and pharmacy—directly to underserved villages around Rayagada and Muniguda blocks. Equipped with
          diagnostic facilities and staffed by doctors and paramedics, the hospital ensures that villagers receive both
          preventive and curative healthcare at their very doorstep.

          The following activities took place from August 2024 to March 2025:
          · 29 medical camps conducted across Rayagada and Muniguda
          · 2,678 consultations out of 2,589 registered patients· Services included - General medicine provided to 1,776
          patients; Ophthalmology services provided to 689 patients (spectacles provided free for refractive errors;
          cataract patients referred for free surgery at L.V. Prasad Eye Hospital, Rayagada); Dentistry services provided to
          213 patients and Laboratory tests for diagnostic investigations (malaria, anaemia, and other conditions) performed
          for 511 patients.
          The involvement, particularly of the Doctors was such that 4 senior doctors with family who are participating in
          Mobile Hospital camps had attended the "Global Doctors Conference" at Prashanti Nilayam in June 2025, who later
          shared their overwhelmed joy while expressing heartfelt devotion during the stay at Puttaparthi. Now in the second
          year of its running, Sri Sathya Sai Trust Odisha plans to expand the scope of seva of Sri Sathya Sai Mobile
          Hospital to more far flung villages. Sri Sathya Sai Seva Organisations, Odisha also plan to introduce "School
          Health Program" conducting dental and ophthalmology screening camps in schools. Now the Trust proposes expanding
          to 9 camps per month This exemplifies the involvement of medicos and para-medicos for providing their whole
          hearted services in high-quality healthcare for the rural and underserved populations to fulfilling Bhagavan Sri
          Sathya Sai Baba's vision of "Service to Mankind is Service to God.”
          Through the involvement of committed doctors, paramedics, and volunteers, the Mobile Hospital is steadily
          realising Bhagawan’s message: “Service to Mankind is Service to God.”
        </p>
      </div>
    </div>
  `,
})
export class SSSMobileHospitalComponent implements OnInit {
  ngOnInit(): void {}
  banner = [

    { image: 'assets/images/padukaYatra/1.jpg', caption: '' }

  ];
}
