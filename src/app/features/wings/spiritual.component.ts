import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RouterLink } from '@angular/router';
import { SlideShowImageComponent } from '../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-spiritual',
  imports: [SharedModule, RouterLink, SlideShowImageComponent],
  template: `
    <div class=" container py-2 px-4 border-secondary">
      <!--content_topgape-->
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'wings_spiritual' | translate }}
        </h1>

        <div class="spiritual_wrapper_top">
          <div class="events">Alerts for events which are drawing near</div>
          <a
            title="Link to recent and upcoming events"
            class="eventLink"
            routerLink="/events/spiritual"
            >Events</a
          >
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>

        <p>
          {{ 'wings_spiritual_p1' | translate }}
        </p>
        <p>
          {{ 'wings_spiritual_p2' | translate }}
        </p>

        <app-sub-sections-links
          [page]="'wings_spiritual'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SpiritualComponent implements OnInit {
  banner = [
    {
      image: 'assets/images/Spiritual-banner.jpg',
      caption: '',
    },
    { image: 'assets/images/group-sitting.JPG', caption: '' },
  ];
  ngOnInit(): void {}
}
