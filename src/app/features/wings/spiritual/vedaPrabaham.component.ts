import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-bhajan',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'VEDA PRABAHAM(VEDIC ACTIVITIES)' | translate }}
        </h1>
        <p>
          Sri Sathya Sai Seva Organisations of Odisha conducts the Veda Prabaham
          (Vedic activities) as part of its Spiritual Wing. The core objective
          is to promote the learning and chanting of the Vedas for the spiritual
          benefit of devotees and the welfare of society.
        </p>
        <p>
          Regular Veda classes are conducted by trained scholars at various
          Sathya Sai centers across Odisha. These sessions help devotees learn
          to chant Vedic hymns with the correct pronunciation and intonation.
          With this continual efforts, there are thounsands of chanters both
          Gents & Ladies from satae are now carrying forward various Vedic
          activities such as Vedam Training, Veda Parayanam, Veda Poshanam,
          Rudra Parayanam, Maharudram etc all across Odisha.
        </p>
        <app-sub-sections-links
          [page]="'wings_spiritual'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class VedaPrabahamComponent implements OnInit {
  ngOnInit(): void {}
}
