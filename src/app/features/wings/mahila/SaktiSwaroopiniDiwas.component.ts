import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SaktiSwaroopiniDiwas',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SaktiSwaroopiniDiwas' | translate }}
        </h1>
        <p>
          <b>Shakti Swarupini Divas</b> (Day of the Embodiment of Divine
          Feminine Power) is a monthly observance dedicated to celebrating the
          divine feminine energy (Shakti) as embodied by Sri Sathya Sai Baba,
          who is revered as the Shiva-Shakti Swaroopa—the unified form of Lord
          Shiva and Goddess Shakti. In the teachings of Bhagawan Sri Sathya Sai
          Baba, Shakti represents the universal mother, compassion, and creative
          power, often invoked through bhajans (devotional songs) like "Sathya
          Swarupini Ma Sai Prema Swarupini Ma," which praise the divine as the
          bestower of bliss, remover of obstacles, and protector of the world.
        </p>
        <p>
          This day is observed on the 19th of every month by devotees, with a
          special emphasis on selfless service (Seva), prayer, bhajans, and acts
          of compassion, particularly by the Mahila Wing (women's wing) of the
          organization. It draws inspiration from Sai Baba's life and
          discourses.
        </p>
        <app-sub-sections-links
          [page]="'wings_ladies'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SaktiSwaroopiniDiwasComponent implements OnInit {
  ngOnInit(): void {}
}
