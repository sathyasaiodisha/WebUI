import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-KumkumaPujaArchana',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'KumkumaPujaArchana' | translate }}
        </h1>
        <p>
          Kumkuma Puja or Kumkuma Archana is a traditional Hindu devotional
          ritual that involves offering kumkum (vermilion or red turmeric
          powder) to a deity, typically the Divine Mother (such as Goddess
          Lalita, Durga, or other forms of Shakti), Kumkuma Puja is a popular
          spiritual activity, especially among the Mahila (women’s) wing, as it
          fosters devotion (bhakti), community bonding, and alignment with Sai
          Baba’s teachings of love, service (seva), and spiritual discipline.
        </p>
        <app-sub-sections-links
          [page]="'wings_ladies'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class KumkumaPujaArchanaComponent implements OnInit {
  ngOnInit(): void {}
}
