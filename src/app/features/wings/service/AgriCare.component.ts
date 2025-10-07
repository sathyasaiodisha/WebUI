import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-AgriCare',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'AgriCare' | translate }}
        </h1>
        <p>
          AGRI CARE is a program focused on village agricultural development and
          self-sufficiency. It is part of the larger Sri Sathya Sai Grama Seva
          initiative, which aims for the holistic transformation of villages.
          The program trains farmers in modern cultivation techniques and
          organizes farmers' meets to share knowledge. Farmers are encouraged
          and trained in organic farming practices, including the preparation of
          vermicompost and other organic manures from agricultural, veterinary,
          and domestic waste. As per the need, Agricultural tools and equipment
          are provided to farmers to support their work. It promotes additional
          income sources, such as milk production and small-scale, alternative
          revenue generation
        </p>
        <app-sub-sections-links
          [page]="'wings_service'"
        ></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class AgriCareComponent implements OnInit {
  ngOnInit(): void {}
}
