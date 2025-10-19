import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-CardioPulmonaryResuscitation',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'CardioPulmonaryResuscitation' | translate }}
        </h1>
        <!-- <div class="spiritual_wrapper_top">
          <div class="carousel">
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div> -->

        <p>
          Cardiac arrest can occur suddenly and without warning, and survival
          often depends on the immediate response of those nearby. Globally,
          heart disease remains the leading cause of death. Studies show that
          performing Cardio-Pulmonary Resuscitation (CPR) within minutes can
          double or even triple a victim’s chances of survival. Yet, awareness
          and training remain limited among the general public.
        </p>
        <p>
          To commemorate the Centenary of Bhagawan Sri Sathya Sai Baba, SSSTO
          launched a state-wide initiative to train large numbers of citizens in
          this life-saving skill. The goal is to create a network of CPR-trained
          individuals in every district who can respond effectively in cardiac
          emergencies.
        </p>
        <p>
          This initiative began in February 2023 with a mega event at Kalinga
          Stadium, Bhubaneswar, inaugurated by Shri Naveen Patnaik, then Hon’ble
          Chief Minister of Odisha. The programme has since spread to towns and
          institutions across the State.
        </p>
        <p>
          During FY 2024–25, 16 training camps were organised in districts
          including Mayurbhanj, Cuttack, Balasore, Sambalpur, Ganjam, and
          Khordha. Nearly 3,000 participants—students, teachers, youth
          volunteers, and community members—were trained in hands-on CPR
          techniques. Every participant received certification, boosting their
          confidence in handling emergencies. The response from the participants
          has been overwhelmingly positive in this on-going program, many have
          left feedback that the training has increased the confidence levels in
          their ability to respond to emergencies. All the participants are
          given certificates at the end of the training sessions. 33 CPR
          training camps have been held since the launch of the program and over
          10,000 individuals have been trained till date.
        </p>
      </div>
    </div>
  `,
})
export class CardioPulmonaryResuscitationComponent implements OnInit {
  ngOnInit(): void {}
  banner = [{ image: 'assets/images/mobileHospital/b10.jpg', caption: '' }];
}
