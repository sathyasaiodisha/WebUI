import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-sssDivyaPadukaYatra',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai Divya Paduka Yatra' | translate }}
        </h1>
        <div class="spiritual_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>

        <p>
          Bhagawan Sri Sathya Sai Baba always had a soft corner for the devotees of Odisha,
          who always prayed intensely requesting HIM to set his Feet on the land of Utkal.
          The Promise then given by Bhagawan Baba materialised 10 years after Maha Samadhi.
          Swami reminded all, that the intense prayers from the devotees of Odisha with all
          pure hearts has beared the fruit. The Bramha Sankalpa can never get away with time.
          The long wait came to an end. On 24th April 2022, the state of Odisha received the
          Divine Paduka in the Prayer Hall of Prashanti Nilayam in the presence of the
          Managing Trustee Shri R J Ratnakar and AIP, SSSSO India Shri Nimish Pandya.
          The then State President SSSSO Odisha, Sri Narayan Prasad Sar along with his platoon
          of Sevadals escorted the divine Paduka to the holy Land of Utkal.

          Sri Sathya Sai Divya Paduka yatra,a remarkable journey of spiritual awakening has
          started in Odisha in the auspicious occassion of Guru Purnima i.e 13th July 2022.
          It is an unique opportunity for our state by which millions of devotees, people from
          every corner of the state are participating in this divine journey. During the
          paduka yatra, so many social awareness programmes are organizing like plantation,
          cleaning of roads, temples involving people of all religions, cleaning of mosque and church etc .

          In the evening, bhajan, satsang and cultural programmes are performed which are based on divya leelas.

          The Divine yatra completed 214 Samithies, above 700 Bhajan Mandalies, 10100 villages,
          1420 Schools, 38000 KM till the end of the September 2025.
        </p>
      </div>
    </div>
  `,
})
export class SSSDivyaPadukaYatraComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/padukaYatra/20.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/1.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/2.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/3.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/4.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/7.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/8.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/9.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/10.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/11.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/12.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/13.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/14.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/15.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/16.jpg', caption: '' },
    { image: 'assets/images/padukaYatra/17.jpg', caption: '' }

  ];
}
