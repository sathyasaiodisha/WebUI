import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-sss-introduction',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'From_State_President_Desk' | translate }}
        </h1>
        <!-- <div class="service_wrapper_top">
          <div class="carousel">
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div> -->

        <div class="row">
          <!--<div class="col-md-4">
            <img src="assets/images/state_president_photo.png" style="width:100%;" />
          </div>-->
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <img src="assets/images/state_president_photo.png" class="img-fluid" alt="State President" />
          </div>
          <div class="col-md-8">
            <br />
            <br />
<!--            <br />-->
            <p>Aum Sri Sairam.</p>
            <p>
              Sri Sathya Sai Seva Organisations is a unique gift of Bhagawan Sri Sathya Sai Baba to Mankind. The sole
              purpose of starting this organisation is to help sadhakas in their spiritual journey of self
              transformation. The three wings of the organisation- Spiritual, Education and service- and the various
              spiritual activities- Bhajans, Study circles, sadhana sivirs, Bal Vikas, Narayan seva, Grama seva- are all
              means to achieve this goal. Transforming ourselves to transform the world is the motto of this Divine
              Organisation.
            </p>
            <p>
              In Odisha, the organisation has grown in the last 60 years with a tiny sapling in the form of the first
              Seva Samithi in Jatni to a huge tree with close to 250 Seva Samithis and 800 Bhajan Mandalis providing
              shade and succour to spiritual aspirants irrespective of caste, creed, language and religion. The only
              criteria to be a member of the Organisation is to be a spiritual aspirant with firm faith in the Divine
              name and form and be a good person. Thousands of volunteers across regions, professions are united by the
              passion to serve society and thus serve God through this Organisation.
             </p>
          </div>
            <p>
              It is heartening to see young men
              and women giving their best with all humility in service of our motherland through various initiaitives
              like Tree plantation, Blood donation, Medical Seva, Village Seva and so on. Sri Sathya Sai Baba has said,
              “My Life is My Message”. Today thousands of sevadal in the Organisation are striving to make their lives
              reflections of His Universal Message of Love All, Serve All and Help Ever, Hurt Never.
            </p>

            <p>
              As we celebrate 100 years of the Divine advent of Baba, we unite in offering gratitude to Him. Never
              before has mankind seen such an epitome of pure love and selfless service walk on 2 feet. Truly blessed we
              are to be contemporaries of the Kaliyuga Avatar. Truly blessed are we to be a part of His Divine
              Organisation. Truly blessed are we to be touched by His pure Love and Blessings.
            </p>
            <p>
              I offer the new website of Sri Sathya Sai Seva Organisations , Odisha, which is a labour of love designed
              with devotion and dedication by the Sevadal volunteers of the Organisation, at the Lotus Feet of our
              Beloved Lord and Master and pray for peace and blessings on all.
            </p>
            <p>Samastha Lokah Sukhino Bhavantu.</p>
            <p>Dr Sathya Swaroop Patnaik</p>
          </div>
        </div>
      </div>
<!--    </div>-->
  `,
})
export class StatePresidentMessageComponent implements OnInit {
  banner = [
    { image: 'assets/images/Sri_Sathya_Sai_Seva_org.jpg', caption: '' },
  ];
  ngOnInit(): void {}
}
