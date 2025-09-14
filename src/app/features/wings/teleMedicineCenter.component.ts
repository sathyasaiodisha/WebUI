import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-teleMedicineCenter',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Tele Medicine Center' | translate }}
        </h1>
        <p>
          Mother Sai’s Infinite Compassion -Tele-Medicine Centre- Bhubaneswar
          <br />
          <br />
          SAI JANANI <br />
          Plot No. 61-72, Unit-III <br />
          SAI JANANI <br />
          Opposite Nalinidevi Women's College of Teachers Education <br />
          Bhubaneswar, Khurda-751001 <br />
          Tel-0674-2391090, Mob-9438663807 <br />
          Submit <br />
          SSSIHMS-Bangalore <br />
          Tuesday: Neuro Surgery <br />
          Friday : Cardio Surgery <br />
          <br />
          SSSIHMS-Puttaparthy <br />
          Wednessday: Cardio Surgery <br />
          <br />
          The Tele-medicine centre at Sai Janani, Bhubaneswar is another
          instance of Swami’s limitless Grace for the people of Odisha. Deeply
          moved by the fact that large number of poor patients from Odisha,
          having undergone surgery either at Prasanthi or at Bangaluru
          Super-specialities have to come all the way for a second check-up
          which they can hardly afford. TMC, Odisha is very much fortunate to be
          connected with The department of Telemedicine, SSSIHMS, Whitefield &
          SSSIHMS, Prashanthigram through Sri Sathya Sai Tele-health Network.The
          Telemedicine department part of the Tele-health network leverages the
          potential of Information and Communication Technology (ICT) tools and
          extend the reach of quality medical care provided free of cost by Sri
          Sathya Sai Health System for patients requiring neurosurgical and
          cardiology care. The facility has helped SSSIHMS to achieve: <br />
          Streamline flow of Revisit/Outpatients from pre-identified locations
          (States) Schedule appointments for face-to-face consultation and
          surgeryMinimize unnecessary investigation, and travel for patients who
          can be advised remotely <br />
          Provide follow up for post-operative patients <br />
          Counselling of the patients <br />
          Guide patients requiring support from other medical specialties
          presently not provided by SSSIHMS-WFD <br />
          Conduct and participate in online CME’s, training of DNB’s and
          exchange of best practices and expertise in Neurosurgery and
          Cardiology <br />
          <br />
          Financial and Social advantages to patients <br />
          TELE-Medicine Center, Bhubaneswar is another instance of Swami’s
          limitless Grace for the people of Odisha. Deeply moved by the fact
          that large number of poor patients from Odisha, having undergone
          surgery either at Prasanthi or at Bangaluru Super-specialities have to
          come all the way for a second check-up which they can hardly afford.
          There are four doctors who are interfacing the patients at Bhubaneswar
          with Superspecialists at Bangalore & Prashanthi through High bandwith
          transmission of video conferencing provided by ISRO. During the year
          929 patients in Cardiac & Neuro have been attended. <br />
          <br />
          STATISTICS AT A GLANCE <br />
          Conferencing with SSSIHMS, Bangalore <br />
          2014-15 <br />
          2009-2015 <br />
          <br />
          Cardiac patients <br />
          569 Nos. <br />
          2415 Nos. <br />
          <br />
          Neuro Patients <br />
          500 Nos. <br />
          2182 Nos. <br />
          <br />
          Conferencing with SSSIHMS,Prashanthigram <br />
          2014-15 <br />
          2013-2015 <br />
          <br />
          Cardiac patients <br />
          235 Nos. <br />
          419 Nos. <br />
        </p>
      </div>
    </div>
  `,
})
export class TeleMedicineCenterComponent implements OnInit {
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
