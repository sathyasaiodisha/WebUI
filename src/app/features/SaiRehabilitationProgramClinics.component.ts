import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-SaiRehabilitationProgramClinics',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SaiRehabilitationProgramClinics' | translate }}
        </h1>
        <!-- <div class="spiritual_wrapper_top">
          <div class="carousel">
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div> -->

        <p>
          Sri Sathya Sai Rehabilitation Program (SRP) is a unique program under
          which volunteers of Sri Sathya Sai Seva Organisations all over the
          country help in follow up of cardiac patients who have undergone heart
          surgeries in the twin Super Specialty Hospitals at Prasanthigram or
          Whitefield, on whom specific blood tests are to be conducted at
          regular intervals (once in two months) to monitor the density of the
          post-op patient’s blood thro’ a blood-test called PT-INR.
        </p>
        <p>
          Many patients, especially from rural Odisha, find it difficult to
          access these services due to financial and logistical barriers. It is
          indeed a unique program as no other hospital, corporate or charitable,
          goes to his extent for the follow-up of their patients even after they
          leave the precincts of the hospital after treatment.
        </p>
        <p>
          In Odisha, the first SRP Clinic was started in Oct ’18 - seven years
          ago for the thousands of patients from the state of Odisha who have
          got a new lease of life from these Temples of Healing. The Sai
          Rehabilitation Programme (SRP) bridges this gap by ensuring continuity
          of care. Lists of post-operative patients from the Super Speciality
          Hospitals are shared with local Sai Centres, where volunteers follow
          up with the patients. Monthly and bi-monthly blood tests are organised
          at SRP clinics established by SSSTO in collaboration with SSSSO. The
          required blood tests are not available even in major towns and cities
          other than Bhubaneswar. Therefore, in order to greatly reduce the
          inconvenience to the patients and to enable them to comply with the
          medical requirements, the SSSTO helped in setting up SRP clinics in
          several Sai Centres in the following locations. The 11th Centre at
          Bargarh was opened.
        </p>
        <p>
          During the year, all the clinics continued their service to the
          deserving patients and conducted the tests. In the sidelines of the
          camps where the tests are conducted, patient meets – Antaranga Sai –
          are held at the Samithi/District level where patients share their
          experiences and are given medical and lifestyle advice and undergo a
          medical check-up.
        </p>
        <p>
          In addition, the SSSTO has set up a Cardiac Outreach Centre at Sai
          Janani, Bhubaneswar, equipped with ECG and Echocardiography
          facilities. Teleconsultations with super speciality hospitals are
          facilitated as needed. The SRP ensures that patients from Odisha who
          have received a “new lease of life” at the Super Speciality Hospitals
          continue to remain under proper medical supervision, preventing
          complications and saving live.
        </p>
      </div>
    </div>
  `,
})
export class SaiRehabilitationProgramClinicsComponent implements OnInit {
  ngOnInit(): void {}
  banner = [{ image: 'assets/images/mobileHospital/b10.jpg', caption: '' }];
}
