import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
//import { AsyncPipe } from '@angular/common';
//import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

import Map from 'ol/Map';
//import View from 'ol/View';
//import TileLayer from 'ol/layer/Tile';
//import OSM from 'ol/source/OSM';
//import $ from 'jquery';
//declare let $: any;
@Component({
  selector: 'app-home',
  imports: [TranslateModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  wings = [
    { name: 'Service', img: 'assets/images/service.jpg' },
    { name: 'Spiritual', img: 'assets/images/spiritual.jpg' },
    { name: 'Education', img: 'assets/images/education.jpg' },
    { name: 'Mahilas', img: 'assets/images/ladies.jpg' },
    { name: 'Youth', img: 'assets/images/youth.jpg' },
  ];
  map: Map = new Map({});
  //posts$!: Observable<any>;
  posts$: any = null;
  constructor(private apiService: ApiService) {}
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
