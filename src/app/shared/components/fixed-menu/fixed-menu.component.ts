import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-fixed-menu',
  imports: [CommonModule, MatTooltipModule],
  template: `
    <div class="fixed-menu">
      <div
        class="fixed-menu__item"
        matTooltip="ସାଇ ସନ୍ଦେଶ"
        [matTooltipPosition]="'right'"
      >
        <a *ngIf="!showMsg" class="fixed-menu__link" (click)="showMsg = true"
          >&lt;</a
        >
        <a *ngIf="showMsg" class="fixed-menu__link" (click)="showMsg = false"
          >&gt;</a
        >
      </div>
    </div>
    <div *ngIf="showMsg" class="fixed-menu__msg">
      <div class="closeIcon" (click)="showMsg = false">X</div>
      <div class="dateDiv">{{ dateText }}</div>
      <div class="mseDiv">{{ msgText }}</div>
    </div>
  `,
  styles: [
    `
      .dateDiv {
        position: relative;
        top: 477px;
        text-align: center;
        width: 403px;
        left: 20px;
        font-size: 20px;
        color: darkred;
      }
      .mseDiv {
        position: relative;
        top: 477px;
        left: 20px;
        width: 403px;
        /* font-size: 18px; */
        padding: 0 10px;
        text-align: justify;
        line-height: 1.5;
        font-weight: bold;
        font-size: 1.8rem;
        color: darkred;
      }
      .closeIcon {
        display: inline-block;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
        background: #ffffffc4;
        border-radius: 12px;
        font-weight: bold;
        padding: 0 6px;
      }
      .fixed-menu__msg {
        position: fixed;
        background: url(/assets/images/msg.png) no-repeat center / cover;
        width: 455px;
        height: 730px;
        border-radius: 12px;
        left: 36px;
        top: calc(50vh - 359px);
        z-index: 1;
        border: 6px solid white;
      }
      .fixed-menu {
        position: fixed;
        top: 47%;
        left: -9px;
        background-color: rgb(185 183 183 / 48%);
        border-radius: 0 30px 30px 0;
        display: flex;
        justify-content: space-around;
        z-index: 1000;
      }
      .fixed-menu__item {
        flex: 1;
        text-align: center;
      }
      .fixed-menu__link {
        border-radius: 0 30px 30px 0;
        font-weight: bold;
        color: black;
        text-decoration: none;
        font-size: 32px;
        transition: background-color 0.3s;
        cursor: pointer;
        padding: 0 10px 4px 10px;
        display: block;
      }
      .fixed-menu__link:hover {
        background-color: #fff;
      }
      @media (max-width: 600px) {
        .fixed-menu {
          flex-direction: column;
          align-items: center;
        }
        .fixed-menu__item {
          width: 100%;
        }
        .fixed-menu__link {
          width: 100%;
          text-align: center;
        }
      }
    `,
  ],
})
export class FixedMenuComponent {
  dateText = new Date().toDateString();
  showMsg = false;
  msgText =
    'ଭଗବାନଙ୍କର ଶୁଭଦୃଷ୍ଟି ଆକର୍ଷଣ କରିବାର ଏକମାତ୍ର ପନ୍ଥା ହେଉଛି ନାମ ସଂକୀର୍ତନ |';
}
