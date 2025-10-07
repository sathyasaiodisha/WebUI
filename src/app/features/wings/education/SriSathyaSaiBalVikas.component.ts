import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-education-SriSathyaSaiBalVikas',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SriSathyaSaiBalVikas' | translate }}
        </h1>
        <p>
          Sri Sathya Sai Balvikas is an educational program focused on human
          values, founded by Bhagawan Sri Sathya Sai Baba in 1969. It targets
          children aged 6–15, divided into three groups based on age, and aims
          to foster the five core human values: Sathya (Truth), Dharma
          (Righteousness), Shanti (Peace), Prema (Love), and Ahimsa
          (Non-violence). The program uses interactive methods like prayer,
          group singing, meditation, storytelling, and activities to promote
          self-enquiry, character building, and spiritual growth. Well trained
          Gurus in line with Swami’s precribed syllabus and methodologies
          teaches the human values to the Bal-Vikas students.
        </p>
        <app-sub-sections-links
          [page]="'wings_education'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SriSathyaSaiBalVikasComponent implements OnInit {
  ngOnInit(): void {}
}
