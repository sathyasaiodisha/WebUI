import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-education-FestivalsOfJoy',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'FestivalsOfJoy' | translate }}
        </h1>
        <div class="carousel">
          <!--Image carousel (Each image is linked to a page)-->
          <app-slideshowimage [banner]="banner"></app-slideshowimage>
        </div>
        <p>
          The Festival of Joy is an annual Congregation of BalVikas Group III
          Children, gurus and parents. Rooted in the teachings and values of our
          beloved Bhagwan Sri Sathya Sai Baba, the festival blends learning,
          devotion, and cultural expression in a joyful environment. It follows
          a non-competitive approach, recognizing every participant and
          nurturing values like unity, confidence, and selfless service. Unlike
          conventional competitions, the Festival of Joy adopts a
          non-competitive approach, where every participant is recognized as
          Good, Very Good, or Excellent and receives a token of love, ensuring
          that no child feels left out. This inclusive system reflects Bhagwan
          Baba’s vision of education that nurtures values rather than rivalry,
          inspiring children to grow with confidence and joy. The festival also
          features symposiums on value-based themes, cultural performances, and
          interactive sessions designed to encourage active participation,
          teamwork, and spiritual growth. In essence, the Festival of Joy is not
          just an event — it is a celebration of values, love, and togetherness,
          shaping young minds into responsible and compassionate individuals.
        </p>

        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class FestivalsOfJoyComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/education_wing/foj.jpg', caption: '' }
  ];
}
