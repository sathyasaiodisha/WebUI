import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-TelemedicineCentreThalassemiaclinics',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'TelemedicineCentreThalassemiaclinics' | translate }}
        </h1>
        <!-- <div class="spiritual_wrapper_top">
          <div class="carousel">
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div> -->

        <p>
          The Sri Sathya Sai Telemedicine Centre, located at Sai Janani,
          Bhubaneswar, connects patients from Odisha with specialists at the
          Super Speciality Hospitals in Puttaparthi and Whitefield through the
          Sri Sathya Sai Tele-Health Network. This facility spares poor patients
          the cost and difficulty of travelling long distances for post-surgery
          follow-up consultations.
        </p>
        <p>
          The TMC, Odisha deems itself to be fortunate to be connected with the
          Department of Telemedicine, SSSIHMS, Whitefield & Prasanthigram
          through the Sri Sathya Sai Tele-Health Network. The TMC, Odisha, as a
          part of the Tele-health network, leverages the potential of ICT tools
          and extends the reach of quality medical care provided free of cost by
          Sri Sathya Sai Health System for patients requiring neurosurgical and
          cardiology care.
        </p>
        <p>
          This initiative has been taken up to ensure streamlined flow of
          Revisit/Outpatients from pre-identified locations. Appointments are
          scheduled for face-to-face consultation, thus minimizing travel for
          patients who can be advised remotely. The program also provides
          follow-up and counselling for post-operation patients. To leverage
          space and time, in addition to tele-consultations for cardiology and
          neurosurgery, the centre also offers eye OPD, physiotherapy, magneto
          therapy, and acupressure services—largely through voluntary medical
          professionals.
        </p>
        <p>
          Recognising the increasing prevalence of blood disorders the SSSTO, in
          partnership with SSSSO, organised monthly Thalassemia clinics in
          Mayurbhanj, Angul, Kendrapara, Dhenkanal, Jajpur and Nuapada. A
          visiting haematologist from Bhubaneswar provides specialised care,
          while local volunteers facilitate medicines, diagnostics, ultrasounds,
          and blood transfusions. Dozens of patients received timely
          transfusions, reducing both medical risk and financial burden at the 6
          clinics.
        </p>
      </div>
    </div>
  `,
})
export class TelemedicineCentreThalassemiaclinicsComponent implements OnInit {
  ngOnInit(): void {}
  banner = [{ image: 'assets/images/mobileHospital/b10.jpg', caption: '' }];
}
