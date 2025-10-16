import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SriSathyaSaiJagruti',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'SriSathyaSaiJagruti' | translate }}
        </h1>
        <p>
          Sri Sathya Sai Jagruti is a Youth led initiative by the Youth wing of
          SSSSO Odisha which was offered at the divine lotus feet of Bhagawan
          Baba in the year 2022 with the objective of holistic development of
          adolescent girls. Being the future mother, the physical, social as
          well as mental health greatly impact the nourishment of the child in
          future. Due to the adolescence there are many changes which is
          observed by the girls, which they need to be educated about how to
          handle. It is mainly based on 5 pillars of awareness. i.e Nutritional,
          Reproductive health, Educational and Social, Spiritual and the Skill
          development aspect.
        </p>
        <app-sub-sections-links [page]="'wings_youth'"></app-sub-sections-links>
      </div>
    </div>
  `,
})
export class SriSathyaSaiJagrutiComponent implements OnInit {
  ngOnInit(): void {}
}
