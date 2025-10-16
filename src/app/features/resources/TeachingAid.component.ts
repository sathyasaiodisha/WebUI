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

        <table class="table table-bordered">
          <tbody>
            @for(ro of data; track $index){
            <tr>
              <td>
                {{ ro?.title ?? ro.link }}
              </td>
              <td>
                <a
                  id="ContentPlaceHolder1_HyperLink1"
                  target="_blank"
                  href="files/pdf/presentations/{{ ro.link }}"
                  >View</a
                >
              </td>
            </tr>
            }
          </tbody>
        </table>
        <!--
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
        </mat-accordion> -->
      </div>
    </div>
  `,
})
export class TeachingAidComponent implements OnInit {
  ngOnInit(): void {}

  data = [
    {
      title: 'Satya Sai School Prayer',
      link: 'https://drive.google.com/drive/folders/1mGnYcHDKFOi_-T5VqVzzYUltWJutJi8v?usp=drive_link',
      content: [
        {
          name: 'Tere vandan se.mp4',
          link: 'https://drive.google.com/file/d/1k6hzuGIxeS4HRjLI180nw38ZgWrWfYlw/view?usp=drive_link',
        },
      ],
    },
    {
      title: 'Balvikash Jyoti Dhyana',
      link: 'https://drive.google.com/drive/folders/1ww5GsgSZ-4aAuDs1EhOZFT1rw0-Gv4nQ?usp=drive_link',
      content: [
        {
          name: 'Jyotidhyana.mp4',
          link: 'https://drive.google.com/file/d/1FgYL3gIbcBZNvGWlKU4gnILdveD4LcQI/view?usp=drive_link',
        },
      ],
    },
    {
      title: 'BalVikas- STOTRA MALA- flex design',
      link: 'https://drive.google.com/drive/folders/14AAG5_sPbPS5mqRFHKIqQw-JZNd1hDjz?usp=drive_link',
      content: [
        {
          name: 'Santakaram.jpg',
          link: 'https://drive.google.com/file/d/1za_eU6c_B0lhfFLi_JUA4M8C2MiUT_aU/view?usp=drive_link',
        },
      ],
    },
    {
      title: 'Balvikas Veda',
      link: 'https://drive.google.com/drive/folders/1TfdmO_ZlwZueVasN_fzqk8hQqBVUcFTg?usp=drive_link',
      content: [],
    },
    {
      title: 'BalVikas Bhajans for Practice',
      link: 'https://drive.google.com/drive/folders/1PVslaUFaAw0adAgUSH7byC4BZyW9u22n?usp=drive_link',
      content: [],
    },
    {
      title: 'Balvikas Prayer',
      link: 'https://drive.google.com/drive/folders/1ix1HAJdsJECNL_MU81FMFRvMllLDNpfi?usp=drive_link',
      content: [],
    },
    {
      title: 'Balvikas Sloka',
      link: 'https://drive.google.com/drive/folders/12xlu-U9cl0gIAcLR8X7z2_haxCn6lflc?usp=drive_link',
      content: [],
    },
    {
      title: 'BalVikas Value Songs',
      link: 'https://drive.google.com/drive/folders/1i86s0dDiaLrZdOr_YjT29Opiz5Zn-wMX?usp=drive_link',
      content: [],
    },
    {
      title: 'Balvikas Value Song',
      link: 'https://drive.google.com/drive/folders/12Nm0fSJcAhpYe8-pciTw7KowHn72iZ78?usp=drive_link',
      content: [],
    },
    {
      title: 'Balvikas Bhajan-Listen',
      link: 'https://drive.google.com/drive/folders/1P9uchPW4fGBEceI2yeZycUuNYNXMmuQa?usp=drive_link',
      content: [],
    },
    {
      title: 'Balvikas Bhajagobinda',
      link: 'https://drive.google.com/drive/folders/1K7Jxw_jk-221cxOqAVWBYk7NyopOfMgl?usp=drive_link',
      content: [],
    },
    {
      title: 'Balvikas Gita sloka',
      link: 'https://drive.google.com/drive/folders/1x11Vkc2Qe2LJnlaWhNAIOEkCcCHHI1ky?usp=drive_link',
      content: [],
    },
  ];
}
