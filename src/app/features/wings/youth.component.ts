import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';
import { SlideShowImageComponent } from '../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-youth',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Youth' | translate }}
        </h1>
        <div class="service_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>

        <p>
          The youth of today are the leaders of the future. If the future is to
          be prosperous, the modern youth should perform their duties with firm
          faith in God."- Baba"
        </p>
        <p>
          Sai youths are not just a bundle of young and energetic persons, but
          they can be viewed as a source of energy and inspiration. They are
          silent,disciplined and calm yet they are ever ready to rise to the
          occasion when the society needs them. They use their massive
          potentials only to bring smile on the face of the distressed and
          dejected. As they walk on the path of Bhagwan,society looks upon them
          as the saviours, the messengers of God.
        </p>
        <p>
          The movement of Sai youth in Sri Sathya sai Seva organisation (India),
          Odisha has gained momentum over the years to such a level that. Sai
          Youths have become integral and unparallel to each success story of
          the Organisation. Over 7000 youths across the state engage themselves
          in Seva sadhana in one form or the other. Especially projects like
          Nitya Anna Prasadam, National Narayan Seva, Holistic Healthcare Seva
          their contribution is immense and praise worthy. For natural
          calamities and accidents a core group is formed to rush to the spot
          and provide immediate rescue/relief.
        </p>
        <p>
          They derive constant motivation and inspiration from our Beloved
          Bhagwan whose restless service to the mankind had been and will ever
          be remembered by the world. In the process of their Sadhana they
          refine themselves as a better human being and this transformation in
          them has drawn many youths of the society to the Organisation where
          they taste the flavour and sweetness of selfless service and derive
          divine bliss.
        </p>
      </div>
    </div>
  `,
})
export class YouthComponent implements OnInit {
  banner = [
    { image: 'assets/images/Youth-banner.jpg', caption: 'Youth' },
    { image: 'assets/images/konark.JPG', caption: '' },
  ];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
