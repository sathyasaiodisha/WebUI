import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
//import { AsyncPipe } from '@angular/common';
//import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import Map from 'ol/Map';
//import View from 'ol/View';
//import TileLayer from 'ol/layer/Tile';
//import OSM from 'ol/source/OSM';
//import $ from 'jquery';
//declare let $: any;
@Component({
  selector: 'app-home',
  imports: [TranslateModule, RouterLink, SharedModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  duration = 2000;
  count = { dist: 35, bhajan: 774, samithis: 242 };
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
  constructor(private apiService: ApiService) {}
  banner = [
    {
      image: 'assets/images/baba-min.jpg',
      caption:
        '"Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!"',
    },
    {
      image: 'assets/images/home/b1.jpg',
      caption:
        '"Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!"',
    },
    {
      image: 'assets/images/home/b2.jpg',
      caption:
        '"Love lives by giving and forgiving. Ego lives by getting and forgetting."',
    },
    {
      image: 'assets/images/home/b3.jpg',
      caption:
        '"See no evil, See what is good. Hear no evil, Hear what is good. Talk no evil, Talk what is good. Think no evil, Think what is good. Do no evil, Do what is good."',
    },
    {
      image: 'assets/images/home/b4.jpg',
      caption: '"Education should be for life, not for a living."',
    },
    {
      image: 'assets/images/home/b5.jpg',
      caption: '"Money comes and goes. Morality comes and grows."',
    },
    {
      image: 'assets/images/home/b6.jpg',
      caption: '"Work is worship. Duty is God."',
    },
    {
      image: 'assets/images/home/b7.jpg',
      caption: '"The best way to love God is to love all and serve all."',
    },
    {
      image: 'assets/images/home/b8.jpg',
      caption:
        '"Some say that knowledge is power, but it is not true. Character is power."',
    },
  ];
  ngOnInit(): void {
    //this.posts$ = this.apiService.getPosts();
    this.apiService.getPosts().subscribe((data) => {
      this.posts$ = data;
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
}
