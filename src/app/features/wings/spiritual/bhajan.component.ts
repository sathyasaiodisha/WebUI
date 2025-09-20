import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-bhajan',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SAI BHAJAN' | translate }}
        </h1>
        <p>
          “Sing aloud the glory of God and charge the atmosphere with divine
          adoration . . . This is why I insist on group singing of the names of
          the Lord.” – Sri Sathya Sai (SSS, VI, 239)
        </p>
        <p>
          “Realise that there is nothing greater than bhajan. What bliss is
          there in bhajans! What a demonstration of oneness is it when a myriad
          of throats join in uttering the name of God! The vibrations emanating
          from them make the heart vibrant.” - Sri Sathya Sai (26th January
          1995)
        </p>
        <p>
          Bhajans, or devotional songs, hold a central place in the spiritual
          teachings of Sri Sathya Sai Baba. Sri Sathya Sai Baba emphasized group
          devotional singing as in the Kali yuga, chanting of God's Name is the
          royal path to liberation. It is key method for inner transformation in
          the modern age, alongside practices like namasmarana (remembering
          God's name) and sankeerthan (devotional music). He described bhajan as
          "the process of singing your prayers to God, praising His glory and
          compassion, and pleading that He may fill you with His Grace."
        </p>
        <p>
          Devotees all across join the Group singing of Bhjajans regularly at
          Sri Sathya Sai centers as well as at their own homes. Workshops and
          training are organized with competent faculties at various centers to
          train the interested / talented members to enhance their musical as
          well as singing skills requisite for Sai Bhajan.
        </p>
      </div>
    </div>
  `,
})
export class BhajanComponent implements OnInit {
  ngOnInit(): void {}
}
