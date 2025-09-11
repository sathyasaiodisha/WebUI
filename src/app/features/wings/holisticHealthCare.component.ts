import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-holisticHealthCare',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai Holtisic Help line Seva(Orissa)' | translate }}
        </h1>
        <p>
          To dispel darkness, a ray of light is enough. The ray of light
          descends from the source of all lights- Sri Sathya Sai Baba- to the
          dark and cruel realities of our health care problems. He has provided
          graciously a sustainable and time tested answer to the serious
          problems of our society-the health care for all who need it in the
          form of a gift since 2006-Sri Sathya Sai holistic health helpline seva
          , Orissa We are ever grateful to our loving lord and this gratitude is
          best expressed as service rendered. We are continuously sustained by
          society, we receive sustenance in many ways, sustenance from mother
          Nature and society we live in. Sri Sathya Sai Holistic Health Helpline
          Seva , Odisha since December 2006 has been relentlessly striving to
          provide holistic health Seva through 192 doctors and 356 Health
          workers , It is maintaining 9 permanent health seva Centres in state
          providing health seva at primary level to nearly 1,12,000 persons per
          anaum, health seva to nearly 1,35,000 persons in health camps per anum
          and secondary and tertiary health seva through backup service of
          specialty hospitals and Sri Sathya Sai Telemedicine center Bhubaneswar
          . It has been providing mother and child care in 389 SSVIP villages of
          state through project Sai Premdhara which has been blessed by Swami.
          First Aid Training to 355 persons and blood donation and eye donation
          drive has reached the sate of movement , through holistic health Seva
          wing of Satya Sai Organization.
        </p>
      </div>
    </div>
  `,
})
export class HolisticHealthCareComponent implements OnInit {
  // data: {
  //   designation: string;
  //   name: string;
  //   phoneNo: string;
  //   whatsAppNo: string;
  //   emailid: string;
  // }[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
