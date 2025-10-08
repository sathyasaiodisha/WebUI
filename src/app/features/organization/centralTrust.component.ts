import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-stateCoordinators',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai Trust, Odisha' | translate }}
        </h1>
        <p>
          The Sri Sathya Sai Trust, Odisha (SSSTO), established in 1976 under
          the divine guidance of Bhagawan Sri Sathya Sai Baba, functions as a
          public charitable trust based in Bhubaneswar. The Trust was created as
          an instrument of His love and compassion, with the sole objective of
          serving society through large-scale humanitarian projects. Over the
          years, SSSTO has reached thousands across Odisha through a wide range
          of initiatives—construction of homes for disaster-affected families,
          provision of safe drinking water in fluoride- and salinity-prone
          regions, healthcare projects including mobile hospitals and
          rehabilitation clinics, skill development centers for youth and women,
          and educational institutions imparting value-based learning. Every
          activity is provided free of cost to the beneficiaries, reflecting
          Bhagawan’s dictum that “Service to Man is Service to God.” The work of
          the Trust is enabled by the tireless efforts of volunteers from the
          Sri Sathya Sai Seva Organisations and guided by a Board of Trustees
          comprising respected individuals from diverse walks of life, all
          deeply committed to Bhagawan’s teachings and ideals.
        </p>
        <b
          >Report on the Service Initiatives of Sri Sathya Sai Trust, Odisha in
          association with the Sri Sathya Sai Organisations, Odisha for the
          reporting period: FY 2024-25</b
        >
        <p>
          In alignment with the sacred objectives laid down by Bhagawan Sri
          Sathya Sai Baba—whose life stands as a beacon of selfless service and
          compassion—the Sri Sathya Sai Trust, Odisha (SSSTO) has continued to
          expand its outreach across the State. Over the years, the Trust has
          initiated numerous service projects to uplift the less privileged,
          cutting across barriers of caste, creed, and religion. During the year
          under review (FY 2024-25), SSSTO undertook or continued the following
          major initiatives:
        </p>
        <ol>
          <li>Sri Sathya Sai Nitya Narayana Seva</li>
          <li>Sri Sathya Sai Drinking Water Project</li>
          <li>Sri Sathya Sai Health Care Projects:</li>
          <ol>
            <li>Sri Sathya Sai Mobile Hospital</li>
            <li>Cardio-Pulmonary Resuscitation Program</li>
            <li>
              Other Initiatives (SRP Clinics, Telemedicine Centre & Thalassemia
              Camps)
            </li>
          </ol>
          <li>Sri Sathya Sai Skill Development Project</li>
          <ol>
            <li>Skill Development Centre for Women, Bhubaneswar</li>
            <li>Other Centers in Odisha</li>
          </ol>
          <li>Sri Sathya Sai School, Bhubaneswar</li>
          <li>Sri Sathya Sai Prematharu</li>
        </ol>
      </div>
    </div>
  `,
})
export class CentralTrustComponent implements OnInit {
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
