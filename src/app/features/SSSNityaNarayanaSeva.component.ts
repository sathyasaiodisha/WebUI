import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-SSSNityaNarayanaSeva',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SSSNityaNarayanaSeva' | translate }}
        </h1>
        <!-- <div class="spiritual_wrapper_top">
          <div class="carousel">
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div> -->

        <p>
          Among all forms of service, feeding the hungry holds a special place.
          Bhagawan Sri Sathya Sai Baba often reminded devotees that in serving
          the poor, one is in fact serving Narayana Himself. He lovingly called
          this activity “Narayana Seva”—to instil in us the awareness of the
          Divine presence in every being, irrespective of status or
          circumstance.
        </p>
        <p>
          The Sri Sathya Sai Seva Organisations, Odisha have been organising
          Narayana Seva through their Sai Centres across towns and villages of
          the State. At many centres, cooked meals are served weekly to those in
          need; some centres go further by delivering daily meals at the
          doorsteps of the elderly and destitute. Building upon this spirit,
          SSSTO has been running the Sri Sathya Sai Nitya Narayana Seva in
          Bhubaneswar since 1st August 2010. Beginning with just 21
          beneficiaries, the programme has steadily expanded to serve 131
          individuals daily—most of them physically challenged or destitute
          persons unable to fend for themselves.
        </p>
        <p>
          Meals are cooked centrally and distributed by teams of dedicated
          volunteers, who traverse nearly 63 km each day to deliver food
          directly to the beneficiaries’ homes—uninterrupted for more than 14
          years, through sun and rain alike. The programme is sustained through
          voluntary contributions from devotees and donors inspired by the
          principle of “Ceiling on Desires.”
        </p>
        <p>
          The initiative has not only brought solace to the needy but has also
          provided countless volunteers the joy of experiencing Bhagawan’s
          message “Hands that serve are holier than lips that pray.”
        </p>
      </div>
    </div>
  `,
})
export class SSSNityaNarayanaSevaComponent implements OnInit {
  ngOnInit(): void {}
  banner = [{ image: 'assets/images/mobileHospital/b10.jpg', caption: '' }];
}
