import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
//import { AsyncPipe } from '@angular/common';
//import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SlideShowImageComponent } from '../../shared/components/slideshow_image/slideshowimage.component';

import Map from 'ol/Map';
//import View from 'ol/View';
//import TileLayer from 'ol/layer/Tile';
//import OSM from 'ol/source/OSM';
//import $ from 'jquery';
//declare let $: any;
@Component({
  selector: 'app-home',
  imports: [TranslateModule, RouterLink, SlideShowImageComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
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
  banner = [{ image: 'assets/images/baba-min.jpg', caption: '' }];
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
