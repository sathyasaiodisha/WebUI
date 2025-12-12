import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-education-VidyaVahini',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'VidyaVahini' | translate }}
        </h1>
        <div class="carousel">
          <!--Image carousel (Each image is linked to a page)-->
          <app-slideshowimage [banner]="banner"></app-slideshowimage>
        </div>
        <p>
          Sri Sathya Sai Vidya Vahini (SSSVV) is a volunteer driven digital
          initiative of the Sri Sathya Sai Central Trust focusing on providing
          Integral Education for All by All. Using its unique IIEPx4C Framework,
          it creates and offers content, teaching/learning aids and training to
          the schools. All of these are offered free to strengthen the hands of
          the teachers.
        </p>
        <p>SSSVV also</p>
        <ul>
          <li>
            Empower teachers with appropriate knowledge and skills to enthuse
            learners with insightful ideas.
          </li>
          <li>
            Help learners become active participants while enjoying the learning
            process.
          </li>
          <li>
            Develop digital content, tools and teaching aids with the latest
            pedagogy using holistic frameworks.
          </li>
          <li>
            Forge partnerships with technologists and other organisations to
            develop digital technologies and aids for bringing better
            efficiencies in the teaching-learning process.
          </li>
        </ul>

        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class VidyaVahiniComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/education_wing/sssvv.JPG', caption: '' }
  ];
}
