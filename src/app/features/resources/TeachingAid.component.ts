import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-TeachingAid',
  imports: [SharedModule, MatExpansionModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'TeachingAid' | translate }}
        </h1>

        <mat-accordion multi>
          @for(cat of data;track $index; let i = $index){

            <mat-expansion-panel [expanded]="i === 0">
              <mat-expansion-panel-header>
                <mat-panel-title> {{ cat.title }} </mat-panel-title>
                <mat-panel-description>

                </mat-panel-description>
              </mat-expansion-panel-header>
              <p>
                @for(item of cat.content;track $index){
                <p>
                  <a [href]="item.link" target="_blank">
                    {{ item.name }}
                  </a>
                </p>
                }
              </p>
            </mat-expansion-panel>
          }
        </mat-accordion>

      </div>
    </div>
  `,
})
export class TeachingAidComponent implements OnInit {
  ngOnInit(): void {}

  data = [
    {
      title: 'Satya Sai School Prayer',
      content: [
        {
          name: 'Tere vandan se.mp4',
          link: 'https://drive.google.com/file/d/1k6hzuGIxeS4HRjLI180nw38ZgWrWfYlw/view?usp=drive_link',
        },
      ],
    },
    {
      title: 'Balvikash Jyoti Dhyana',
      content: [
        {
          name: 'Jyotidhyana.mp4',
          link: 'https://drive.google.com/file/d/1FgYL3gIbcBZNvGWlKU4gnILdveD4LcQI/view?usp=drive_link',
        },
      ],
    },
    {
      title: 'BalVikas- STOTRA MALA- flex design',
      content: [
        {
          name: 'Santakaram.jpg',
          link: 'https://drive.google.com/file/d/1za_eU6c_B0lhfFLi_JUA4M8C2MiUT_aU/view?usp=drive_link',
        },
      ],
    },
    {
      title: 'Balvikas Veda',
      content: [],
    },
    {
      title: 'BalVikas Bhajans for Practice',
      content: [],
    },
    {
      title: 'Balvikas Prayer',
      content: [],
    },
    {
      title: 'Balvikas Sloka',
      content: [],
    },
    {
      title: 'BalVikas Value Songs',
      content: [],
    },
    {
      title: 'Balvikas Value Song',
      content: [],
    },
    {
      title: 'Balvikas Bhajan-Listen',
      content: [],
    },
    {
      title: 'Balvikas Bhajagobinda',
      content: [],
    },
    {
      title: 'Balvikas Gita sloka',
      content: [],
    },
  ];
}
