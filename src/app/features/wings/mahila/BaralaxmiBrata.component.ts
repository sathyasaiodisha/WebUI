import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import {SlideShowImageComponent} from '../../../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-BaralaxmiBrata',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'BaralaxmiBrata' | translate }}
        </h1>
        <div class="carousel">
          <!--Image carousel (Each image is linked to a page)-->
          <app-slideshowimage [banner]="banner"></app-slideshowimage>
        </div>
        <p>
          <b>Baralaxmi Brata</b> is a sacred Hindu vow or fast observed
          primarily by married women in Odisha and other eastern Indian regions.
          It is dedicated to Goddess Lakshmi, the deity of wealth, prosperity,
          and auspiciousness, and is a localized adaptation of the pan-South
          Indian Varalakshmi Vratam (or Vara Lakshmi Puja). The term "Baralaxmi"
          derives from "Vara Lakshmi," where "Vara" means boon or blessing,
          signifying the goddess who grants wishes for family well-being,
          marital harmony, and abundance. In Odia culture, it is often referred
          to as <b>Baibhaba Laxmi Brata</b> (Vaibhava meaning splendor or
          glory), emphasizing Lakshmi's role in bringing opulence and divine
          grace to the household.
        </p>
        <p>
          This brata is a women-centric ritual, aligning with Odisha's rich
          tradition of bratas (vows) like Sabitri Brata or Sudasha Brata, where
          participants seek blessings for their husbands' longevity, children's
          health, and overall prosperity. It is not tied to a fixed date but is
          typically performed on an auspicious Friday in the month of Shravan
          (July-August) or Margashirsha (November-December), often guided by the
          lunar calendar and personal sankalpa (vow).
        </p>
        <app-sub-sections-links
          [page]="'wings_ladies'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class BaralaxmiBrataComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/spiritual_wing/baralaxmi_puja.jpg', caption: '' }
  ];
}
