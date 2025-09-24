import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-dhyanaVrukshya',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'DHYANA BRIKSHA' | translate }}
        </h1>
        <p>
          Bhagawan Sri Sathya Sai Baba took a small step in the year 1959 on
          29th of June, planting a Banyan sapling at Puttaparthi on the hill top
          placing underneath a Yantra created by Him from thin air. This grew
          into a massive meditation tree giving solace to numerous Sadhakas in
          the past years and continue to help devotees connecting Swami even
          today. But this was not just the end of His Leela as the things
          unfolding in a miraculous way whereby by around 5000 saplings made out
          of the sacred tree which were sent to the nook and corner of the world
          for plantation in the respective samitis.
        </p>
        <p>
          The compassionate Mother Sai, out of Her infinite love, blessed the
          state of Odisha with 345 nos. of saplings and these saplings of
          “Dhyana Brukshya”, were brought to Odisha and planted with divine veda
          chantings & prayers at different Sai Centers across the State. Since
          then Devotees are taking due care for its nourishment, protection &
          growth is they strongly believe the presence of Swami as “Dhyana
          Brukshya”. As of now after 5 years, “Dhyana Brukshya” has grown bigger
          and devotees regularly offering their prayers and partaking meditation
          for their spiritual growth.
        </p>
        <app-sub-sections-links
          [page]="'wings_spiritual'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class DhyanaVrukshyaComponent implements OnInit {
  ngOnInit(): void {}
}
