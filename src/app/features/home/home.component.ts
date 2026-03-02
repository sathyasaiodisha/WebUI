import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { ApiService } from '../../core/services/api.service';

//import { AsyncPipe } from '@angular/common';
//import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  SSSOOtweetsService,
  SSSOOTweet,
} from '../../core/services/sssootweets.service';
import Swiper from 'swiper';
import { MatDialog } from '@angular/material/dialog';
// import { SwiperOptions, SwiperModule } from 'swiper/types';
// import { Autoplay, Pagination } from 'swiper/modules';
import { ImageModalComponent } from '../../shared/components/image-modal.component';

import Map from 'ol/Map';
declare var FB: any;
//import View from 'ol/View';
//import TileLayer from 'ol/layer/Tile';
//import OSM from 'ol/source/OSM';
//import $ from 'jquery';
//declare let $: any;
export interface StatItem {
  title: string;
  value: number;
  category: 'general' | 'education' | 'medical' | 'service';
}

@Component({
  selector: 'app-home',
  imports: [
    TranslateModule,
    RouterLink,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('tweetSwiper') tweetSwiper!: ElementRef;
  private swiper: any;

  dateText = new Date().toDateString();
  sssooTweets: SSSOOTweet[] = [];
  loading = true;

  duration = 2000;
  count = {
    dist: 35,
    bhajan: 774,
    samithis: 242,
    bv: 3269,
    active_workers: 43954,
    bv_students: 25166,
    prematharu: 438649,
    permanent_medical_clinics: 56,
    liquid_love_registered: 13622,
    liquid_love_units: 6420,
    medical_camps: 586,
    sri_sathya_sai_schools: 18,
    patients_treated_phc: 5668,
    patients_treated_medical_camps: 17981,
    drinking_water_projects_ftc: 62,
  };

  stats: StatItem[] = [
    { title: 'Active Workers', value: 43954, category: 'general' },
    { title: 'Districts', value: 35, category: 'general' },
    { title: 'Bhajan Mandalis', value: 774, category: 'general' },
    { title: 'Samithis', value: 242, category: 'general' },
    { title: 'Bhajan Varnams', value: 3269, category: 'general' },

    { title: 'Bala Vikas Students', value: 25166, category: 'education' },
    { title: 'Bala Vikas Centres', value: 3269, category: 'education' },
    { title: 'Sri Sathya Sai Schools', value: 18, category: 'education' },

    { title: 'Prematharu', value: 438649, category: 'service' },
    { title: 'Drinking Water Projects', value: 62, category: 'service' },

    { title: 'Permanent Medical Clinics', value: 56, category: 'medical' },
    { title: 'Medical Camps Conducted', value: 586, category: 'medical' },
    {
      title: 'Patients treated in Permanent Hospitals & Clinics',
      value: 5668,
      category: 'medical',
    },
    {
      title: 'Patients treated in Medical Camps',
      value: 17981,
      category: 'medical',
    },

    {
      title: 'Blood Donors Registered in Liquid Love',
      value: 13622,
      category: 'service',
    },
    {
      title: 'Units of Blood offered under Liquid Love',
      value: 6420,
      category: 'service',
    },
  ];
  getCategoryClass(category: string): string {
    return `card-${category}`;
  }
  distarr: any[] = [
    // id, name, BhajanMandali count, Samithi count
    [0, ''],
    [1, ''],
    [2, 'Angul', 10, 11],
    [3, 'Boudh', 4, 14],
    [4, 'Balangir', 7, 33],
    [5, 'Bargarh', 7, 27],
    [6, 'Balasore', 4, 44, 4, 22],
    [7, 'Bhadrak', 8, 45, 7, 50],
    [8, 'Cuttack', 10, 38],
    [9, 'Deogarh', 5, 4],
    [10, 'Dhenkanal', 8, 22],
    [11, 'Ganjam', 10, 47, 5, 20],
    [12, 'Gajapati', 3, 16],
    [13, 'Jharsuguda', 5, 2],
    [14, 'Jajpur', 14, 38],
    [15, 'Jagatsinghpur', 8, 17],
    [16, 'Khordha', 8, 6],
    [17, 'Keonjhar', 9, 10, 9, 21],
    [18, 'Kalahandi', 5, 39],
    [19, 'Kandhamal', 4, 5],
    [20, 'Koraput', 8, 14],
    [21, 'Kendrapara', 12, 26],
    [22, 'Malkangiri', 5, 5],
    [23, 'Mayurbhanj', 10, 43],
    [24, 'Nabarangpur', 5, 3],
    [25, 'Nuapada', 5, 11],
    [26, 'Nayagarh', 5, 9],
    [27, 'Puri', 7, 15],
    [28, 'Rayagada', 9, 31],
    [29, 'Sambalpur', 5, 5],
    [30, 'Subarnapur', 4, 14],
    [31, 'Sundargarh', 5, 12],
  ]; // district id array.
  onDistrictClick(id: number) {
    console.log(this.distarr[id][1]);
    //this.districtName = ': ' + this.distarr[id][1];
    // your logic here
  }
  getDistrictData(id: number): string {
    return this.distarr[id] && this.distarr[id][1]
      ? `B:${this.distarr[id][2]}, S:${this.distarr[id][3]}`
      : '';
  }
  getDistrictData2(id: number): string {
    return this.distarr[id] && this.distarr[id][1]
      ? `B:${this.distarr[id][4]}, S:${this.distarr[id][5]}`
      : '';
  }
  districtName = '';
  wings = [
    {
      name: 'Service',
      img: 'assets/images/ServiceLogo-min.png',
      link: '/wings/service',
    },
    {
      name: 'Spiritual',
      img: 'assets/images/SpiritualLogo-min.png',
      link: '/wings/spiritual',
    },
    {
      name: 'Education',
      img: 'assets/images/EducationLogo-min.png',
      link: '/wings/education',
    },
    {
      name: 'Mahilas',
      img: 'assets/images/MahilaLogo.png',
      link: '/wings/ladies',
    },
    {
      name: 'Youth',
      img: 'assets/images/YouthLogo-min.png',
      link: '/wings/youth',
    },
  ];
  map: Map = new Map({});
  //posts$!: Observable<any>;
  posts$: any = null;
  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private sssooTweetsSvc: SSSOOtweetsService,
  ) {}
  banner = [
    {
      image:
        'assets/images/banners_and_eventphotos/occasionalbanners/banner.png',
      interval: '20000',
      carouselFadeClass: 'slow-fade',
      //caption:'"Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!"',
    },
    {
      image: 'assets/images/baba-min.jpg',
      caption:
        '"Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!"',
      interval: '4000',
    },
    {
      image: 'assets/images/home/b1.jpg',
      caption:
        '"Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!"',
      interval: '4000',
    },
    {
      image: 'assets/images/home/b2.jpg',
      caption:
        '"Love lives by giving and forgiving. Ego lives by getting and forgetting."',
      interval: '4000',
    },
    {
      image: 'assets/images/home/b3.jpg',
      caption:
        '"See no evil, See what is good. Hear no evil, Hear what is good. Talk no evil, Talk what is good. Think no evil, Think what is good. Do no evil, Do what is good."',
      interval: '4000',
    },
    {
      image: 'assets/images/home/b4.jpg',
      caption: '"Education should be for life, not for a living."',
      interval: '4000',
    },
    {
      image: 'assets/images/home/b5.jpg',
      caption: '"Money comes and goes. Morality comes and grows."',
      interval: '4000',
    },
    {
      image: 'assets/images/home/b6.jpg',
      caption: '"Work is worship. Duty is God."',
      interval: '4000',
    },
    {
      image: 'assets/images/home/b7.jpg',
      caption: '"The best way to love God is to love all and serve all."',
      interval: '4000',
    },
    {
      image: 'assets/images/home/b8.jpg',
      caption:
        '"Some say that knowledge is power, but it is not true. Character is power."',
      interval: '4000',
    },
  ];
  ngOnInit(): void {
    //this.posts$ = this.apiService.getPosts();
    this.apiService.getPosts().subscribe((data) => {
      this.posts$ = data;
    });

    this.sssooTweetsSvc.getItems().subscribe({
      next: (data) => {
        this.sssooTweets = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading tweets', err);
        this.loading = false;
      },
    });
    /*
    this.map = new Map({
      view: new View({
        center: [20.2376, 84.27],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map',
    });
    */
  }
  openImage(imageUrl: string) {
    this.dialog.open(ImageModalComponent, {
      data: { imageUrl },
      panelClass: 'image-dialog',
      maxWidth: '90vw',
      maxHeight: '90vh',
    });
  }
  ngAfterViewInit() {
    // If SDK is loaded, parse FB tags inside the component
    if (typeof FB !== 'undefined' && FB !== null) {
      FB.XFBML.parse();
    }

    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    // Swiper is initialized automatically for <swiper-container> in Swiper 11+
    document.body.appendChild(script);

    const swiperEl = this.tweetSwiper.nativeElement as any;

    const startAutoplay = () => {
      this.swiper = swiperEl.swiper;
      if (this.swiper && this.swiper.autoplay) this.swiper.autoplay.start();
    };

    // Delay start until visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startAutoplay();
        observer.disconnect();
      }
    });

    observer.observe(swiperEl);
  }

  slidePrev() {
    this.swiper?.slidePrev();
  }

  slideNext() {
    this.swiper?.slideNext();
  }
}
