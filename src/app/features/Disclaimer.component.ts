import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-Disclaimer',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Disclaimer' | translate }}
        </h1>

        <p>
          Sri Sarthya Sai Seva Organisation, founded by Bhagawan Sri Sathya Sai
          Baba in the year 1965, is a service organisation with a spiritual core
          and base to benefit all mankind irrespective of religion, caste, creed
          or sect. The Organisation serves as a platform for its members to
          undertake service and other activities as their sadhana (spiritual
          discipline) which is motivated by an urge for self-transformation to
          realise one’s inherent divinity.
        </p>
        <p>
          The information provided on this website is for general informational
          purposes only. We strive to ensure that the information is accurate
          and up-to-date, we make no representations or warranties of any kind,
          express or implied, about the completeness, accuracy, reliability,
          suitability, or availability of the information, services, or related
          graphics contained on the website for any purpose.
        </p>
        <p>
          Through this website, you may be able to link to other websites that
          are not under our control. We have no control over the nature,
          content, and availability of those sites.
        </p>
        <p>
          Every effort is made to keep the website up and running smoothly.
          However, we take no responsibility for, and will not be liable for,
          the website being temporarily unavailable due to technical issues
          beyond our control.
        </p>
      </div>
    </div>
  `,
})
export class DisclaimerComponent implements OnInit {
  ngOnInit(): void {}
}
