import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';
import { SlideShowImageComponent } from '../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-ladies',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Ladies' | translate }}
        </h1>
        <div class="service_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>

        <p>
          In this country of Bharat was born Savitri, the woman of chastity, Who
          could fight with Yama, the God of Death and bring back to life her
          dead husband. In this country of Bharat was born Chandramathi, the
          paragon of virtue, Who suffered the terrible ordeals of her husband,
          Harischandra, Sita, the devoted consort of Rama and the divine
          daughter of Mother Earth, Who demonstrated her chastity by coming out
          of blazing fire unscathed, was born in this Bharat. Damayanthi, also a
          woman of pristine purity and chastity who stood by her husband Nala
          Through thick and thin was born in the sacred land of Bharat.Sathya
          Sai Speaks Vol 31, Chapter 14 'Glory of Womanhood'
        </p>
        <p>
          Bhagavan Baba acknowledges women as the very heart of the home and the
          backbone of society. Ladies forming this important wing of Sri Sathya
          Sai Organisation throiugh their loving service to humanity, play an
          active and purposeful role in the family, the home, in society, in the
          nation, and in the world. In the organisation they participate in
          almost all activities. Through various Samithi/District/Zonal/State
          level meets/Conventions, lot of projects have been taken bay the
          ladies wing. Sai Premdhara, RamakathaRasaVahini, Parayan, Seven
          Household Bhajan, Rudrarpitam etc. On 19th of every month Shakthi
          Swarupini Divas is celebrated with various spiritual activities.
          Maxmum contribution of ladies to Sathya Sai organisation is conducting
          BalVikas as Guru. As they shape their home, they shape the young kids
          coming to Balvikas through Love, Caring and Sharing.
        </p>
      </div>
    </div>
  `,
})
export class LadiesComponent implements OnInit {
  banner = [{ image: 'assets/images/Mahila-banner.jpg', caption: '' }];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
