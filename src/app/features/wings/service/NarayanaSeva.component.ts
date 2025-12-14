import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-NarayanaSeva',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'NarayanaSeva' | translate }}
        </h1>
         <div class="spiritual_wrapper_top">
          <div class="carousel">
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>
        <p>
          Narayan Seva is one of most important & compassionate service, that involves the selfless distribution of food
          and essentials to the underprivileged, following the spiritual teachings of Sri Sathya Sai Baba. Members &
          Devotees regularly organize these events, in huge numbers during festivals or auspicious occasions, to serve
          "Narayanas" (people in need) with food, water, and other support, embodying Baba's principle of "Love All,
          Serve All".
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class NarayanaSevaComponent implements OnInit {
  ngOnInit(): void {}
  banner = [{ image: 'assets/images/service_wing/narayan_seva.jpg', caption: '' }];
}
