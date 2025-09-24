import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-vahiniParayana',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'VAHINI PARAYANA' | translate }}
        </h1>
        <p>
          "Vahini" means "stream" or "river" in Sanskrit, symbolizing a
          continuous flow of divine wisdom and grace. These books are often
          described as the "Ganga from the Lotus Feet of the Lord," offering
          profound guidance on self-realization, ethics, devotion, and the unity
          of the divine self (Atma) with the universal Overself (Brahman). They
          emphasize that the ultimate purpose of human life is to recognize
          one's inherent divinity and achieve spiritual liberation
        </p>
        <p>
          "Vahini Parayan" is not a single event, but refers to the collective
          practice of reading, studying, and reflecting on the spiritual
          writings known as "Vahinis," authored by Bhagawan Sri Sathya Sai Baba.
        </p>
        <p>
          Between 1958 and 1984, Baba wrote 15 Vahinis, immortal classics from
          the Divine pen, covering various facets vital for a spiritual
          aspirant. In Odisha, these Vahini readings are organized and devotees
          participate in Parayana .
        </p>
        <app-sub-sections-links
          [page]="'wings_spiritual'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class VahiniParayanaComponent implements OnInit {
  ngOnInit(): void {}
}
