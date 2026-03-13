import { Component, OnInit, inject, Inject } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-TeachingAid',
  imports: [SharedModule, MatExpansionModule, MatDialogModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'TeachingAid' | translate }}
        </h1>

        <table class="table table-bordered">
          <tbody>
            @for (ro of data; track $index) {
              <tr>
                <td>
                  {{ ro?.title ?? ro.link }}
                </td>
                <td>
                  <a
                    id="ContentPlaceHolder1_HyperLink1"
                    target="_blank"
                    href="{{ ro.link }}"
                    >View</a
                  >
                </td>
              </tr>
            }
          </tbody>
        </table>
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Stotras' | translate }}
        </h1>
        <ng-container
          *ngTemplateOutlet="listTemplate; context: { list: data_stotras }"
        ></ng-container>
      </div>
    </div>
    <ng-template #listTemplate let-list="list">
      <mat-accordion>
        @for (cat of list; track $index; let i = $index) {
          @if (cat.links?.length > 0) {
            <mat-expansion-panel [expanded]="i === 0">
              <mat-expansion-panel-header>
                <mat-panel-title>
                  <b>{{ cat.title }}</b>
                </mat-panel-title>
                <mat-panel-description> </mat-panel-description>
              </mat-expansion-panel-header>
              <ng-container
                *ngTemplateOutlet="listTemplate; context: { list: cat.links }"
              ></ng-container>
            </mat-expansion-panel>
          } @else {
            <p>
              @if (0) {
                @if (
                  cat.link.endsWith('.mp3') ||
                  cat.link.endsWith('.aac') ||
                  cat.link.endsWith('.wav') ||
                  cat.link.endsWith('.ogg')
                ) {
                  <a
                    class="link cursor"
                    mat-raised-button
                    role="button"
                    (click)="openAudio(cat.link)"
                  >
                    {{ cat.title }}
                  </a>
                } @else if (cat.link.endsWith('.mp4')) {
                  <a
                    class="link cursor"
                    mat-raised-button
                    role="button"
                    (click)="openVideo(cat.link)"
                  >
                    {{ cat.title }}
                  </a>
                } @else {}
              }
              <a [href]="cat?.link" target="_blank"> {{ cat.title }} </a>
            </p>
          }
        }
      </mat-accordion>
    </ng-template>
  `,
})
export class TeachingAidComponent implements OnInit {
  ngOnInit(): void {}
  private dialog: MatDialog = inject(MatDialog);
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
  data_stotras = [
    {
      title: 'GROUP-1 1ST YEAR',
      links: [
        {
          title: 'ଓଁକାରଂ ବିନ୍ଦୁ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଓଁକାରଂ%20ବିନ୍ଦୁ/OmKaramVindu.mp3',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଓଁକାରଂ%20ବିନ୍ଦୁ/ଓଁ କାରଂ ବିନ୍ଦୁ ସଂଯୁକ୍ତଂ.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଓଁକାରଂ%20ବିନ୍ଦୁ/ଓଁ କାରଂ ବିନ୍ଦୁ...pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଓଁକାରଂ%20ବିନ୍ଦୁ/ଓଁ କାରଂ ବିନ୍ଦୁ...pptx',
            },
            {
              title: 'Audio (acc)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଓଁକାରଂ%20ବିନ୍ଦୁ/ଓଁକାରଂ ସୂହ ଗାନ.aac',
            },
          ],
        },
        {
          title: 'କର ଚରଣ କୃତଂବାକ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କର ଚରଣ କୃତଂବାକ/karacharana.mp3',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କର ଚରଣ କୃତଂବାକ/କର ଚରଣ ଅଭିନୟ ଭିଡିଓ.mp4',
            },
            {
              title: 'Audio Group (mp3)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କର ଚରଣ କୃତଂବାକ/କର ଚରଣ ସମୂହ ଗାନ.mp3',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କର ଚରଣ କୃତଂବାକ/କର ଚରଣ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କର ଚରଣ କୃତଂବାକ/କର ଚରଣ.pptx',
            },
          ],
        },
        {
          title: 'କରାଗ୍ରେ ବସତେ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କରାଗ୍ରେ ବସତେ/KaragreVasate.mp3',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କରାଗ୍ରେ ବସତେ/କରାଗ୍ରେ ବସତେ ଲକ୍ଷ୍ମୀ ସମୂହ ଗാന.aac',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କରାଗ୍ରେ ବସତେ/କରାଗ୍ରେ ବସତେ ଲକ୍ଷ୍ମୀ.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କରାଗ୍ରେ ବସତେ/କରାଗ୍ରେ ବସତେ ଲിങ്ക്.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_1ST_YEAR/କରାଗ୍ରେ ବସତେ/କରାଗ୍ରେ ବସତେ ଲକ୍ଷ୍ମୀ.pptx',
            },
          ],
        },
        {
          title: 'ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ/GuruBrahma.mp3',
            },
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ/ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ.mp3',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ/ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ/ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ/ଗୁରୁର୍ବ୍ରହ୍ମା ଗୁରୁର୍ବିଷ୍ଣୁ.pptx',
            },
          ],
        },
        {
          title: 'ତ୍ବମେବ ମାତା',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ତ୍ବମେବ ମାତା/TwamevaMata.mp3',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ତ୍ବମେବ ମାତା/ତ୍ବମେବ ମାତା ର ଭିଡିଓ.mp4',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ତ୍ବମେବ ମାତା/ତ୍ବମେବ ମାତା.. ସମୂହ ଗାନ.aac',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ତ୍ବମେବ ମାତା/ତ୍ୱମେବ ମାତା ଶ୍ଚ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ତ୍ବମେବ ମାତା/ତ୍ୱମେବ ମାତା ଶ୍ଚ.pptx',
            },
          ],
        },
        {
          title: 'ବକ୍ରତୁଣ୍ଡ ମହାକାୟ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ବକ୍ରତୁଣ୍ଡ ମହାକାୟ/Vakratunda.mp3',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ବକ୍ରତୁଣ୍ଡ ମହାକାୟ/ବକ୍ରତୁଣ୍ଡ ମହାକାୟ ଅଭିନୟ ଭିଡିଓ.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ବକ୍ରତୁଣ୍ଡ ମହାକାୟ/ବକ୍ରତୁଣ୍ଡ ମହାକାୟ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ବକ୍ରତୁଣ୍ଡ ମହାକାୟ/ବକ୍ରତୁଣ୍ଡ ମହାକାୟ.pptx',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ବକ୍ରତୁଣ୍ଡ ମହାକାୟ/ବକ୍ରତୁଣ୍ଡର ସମୂହ ଗାନ.aac',
            },
          ],
        },
        {
          title: 'ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା/Harir Data.mp3',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା/ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା.aac',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା/ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା/ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_1ST_YEAR/ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା/ହରିର୍ଦାତା ହରିର୍ଭୋକ୍ତା.pptx',
            },
          ],
        },
      ],
    },
    {
      title: 'GROUP-1 2ND YEAR',
      links: [
        {
          title: 'ଅସତୋ ମା',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ଅସତୋ ମା/AsatoMaa.mp3',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ଅସତୋ ମା/ଅସତୋ ମା ର ଭିଡିଓ.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ଅସତୋ ମା/ଅସତୋ ମା ସଦଗମୟ.pdf',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ଅସତୋ ମା/ଅସତୋ ମା ସମୂହ ଗାନ.aac',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ଅସତୋ ମା/ଅସତୋମା ସଦଗମୟ.pptx',
            },
          ],
        },
        {
          title: 'କୈଳାସ ରାଣା',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/କୈଳାସ ରାଣା/kailasarana.mp3',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_2ND_YEAR/କୈଳାସ ରାଣା/କୈଳାସ ରାଣା ଶିବଚନ୍ଦ୍ର ମୌଳୀ.mp4',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/କୈଳାସ ରାଣା/କୈଳାସ ରାଣା ସମୂହ ଗାନ.aac',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_2ND_YEAR/କୈଳାସ ରାଣା/କୈଳାସ ରାଣା.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_2ND_YEAR/କୈଳାସ ରାଣା/କୈଳାସରାଣା.pptx',
            },
          ],
        },
        {
          title: 'ନମସ୍ତେସ୍ତୁ ମହାମାୟେ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ନମସ୍ତେସ୍ତୁ ମହାମାୟେ/namastestu_mahaamaaye Music.mp3',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ନମସ୍ତେସ୍ତୁ ମହାମାୟେ/ନମସ୍ତେସ୍ତୁ ମହାମାୟେ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ନମସ୍ତେସ୍ତୁ ମହାମାୟେ/ନମସ୍ତେସ୍ତୁ ମହାମାୟେ.pptx',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ନମସ୍ତେସ୍ତୁ ମହାମାୟେ/ନମସ୍ତେସ୍ତୁ ମହାମାୟେ_1.mp4',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ନମସ୍ତେସ୍ତୁ ମହାମାୟେ/ନମୋସ୍ତୁତେ ସମୂହ ଗାନ.aac',
            },
          ],
        },
        {
          title: 'ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ/sarva_mangala Music.mp3',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ/ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ ର ସମୂହ ଗାନ.aac',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ/ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ/ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ/ସର୍ବ ମଙ୍ଗଳ ମାଙ୍ଗଲ୍ୟେ.pptx',
            },
          ],
        },
        {
          title: 'ସର୍ବୈ ବୈ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବୈ ବୈ/Save vei sukhino.mp3',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବୈ ବୈ/ସର୍ବ ବୈ ସୁଖିନଃ ସନ୍ତୁ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବୈ ବୈ/ସର୍ବ ବୈ ସୁଖିନଃ ସନ୍ତୁ.pptx',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବୈ ବୈ/ସର୍ବେ ବୈ ର ସମୂହ ଗାନ.aac',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସର୍ବୈ ବୈ/ସର୍ବେ ବୈ ସୁଖିନୋ ସନ୍ତୁ.mp4',
            },
          ],
        },
        {
          title: 'ସହନା ବବତୁ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସହନା ବବତୁ/SahanaVavatu.mp3',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସହନା ବବତୁ/ସହନ ବବତୁ ସମୂହ ଗାନ.aac',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସହନା ବବତୁ/ସହନା ବବତୁ ଅଭିନୟ.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସହନା ବବତୁ/ସହନା ବବତୁ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ସହନା ବବତୁ/ସହନା ବବତୁ.pptx',
            },
          ],
        },
        {
          title: 'ୟା କୁନ୍ଦେନ୍ଦୁ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ୟା କୁନ୍ଦେନ୍ଦୁ/Yaa Kundendu.mp3',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ୟା କୁନ୍ଦେନ୍ଦୁ/ୟା କୁନ୍ଦେନ୍ଦୁ ତୁଷାର...pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ୟା କୁନ୍ଦେନ୍ଦୁ/ୟା କୁନ୍ଦେନ୍ଦୁ ତୁଷାର...pptx',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ୟା କୁନ୍ଦେନ୍ଦୁ/ୟା କୁନ୍ଦେନ୍ଦୁ ର ଭିଡିଓ.mp4',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_2ND_YEAR/ୟା କୁନ୍ଦେନ୍ଦୁ/ୟା କୁନ୍ଦେନ୍ଦୁ ର ସମୂହ ଗାନ.aac',
            },
          ],
        },
      ],
    },
    {
      title: 'GROUP-1 3RD YEAR',
      links: [
        {
          title: 'ଗାୟତ୍ରୀ ମନ୍ତ୍ର',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ଗାୟତ୍ରୀ ମନ୍ତ୍ର/baba gayatri mantra.mp3',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ଗାୟତ୍ରୀ ମନ୍ତ୍ର/ଗାୟତ୍ରୀ ମନ୍ତ୍ର ଅଭିନୟରେ.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ଗାୟତ୍ରୀ ମନ୍ତ୍ର/ଗାୟତ୍ରୀ ମନ୍ତ୍ର.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ଗାୟତ୍ରୀ ମନ୍ତ୍ର/ଗାୟତ୍ରୀ ମନ୍ତ୍ର.pptx',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ଗାୟତ୍ରୀ ମନ୍ତ୍ର/ଗାୟତ୍ରୀ ମନ୍ତ୍ରର ସମୂହ ଗାନ.aac',
            },
          ],
        },
        {
          title: 'ନୀଳାଚଳ ନିବାସାୟ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ନୀଳାଚଳ ନିବାସାୟ/Nilachala nibasaya.mp3',
            },
            {
              title: 'Audio (m4a)',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ନୀଳାଚଳ ନିବାସାୟ/ନୀଳାଚଳ ନିବାସାୟ ସମୂହ ଗାନ.m4a',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ନୀଳାଚଳ ନିବାସାୟ/ନୀଳାଚଳ ନିବାସାୟ.mp4',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ନୀଳାଚଳ ନିବାସାୟ/ନୀଳାଚଳ ନିବାସାୟ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ନୀଳାଚଳ ନିବାସାୟ/ନୀଳାଚଳ ନିବାସାୟ.pptx',
            },
          ],
        },
        {
          title: 'ପୂର୍ବରାମଂ ତପୋବନାଦି',
          links: [
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ପୂର୍ବରାମଂ ତପୋବନାଦି/PurvamRamam.mp3',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ପୂର୍ବରାମଂ ତପୋବନାଦି/ପୂର୍ବ ରାମଂ ତପୋବନାଦି ଗମନଂ ଅଡିଓ.aac',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ପୂର୍ବରାମଂ ତପୋବନାଦି/ପୂର୍ବ ରାମଂ ତପୋବନାଦି.mp4',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ପୂର୍ବରାମଂ ତପୋବନାଦି/ପୂର୍ବଂ ରାମ ତପୋବନାଦି......pdf',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ପୂର୍ବରାମଂ ତପୋବନାଦି/ପୂର୍ବଂ ରାମ ତପୋବନାଦି......pptx',
            },
          ],
        },
        {
          title: 'ବନ୍ଦେଦେବ ଉମାପତିଂ',
          links: [
            //''  ''  ''  ''  ''

            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବନ୍ଦେଦେବ ଉମାପତିଂ/Vande deva.mp3',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବନ୍ଦେଦେବ ଉମାପତିଂ/ବନ୍ଦେ ଦେବମୁମାପତି.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବନ୍ଦେଦେବ ଉମାପତିଂ/ବନ୍ଦେ ଦେବମୁମାପତି.pptx',
            },
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବନ୍ଦେଦେବ ଉମାପତିଂ/ବନ୍ଦେଦେବ ଉମାପତିଂ.mp3',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବନ୍ଦେଦେବ ଉମାପତିଂ/ବନ୍ଦେଦେବଂ ଉମାପତିଂ.mp4',
            },
          ],
        },
        {
          title: 'ବେଦାନୁଦ୍ଧରତେ',
          links: [
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବେଦାନୁଦ୍ଧରତେ/Vedanuddrate.mp3',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବେଦାନୁଦ୍ଧରତେ/ବେଦାନୁଦ୍ଧରତେ ଜଗନ୍ନିବହତେ ସମୂହ ଗାନ.aac',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବେଦାନୁଦ୍ଧରତେ/ବେଦାନୁଦ୍ଧରତେ....pdf',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବେଦାନୁଦ୍ଧରତେ/ବେଦାନୁଦ୍ଧରତେ....pptx',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ବେଦାନୁଦ୍ଧରତେ/ବେଦାନୁଦ୍ଧରତେ...mp4',
            },
          ],
        },
        {
          title: 'ମନୋଜବଂ ମାରୁତତୁଲ୍ୟଂ',
          links: [
            {
              title: 'Audio (mp3)',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ମନୋଜବଂ ମାରୁତତୁଲ୍ୟଂ/Manojavam.mp3',
            },
            {
              title: 'PDF',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ମନୋଜବଂ ମାରୁତତୁଲ୍ୟଂ/ମନୋଜବଂ ମାରୁତତୁଲ୍ୟ.pdf',
            },
            {
              title: 'PowerPoint',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ମନୋଜବଂ ମାରୁତତୁଲ୍ୟଂ/ମନୋଜବଂ ମାରୁତତୁଲ୍ୟ.pptx',
            },
            {
              title: 'Video',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ମନୋଜବଂ ମାରୁତତୁଲ୍ୟଂ/ମନୋଜବଂ ମାରୁତ୍ୟ ତୁଲ୍ୟ ଭିଡିଓ.mp4',
            },
            {
              title: 'Audio (aac)',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ମନୋଜବଂ ମାରୁତତୁଲ୍ୟଂ/ମନୋଜବଂ ର ସମୂହ ଗାନ.aac',
            },
          ],
        },
        {
          title: 'ଶାନ୍ତାକାରଂ',
          links: [
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ଶାନ୍ତାକାରଂ/Shantakaram.mp3',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ଶାନ୍ତାକାରଂ/ଶାନ୍ତାକାରଂ ଭୁଜଗଶୟନଂ.aac',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ଶାନ୍ତାକାରଂ/ଶାନ୍ତାକାରଂ.pdf',
            },
            {
              title: '',
              link: 'files/stotras/GROUP-1_3RD_YEAR/ଶାନ୍ତାକାରଂ/ଶାନ୍ତାକାରଂ.pptx',
            },
          ],
        },
      ],
    },
  ];
  openAudio(link: string) {
    this.dialog.open(AudioDialogComponent, {
      width: '400px',
      data: {
        audioUrl: link,
      },
    });
  }
  openVideo(link: string) {
    this.dialog.open(VideoDialogComponent, {
      width: '80%',
      maxWidth: '900px',
      data: {
        videoUrl: link,
      },
    });
  }
}

@Component({
  selector: 'app-audio-dialog',
  imports: [SharedModule, MatExpansionModule, MatDialogModule],

  template: ` <h2 mat-dialog-title>Audio Player</h2>

    <mat-dialog-content>
      <audio controls style="width:100%">
        <source [src]="data.audioUrl" type="audio/mpeg" />
        Your browser does not support audio.
      </audio>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>`,
})
export class AudioDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

@Component({
  selector: 'app-video-dialog',
  imports: [SharedModule, MatExpansionModule, MatDialogModule],

  template: ` <h2 mat-dialog-title>Video Player</h2>

    <mat-dialog-content>
      <video width="100%" controls autoplay>
        <source [src]="data.videoUrl" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>`,
})
export class VideoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
