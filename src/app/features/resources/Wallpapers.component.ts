import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-Wallpapers',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Wallpapers' | translate }}
        </h1>
        <div class="service_wrapper_top">
          <div class="homeCarousel">
            <div class="carousel">
              <app-slideshowimage [banner]="banner"></app-slideshowimage>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WallpapersComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/wallpaper/2025/01-02-2025.png' },
    { image: 'assets/images/wallpaper/2025/01-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/01-07-2025.png' },
    { image: 'assets/images/wallpaper/2025/01-09-2025 copy.png' },
    { image: 'assets/images/wallpaper/2025/02-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/02-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/02-08-2025 copy.png' },
    { image: 'assets/images/wallpaper/2025/03-01-2025.png' },
    { image: 'assets/images/wallpaper/2025/03-04-2025 (1).png' },
    { image: 'assets/images/wallpaper/2025/03-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/04-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/04-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/05-03-2025.png' },
    { image: 'assets/images/wallpaper/2025/05-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/05-07-2025.png' },
    { image: 'assets/images/wallpaper/2025/07-02-2025.png' },
    { image: 'assets/images/wallpaper/2025/07-03-2025.png' },
    { image: 'assets/images/wallpaper/2025/07-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/08-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/08-07-2025.png' },
    { image: 'assets/images/wallpaper/2025/09-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/09-09-2025 copy.png' },
    { image: 'assets/images/wallpaper/2025/10-01-2025.png' },
    { image: 'assets/images/wallpaper/2025/10-08-2025 copy.png' },
    { image: 'assets/images/wallpaper/2025/11-01-2025.png' },
    { image: 'assets/images/wallpaper/2025/11-02-2025.png' },
    { image: 'assets/images/wallpaper/2025/11-03-2025.png' },
    { image: 'assets/images/wallpaper/2025/11-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/12-02-2025.png' },
    { image: 'assets/images/wallpaper/2025/12-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/12-08-2025 copy.png' },
    { image: 'assets/images/wallpaper/2025/13-1-2025.png' },
    { image: 'assets/images/wallpaper/2025/13-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/13-05-2025.png' },
    { image: 'assets/images/wallpaper/2025/15-05-2025.png' },
    { image: 'assets/images/wallpaper/2025/15-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/16-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/16-05-2025.png' },
    { image: 'assets/images/wallpaper/2025/17-1-2025.png' },
    { image: 'assets/images/wallpaper/2025/17-02-2025.png' },
    { image: 'assets/images/wallpaper/2025/17-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/17-09-2025 copy.png' },
    { image: 'assets/images/wallpaper/2025/19-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/20-02-2025.png' },
    { image: 'assets/images/wallpaper/2025/21-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/21-07-2025.png' },
    { image: 'assets/images/wallpaper/2025/23-03-2025.png' },
    { image: 'assets/images/wallpaper/2025/23-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/23-05-2025.png' },
    { image: 'assets/images/wallpaper/2025/23-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/24-05-2025.png' },
    { image: 'assets/images/wallpaper/2025/25-04-2025 (1).png' },
    { image: 'assets/images/wallpaper/2025/25-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/25-05-2025.png' },
    { image: 'assets/images/wallpaper/2025/27-1-2025.png' },
    { image: 'assets/images/wallpaper/2025/27-03-2025.png' },
    { image: 'assets/images/wallpaper/2025/28-03-2025.png' },
    { image: 'assets/images/wallpaper/2025/28-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/28-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/28-8-2025 copy.png' },
    { image: 'assets/images/wallpaper/2025/29-03-2025.png' },
    { image: 'assets/images/wallpaper/2025/29-04-2025 (1).png' },
    { image: 'assets/images/wallpaper/2025/29-04-2025.png' },
    { image: 'assets/images/wallpaper/2025/29-06-2025.png' },
    { image: 'assets/images/wallpaper/2025/30-05-2025.png' },
    { image: 'assets/images/wallpaper/2025/31-03-2025.png' },
    { image: 'assets/images/wallpaper/2025/Aradhana Diwas.png' },
    { image: 'assets/images/wallpaper/2025/ati rudra.png' },
    { image: 'assets/images/wallpaper/2025/Buddha Purnima.png' },
    { image: 'assets/images/wallpaper/2025/Eshwaramma.png' },
    { image: 'assets/images/wallpaper/2025/ganesh puja.png' },
    { image: 'assets/images/wallpaper/2025/Guru Purnima.png' },
    { image: 'assets/images/wallpaper/2025/Holi.png' },
    { image: 'assets/images/wallpaper/2025/janmastami & Independence day.png' },
    { image: 'assets/images/wallpaper/2025/makar sankranti.png' },
    { image: 'assets/images/wallpaper/2025/navratri (2).png' },
    { image: 'assets/images/wallpaper/2025/navratri (3).png' },
    { image: 'assets/images/wallpaper/2025/navratri.png' },
    { image: 'assets/images/wallpaper/2025/new year.png' },
    { image: 'assets/images/wallpaper/2025/paduka yatra.png' },
    { image: 'assets/images/wallpaper/2025/Raja..png' },
    { image: 'assets/images/wallpaper/2025/Raja.png' },
    { image: 'assets/images/wallpaper/2025/Ram Navami.png' },
    { image: 'assets/images/wallpaper/2025/ratha yatra.png' },
    { image: 'assets/images/wallpaper/2025/republic day.png' },
    { image: 'assets/images/wallpaper/2025/saraswati puja.png' },
    { image: 'assets/images/wallpaper/2025/shiva ratri.png' },
    { image: 'assets/images/wallpaper/2025/state cconfewrence.png' },
  ];
}
