import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-sss-introduction',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Introduction to Sri Sathya Sai' | translate }}
        </h1>
        <div class="service_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>

        <p>
          Sri Sathya Sai Baba, a loving God to His devotees and followers, an
          universal Teacher with a humanitarian outlook has inspired millions of
          people across the world through His teachings of Truth, Love, Peace,
          Right Conduct and Non-Violence. His gospel of unconditional love
          expressed through selfless service to the mankind and society
          continues to inspire the members of the Sai Organisation and others
          worldwide to take voluntary initiatives for constructive work. His
          teachings of universal love and acceptance have found their way into
          millions of hearts in India and abroad, transcending all boundaries of
          race and religion. Sri Sathya Sai Baba stresses on the equality of all
          religions, embracing all faiths as valid ways to truth, peace, love
          and God. He emphasizes on service to fellow human beings, and, by
          example, has inspired millions to involve themselves in philanthropic
          activities. A true Avatar of love and compassion, Swami’s divine
          presence has enlightened the mankind at a time when the world is
          predated with violence, adharma, hate on the basis of demography,
          cast, creed & religion. His preaching of love limits no boundary and
          the billions of His devotees is a testimony of His divine Omni
          presence.
        </p>
      </div>
    </div>
  `,
})
export class IntroductionComponent implements OnInit {
  banner = [
    { image: 'assets/images/Sri_Sathya_Sai_Seva_org.jpg', caption: '' },
  ];
  ngOnInit(): void {}
}
