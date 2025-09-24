import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-parthiYatra',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'PARTHI YATRA' | translate }}
        </h1>
        <p>
          A "Parthi Yatra" is a spiritual journey, or pilgrimage, by devotees
          from Odisha to Prasanthi Nilayam, the spiritual & abode of highest
          peace of Sri Sathya Sai Baba and known as abode of highest peace.
          There are regular visits of devotees to Puttaparthi round the year to
          have darshan & blessings of their beloved and revered Swami. However
          Since 2007 a large group consisting more than two thousand devotees
          from Odisha are undertaking this Parthi Yatra. Devotees gathered at
          Prashanthi Nilayam and participated in various devotional programs
          like Namarchana, talks, and dramas hosted by state of Odiahsa,
          symbolizing their unwavering devotion and connection to Bhagawan. as a
          special pilgrimage.
        </p>
      </div>
    </div>
  `,
})
export class ParthiYatraComponent implements OnInit {
  ngOnInit(): void {}
}
