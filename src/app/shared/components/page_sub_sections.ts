import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
type linkMap = { name: string; url: string }[];
type pageMap = {
  title: string;
  description: string;
  links: linkMap;
};
type AllpageMap = Record<string, pageMap>;
@Component({
  selector: 'app-sub-sections-links',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <h3>{{ title }}</h3>
    <p>
      {{ description }}
    </p>

    <div class="sub_wing_wrapper_bottom">
      @for(link of links; track $index;){
      <button
        type="button"
        [routerLink]="link.url"
        routerLinkActive="active"
        class="btn btn-light"
      >
        {{ link.name }}
      </button>
      }
    </div>
  `,
})
export class SubSectionComponent implements OnInit {
  @Input() page: string = '';
  allLinks: AllpageMap = {
    wings_service: {
      title: 'Key Activities of the Service Wing',
      description: '',
      links: [
        { name: 'Agri care', url: '/wings/service/Agricare' },
        { name: 'Animal care', url: '/wings/service/Animalcare' },
        { name: 'Aqua care', url: '/wings/service/Aquacare' },
        { name: 'Digital archive', url: '/wings/service/Digitalarchive' },
        {
          name: 'Digital connectivity',
          url: '/wings/service/digitalConnectivity',
        },
        { name: 'Holistic health', url: '/wings/service/Holistichealth' },
        { name: 'Blood donation', url: '/wings/service/Blooddonation' },
        { name: 'Prasanthi Seva', url: '/wings/service/prasanthiSeva' },
        { name: 'SSSVIP', url: '/wings/service/SSSVIP' },
        { name: 'SSSHP', url: '/wings/service/SSSHP' },
        { name: 'Telemedicine', url: '/wings/service/Telemedicine' },
        { name: 'Service Activities', url: '/wings/service/ServiceActivities' },
      ],
    },
    wings_spiritual: {
      title: 'Key Activities of the Spiritual Wing',
      description:
        'The Spiritual Wing organizes activities at local centers (Samithis), district levels, and national/international events. These are designed          to inspire inward vision and collective devotion',
      links: [
        { name: 'Sai Symphony', url: '/wings/spiritual/saiSymphony' },
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
      ],
    },
    wings_ladies: {
      title: 'Spiritual Wing Activities',
      description:
        'Explore the various activities and programs conducted by the Spiritual Wing to foster devotion and self-transformation.',
      links: [
        { name: '', url: '/wings/ladies/' },
        { name: '', url: '/wings/ladies/' },
        { name: '', url: '/wings/ladies/' },
        { name: '', url: '/wings/ladies/' },
        { name: '', url: '/wings/ladies/' },
        { name: '', url: '/wings/ladies/' },
        { name: '', url: '/wings/ladies/' },
        { name: '', url: '/wings/ladies/' },
        { name: '', url: '/wings/ladies/' },
      ],
    },
  };
  links: linkMap = [];
  title: string = '';
  description: string = '';
  ngOnInit(): void {
    if (this.page in this.allLinks) {
      this.links = this.allLinks[this.page].links ?? [];
      this.title = this.allLinks[this.page].title ?? '';
      this.description = this.allLinks[this.page].description ?? '';
    } else {
      this.links = [];
    }
  }
}
