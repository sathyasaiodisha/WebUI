import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-swadhyaya',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SWADHYAYA' | translate }}
        </h1>
        <p>
          Swadhyaya (often spelled "Svadhyaya" or "Swadhyaya") is a Sanskrit
          term meaning "self-study" or "self-inquiry," derived from the roots
          sva (self) and dhyaya (study or recitation). In the broader Hindu
          tradition, it refers to the disciplined study and contemplation of
          sacred scriptures, such as the Vedas, Upanishads, Bhagavad Gita, and
          other texts, as a path to spiritual growth and self-realization.
        </p>
        <p>
          Sri Sathya Sai Baba emphasized Swadhyaya as essential for spiritual
          aspirants (sadhakas) to overcome doubt, anxiety, and ego, while
          cultivating inner peace and service-oriented living. In his
          discourses, he described it as a remedy for "the disease of doubt,
          despair, and hesitation," urging members to use it alongside seva for
          holistic growth. Swadhya or Study of Sai Literatures by the members of
          Sri Sathya Sai nSeva Organisations is inbuilt and part of their day to
          day activities.
        </p>
      </div>
    </div>
  `,
})
export class SwadhyayaComponent implements OnInit {
  ngOnInit(): void {}
}
