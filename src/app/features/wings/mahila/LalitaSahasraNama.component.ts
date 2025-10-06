import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-LalitaSahasraNama',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'LalitaSahasraNama' | translate }}
        </h1>
        <p>
          The Lalita Sahasra Nama is a sacred Hindu hymn consisting of 1,000
          auspicious names of the Divine Mother Goddess Lalita (also known as
          Tripura Sundari), a manifestation of Shakti and the consort of Lord
          Shiva. It is a key text in the Shaktism tradition, emphasizing the
          worship of the Divine Feminine as the source of creation, sustenance,
          and dissolution. These events reflect Organisations’s commitment on
          women's empowerment and community service.
        </p>
        <app-sub-sections-links
          [page]="'wings_ladies'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class LalitaSahasraNamaComponent implements OnInit {
  ngOnInit(): void {}
}
