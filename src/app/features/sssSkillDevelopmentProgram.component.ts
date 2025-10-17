import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-SSSSkillDevelopmentProgram',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SSSSkillDevelopmentProgram' | translate }}
        </h1>
        <!-- <div class="spiritual_wrapper_top">
          <div class="carousel">
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div> -->

        <p>
          Bhagawan Baba emphasised that true education must empower youth to
          lead dignified, self-reliant lives. The Sri Sathya Sai Skill
          Development Programme was initiated to provide employable skills to
          rural and underprivileged youth, thereby reducing unemployment and
          fostering self-sufficiency. Unemployed youth from Sri Sathya Sai
          Village Integrated Program (SSSVIP) villages and their neighborhood
          are trained in multi-skills that are required in rural areas. A
          by-product of SSSVIP, the SSSSDP conducts an extensive survey of local
          areas, with regards to local employment potential and community
          requirements. Courses offered include tailoring, computer literacy,
          plumbing, electrical repair, embroidery, nursing, and spoken English.
          Training is imparted by experienced faculty, and students are guided
          towards both self-employment and formal job opportunities.
        </p>
        <p>
          The trained youth are then assisted in setting up small service
          centers in their villages, enabling them to gain economic
          independence. As a result, a more empowered youth with the necessary
          skillset, is ready to seek gainful employment.
        </p>
        <h5>Skill Development Centers at various centres</h5>
        <p>
          The SSSSO, in association with the SSSTO operates the following skill
          development centres:
        </p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Location</th>
              <th>District</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ambadola, Rayagada</td>
              <td>Computer literacy, Tailoring</td>
            </tr>
            <tr>
              <td>Bangapalli, Nabarangapur</td>
              <td>Tailoring</td>
            </tr>
            <tr>
              <td>Tenda & Nilagiri, Balasore</td>
              <td>Tailoring & Computer literacy</td>
            </tr>
            <tr>
              <td>Binayakpur, Bhadrak</td>
              <td>Tailoring</td>
            </tr>
            <tr>
              <td>Damodarpatna, Jagatsingpur</td>
              <td>Computer literacy</td>
            </tr>
            <tr>
              <td>Sai Arogyam-Pandua, Jajpur</td>
              <td>Computer literacy, Tailoring</td>
            </tr>
            <tr>
              <td>Masterpada, Sambalpur</td>
              <td>Tailoring</td>
            </tr>
            <tr>
              <td>Rahamba, Cuttack</td>
              <td>Computer literacy, Tailoring</td>
            </tr>
            <tr>
              <td>Jeypore, Koraput</td>
              <td>Computer literacy, Tailoring</td>
            </tr>
          </tbody>
        </table>
        <p>
          Set-up in a sprawling campus of over 4 acres, the rural centre at
          Ambodala in Rayagada district deserves a special mention. Inaugurated
          by All India President of SSSSO in July 2022, this centre upskills the
          candidates with rural background in computer literacy and tailoring.
          Efforts are on to create a hostel facility here so that the SDC
          evolves into a residential skill development centre which can then
          draw candidates for other districts.
        </p>
        <p>
          During the year, a new Centre was inaugurated by the State President,
          SSSSO, Odisha in March 2025 in the Trust-owned newly constructed Sri
          Sathya Sai Community Centre at Jeypore. The operating costs of these
          centres are borne by the SSSTO on a monthly basis alongwith the
          respective Sai centres where the SDCs are functioning. The SSSTO plans
          to strengthen the existing centres and open more centres at other
          places in the days to come.
        </p>
      </div>
    </div>
  `,
})
export class SSSSkillDevelopmentProgramComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/mobileHospital/b10.jpg', caption: '' },
    { image: 'assets/images/mobileHospital/b1.jpg', caption: '' },
    { image: 'assets/images/mobileHospital/b2.jpg', caption: '' },
    { image: 'assets/images/mobileHospital/b5.jpg', caption: '' },
    { image: 'assets/images/mobileHospital/b6.jpg', caption: '' },
    { image: 'assets/images/mobileHospital/b7.jpg', caption: '' },
    { image: 'assets/images/mobileHospital/b8.jpg', caption: '' },
    { image: 'assets/images/mobileHospital/b9.jpg', caption: '' },
  ];
}
