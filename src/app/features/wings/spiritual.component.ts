import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SlideShowImageComponent } from '../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-spiritual',
  imports: [
    SharedModule,
    RouterLink,
    RouterLinkActive,
    SlideShowImageComponent,
  ],
  template: `
    <div class=" container py-2 px-4 border-secondary">
      <!--content_topgape-->
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Spiritual' | translate }}
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
          The Spiritual Wing is the foundation of the SSSSO, often described as
          the "roots" that nurture inner growth and awaken inherent divinity. As
          Sri Sathya Sai Baba stated, "First and the foremost wing of this
          organisation is love for God, that is spirituality." It focuses on
          fostering devotion (bhakti), self-transformation, and connection with
          the divine through group and individual practices. The wing helps
          members develop the urge to connect with their inner self, clarify
          spiritual doubts, and progress on the path of sadhana (spiritual
          discipline).
        </p>
        <p>
          This wing is essential because, as per the organization's philosophy,
          "Spirituality is the motivational force behind service and service is
          the fulfilment of spirituality." Without spiritual grounding, service
          activities lack depth, and spiritual pursuits remain abstract. It
          caters to the individual's inner needs, while the other wings address
          societal and educational aspects.
        </p>
        <h3>Key Activities of the Spiritual Wing</h3>
        <p>
          The Spiritual Wing organizes activities at local centers (Samithis),
          district levels, and national/international events. These are designed
          to inspire inward vision and collective devotion
        </p>

        <div class="spiritual_wrapper_bottom">
          <a
            *ngFor="let link of links"
            class="serviceR1"
            [routerLink]="link.url"
            routerLinkActive="active"
            >{{ link.name }}</a
          >
        </div>
      </div>
    </div>
  `,
})
export class SpiritualComponent implements OnInit {
  banner = [
    {
      image: 'assets/images/Spiritual-banner.jpg',
      caption: 'Service Banner 1',
    },
    { image: 'assets/images/group-sitting.JPG', caption: 'Service Banner 2' },
  ];
  links = [
    { name: 'Sai Symphony', url: '/' },
    { name: 'Veda Prabaham', url: '/wings/spiritual/vedaPrabaham' },
    { name: 'Bhajan', url: '/wings/spiritual/bhajan' },
    { name: 'Study circle', url: '/wings/spiritual/studyCircle' },
    { name: 'Parthi Yatra', url: '/wings/spiritual/parthiYatra' },
    { name: 'Jyothi Yatra', url: '/wings/spiritual/jyothiYatra' },
    { name: 'Lakshyarchana', url: '/wings/spiritual/Lakshyarchana' },
    { name: 'Sadhana Shibir', url: '/wings/spiritual/sadhanaShibir' },
    { name: 'Vahini Parayana', url: '/wings/spiritual/vahiniParayana' },
    { name: 'Devotees meet', url: '/wings/spiritual/devoteesMeet' },
    { name: 'Dhyana Vrukshya', url: '/wings/spiritual/dhyanaVrukshya' },
    { name: 'Seminars', url: '/wings/spiritual/seminars' },
    { name: 'Swadhyaya', url: '/wings/spiritual/swadhyaya' },
    {
      name: 'Celebration of Festivals',
      url: '/wings/spiritual/celebrationOfFestivals',
    },
  ];
  ngOnInit(): void {}
}
