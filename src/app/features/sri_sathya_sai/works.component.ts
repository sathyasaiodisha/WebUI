import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-sss-works',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Works of Sri Sathya Sai' | translate }}
        </h1>
        <p>
          Bhagwan Sri Sathya Sai Baba apart from His Spiritual Teachings &
          Messages to the humanity has taken up various beevolent works aimed at
          uplifting humanity through service, education, and healthcare.
          Humankind will be eternally grateful to Mother Easwaramma for it was
          her three wishes from her son “Sathya” that led to mammoth projects in
          Educare, Healthcare and Sociocare.
        </p>
        <ol class="boldIli">
          <li>Healthcare Initiatives</li>
          <ul>
            <li>
              <b>Free Medical Services:</b> Sai Baba established super-specialty
              hospitals offering free treatment to all, regardless of
              socioeconomic status. Notable institutions include:
            </li>
            <ul>
              <li>
                <b
                  >Sri Sathya Sai Institute of Higher Medical Sciences
                  (SSSIHMS)</b
                >
                in Puttaparthi, Andhra Pradesh (1991), and Whitefield, Bangalore
                (2001). These hospitals provide advanced care in cardiology,
                neurology, and other specialties, serving millions with no cost
                to patients.
              </li>
              <li>
                <b>General Hospitals:</b> Free general hospitals in Puttaparthi
                and other locations offer comprehensive medical care.
              </li>
            </ul>
            <li>
              <b>Mobile Hospitals:</b> Mobile medical units deliver healthcare
              to remote villages, providing free consultations, medicines, and
              diagnostics.
            </li>
            <li>
              <b>Medical Camps:</b> Regular camps address immediate healthcare
              needs in underserved areas, including eye surgeries and dental
              care.
            </li>
          </ul>
          <li>Educational Initiatives</li>
          <ul>
            <li>
              <b>Free Education:</b> Sai Baba founded the Sri Sathya Sai
              Institute of Higher Learning (deemed university) in 1981, offering
              free education from primary to postgraduate levels, emphasizing
              values-based learning. Campuses are located in Puttaparthi,
              Anantapur, Whitefield, and Muddenahalli.
            </li>
            <li>
              <b>Schools and Colleges:</b> Numerous schools across India provide
              free or subsidized education, integrating moral and spiritual
              values with academics.
            </li>
            <li>
              <b>Focus on Character Development:</b> His educational
              institutions emphasize "Educare," combining academic excellence
              with ethical and spiritual growth.
            </li>
          </ul>
          <li>Water Supply Projects</li>
          <ul>
            <li>
              <b>Drinking Water Initiatives:</b> Sai Baba spearheaded massive
              water supply projects to address water scarcity in drought-prone
              regions:
            </li>
            <ul>
              <li>
                <b>Anantapur Water Project:</b> Provided clean drinking water to
                over 700 villages in Andhra Pradesh, benefiting millions.
              </li>
              <li>
                <b>Medak and Mahbubnagar Projects:</b> Extended water access to
                additional districts in Telangana.
              </li>
              <li>
                <b>Chennai Water Project:</b> Supported water supply
                infrastructure for Chennai, Tamil Nadu.
              </li>
            </ul>
            <li>
              These projects were executed through the Sri Sathya Sai Central
              Trust, often in collaboration with government bodies, at no cost
              to beneficiaries.
            </li>
          </ul>
          <li>Humanitarian and Social Service</li>
          <ul>
            <li>
              <b>Sri Sathya Sai Seva Organization:</b> This global network of
              volunteers undertakes service activities, including disaster
              relief, feeding the poor, and community development.
            </li>
            <li>
              <b>Free Food Distribution:</b> Sai Baba’s ashrams, like Prasanthi
              Nilayam, provide free meals daily to thousands of visitors and
              devotees.
            </li>
            <li>
              <b>Disaster Relief:</b> The Sai Organization has been instrumental
              in providing aid during natural calamities, such as earthquakes,
              floods, and tsunamis, offering food, shelter, and medical
              assistance.
            </li>
            <li>
              <b>Rural Development:</b> Initiatives like village adoption
              programs focus on improving infrastructure, sanitation, and
              livelihoods in rural areas.
            </li>
          </ul>
          <li>Spiritual and Cultural Contributions</li>
          <ul>
            <li>
              <b>Promotion of Universal Values:</b> Sai Baba emphasized unity of
              religions, love, and selfless service, inspiring millions to live
              by the principles of truth (Sathya), righteousness (Dharma), peace
              (Shanti), love (Prema), and non-violence (Ahimsa).
            </li>
            <li>
              <b>Community Programs:</b> Organized interfaith gatherings,
              cultural events, and festivals to foster harmony and spiritual
              growth.
            </li>
            <li>
              <b>Global Reach:</b> Through his teachings and the Sai
              Organization, his humanitarian efforts extended beyond India to
              countries worldwide, with centers in over 120 nations.
            </li>
          </ul>
        </ol>
      </div>
    </div>
  `,
})
export class WorksComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {}
}
