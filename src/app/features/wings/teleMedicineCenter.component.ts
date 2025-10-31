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
          <br/>
          <br/>
          SAI JANANI <br/>
          Plot No. 61-72, Unit-III <br/>
          SAI JANANI <br/>
          Opposite Nalinidevi Women's College of Teachers Education <br/>
          Bhubaneswar, Khurda-751001 <br/>

          <br/>
        <p>
          India with extreme geographic and climatic conditions, setting up special health care set-up in the remote
          parts is not always feasible and economically viable. At the same time, a large population resides in the
          rural parts pf the country, which requires timely health care intervention for various health problems and
          diseases. The number of qualified doctors is very low in these pockets. Further, the doctors offering services
          in these areas do not have opportunities to keep themselves keep them self-UpToDate with the latest mode of
          treatments and health care approaches. All these factors justify the need for <span class="fw-bold">Telemedicine</span>
          in India. The
          challenge becomes even more difficult if the country is large and geographically diverse in nature. In many
          respects, the innovation of telemedicine is seen as a part of answer to the problem of regional imbalance in
          provisioning of health facilities, imbalance in specialization and cost of medical care.
        </p>
        <p>
          India Space Research Organization (ISRO) initiated telemedicine network program in the year 2001 with the
          objective to provide medical services to remote and rural people who lacked medical facilities and explore the
          possibility of adding other health related utilities. Telemedicine system consists of <span class="fw-bold">customized medical
          software integrated with computer hardware</span> along with diagnostic instruments connected to the VAST at
          location. This is found to be very useful for the patients in rural areas to avail timely consultation of
          specialist doctors without, traveling long distance . Telemedicine is open to a variety of medical specialties
          such as Cardiology, Neurology, dermatology and practically every other branch .It is also useful for providing
          emergency care ,health care and <span class="fw-bold">health education</span> in remote areas where there is
          dearth of medical facilities.
        </p>
        <p>
          Bhagawan Sri Sathya Sai Baba, the totality of the divine energy of love in human from, has shown the light in
          this juncture by establishing two pioneer holistic role model medical institutes – Sri Sathya Sai Institute of
          Higher Medical Science at Puttaparthy and Bengaluru, with following four cardinal principles of medicine, such
          as :-
        </p>
        <ol>
        <li class="text-justify">
          De-commercialization of Medicine (Receiving medical relief should not beyond means of any human beings)
        </li>
          <li class="text-justify">
          Humanization of Medicine ( Doctors and paramedical staff should have humane approach in their thought, words
          and deed)
        </li>
          <li class="text-justify">
          Globalization of Medicine ( To get proper medical relief should be the very birth right of any diseased
          person)
          </li>
          <li class="text-justify">
          <span class="fw-bold">Spiritualization of Medicine</span>:- ( Attempts should be made not only to provide
          physical and psychological well-
          being but strengthen the <span class="fw-bold">spirit</span> of man and women)
          </li>
        </ol>

        <p>
          The Telemedicine Centre , Bhubaneswar, Odisha started functioning in the year <span
          class="fw-bold">2009</span> for the patients of Sri
          Sathya Sai Institute of high Medical Science, Whitefield, is a special gift of love of our loving GOD Sri
          Sathya Sai Baba to the people of Odisha and other nearby regions, to provide super specialized health seva at
          their own locality. Later in the year <span class="fw-bold">2013</span> for the patients of Puttaparthi also
          started.
        </p>
        <p>
          Physical presence of loving lord Bhagwan Sri Sathya Sai Baba was revealed on his 85th Birthday in the form of
          profused showering of holy Bibhuti from the portrait of Bhagwan workshipped in the Sathya Sai Telemedicine
          Conference Room.
        </p>
        <p>
          Neuro patients, cardio patients registered at Sri Sathya Sai Institute of Higher Medical Science both at
          Whitefield and Puttaparthi are availing the facility. No emergency Patients are to be attended here for
          treatment as it is not a hospital.
        </p>
        <p>
          <span class="fw-bold">Working Days:-</span> Wednesday – Cardiac Patients of SSSIHMS Puttparthi
          Friday – Cardiac Patients of SSSIHMS Whitefield .
          Saturday(2nd & 4th Sat) – Neuro Patients of SSSIHMS Whitefield .
        </p>
        <p>
            <span class="fw-bold">Brief Vital Statistics Of TMC SSSIHMS Odisha Branch BBSR :-  <br/>
              Wef:- 09.06.2009  To  29.10.2025. AT A GLANCE</span><br/>
          <span class="fw-bold">UP TO :- ( 06.09.2009 - TO - 25.10.2025) WF - CARDIO / NEURO)</span> <br/>
          <span style="margin-left: 5rem;" class="fw-bold">(12.06. 2013 – TO -  29.10.2025)   PG – CARDIO</span>
        </p>
        <div class="container mt-5">
          <table class="table table-bordered table-striped">
            <thead class="table-light">
            <tr>
              <th class="text-center">ITEMS</th>
              <th colspan="2" class="text-center">CARDIAC</th>
              <th colspan="1" class="text-center">NEURO</th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th>WHITE FIELD</th>
              <th>PUTTAPARTHI</th>
              <th>WHITE FIELD</th>
              <th class="text-center">TOTAL</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Started Functioning</td>
              <td>09.06.2009</td>
              <td>12.06.2013</td>
              <td>10.06.2009</td>
              <td> -</td>

            </tr>
            <tr>
              <td>Working Days</td>
              <td>Friday</td>
              <td>Wednesday</td>
              <td>2nd & 4th Saturday</td>
              <td>-</td>

            </tr>
            <tr>
              <td>No Of Sessions</td>
              <td>681</td>
              <td>523</td>
              <td>616</td>
              <td>1820</td>

            </tr>
            <tr>
              <td>No Of Patients (1st visit)</td>
              <td>2079</td>
              <td>1228</td>
              <td>1830</td>
              <td>5137</td>

            </tr>
            <tr>
              <td>No Of Patients (Revisit)</td>
              <td>3830</td>
              <td>2969</td>
              <td>1318</td>
              <td>8117</td>

            </tr>
            <tr>
              <td>Total (New + Old) Consultations Given</td>
              <td>5909</td>
              <td>4197</td>
              <td>3148</td>
              <td>13254</td>

            </tr>
            <tr>
              <td>Average No of Patients Per Session</td>
              <td>8</td>
              <td>8</td>
              <td>5</td>
              <td>7</td>

            </tr>
            </tbody>
          </table>
        </div>
        <p>
          <span class="fw-bold">NB:-</span> District wise sex wise and disease wise statistics is also available
        </p>
        <p>
          Sri Sathya Sai Telemedicine Centre, Odisha, Bhubaneswar is committed to take care of the patients who come for
          consultation and is poised with prayerful attitude for radiation and multiplication of love through loving
          health seva.
        </p>
        <p class="text-center">
          Placed at the Lotus Feet Of Bhagwan Sri Sathya Sai Baba.
        </p>
        <div class="content_topgape">
          <img class="responsive" src="/assets/images/SSS-HOLISTIC-HEALTHCARE-SAI%20JANANI.png">
        </div>
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
