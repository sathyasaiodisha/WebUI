import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-Lakshyarchana',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'LAKSHYARCHANA & NAMARCHANA' | translate }}
        </h1>
        <p>
          Lakhyarchana and Namarchana are devotional events in which through
          collective chanting of sacred names and prayers, devotees seek grace
          and blessings of their beloved Swami.
        </p>
        <p>
          Laksharchana is a collective sadhana (spiritual practice) involving
          the chanting of a sacred mantra 100,000 times ("Laksha" meaning
          1,00,000 in Sanskrit, and "Archana" referring to offering or worship).
          Whereas Namarchana is a simpler, more flexible form of worship focused
          on continuous chanting of God's name (Nama). These are typically
          performed in groups to amplify its benefits, creating a charged
          spiritual atmosphere that purifies the mind and benefits participants'
          families and the wider community.
        </p>
        <p>
          These practices embody Sai Baba's message: "Chant the Name of the Lord
          and the Lord will take care of you."
        </p>
      </div>
    </div>
  `,
})
export class LakshyarchanaComponent implements OnInit {
  ngOnInit(): void {}
}
