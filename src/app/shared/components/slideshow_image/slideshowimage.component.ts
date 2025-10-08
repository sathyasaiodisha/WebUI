import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshowimage',
  imports: [],
  template: `
    <div class="slideshowImage">
      <div class="slideshow-container">
        @for (item of data; track $index;let idx = $index, e = $even) { @if(idx
        == slideIndex-1){
        <div
          class="mySlides fade"
          (mouseover)="onMouseOver()"
          (mouseout)="onMouseOut()"
        >
          <!--fade-->
          <div class="numbertext">{{ slideIndex }} / {{ data.length }}</div>

          <img
            src="{{ item.image }}"
            style="width:100%"
            [style]="{ minHeight: minH + 'px', maxHeight: maxH + 'px' }"
          />
          @if(item.caption){
          <div class="text">{{ item.caption }}</div>
          }
        </div>
        }} @if(isPreNxt){

        <a class="prev" (click)="plusSlides(-1)">❮</a>
        <a class="next" (click)="plusSlides(1)">❯</a>
        } @if(isActive){
        <div class="pause">||</div>
        } @else {
        <div class="countDown">{{ countDown }}</div>
        }
      </div>
      @if(isDot){
      <br />

      <div style="text-align:center">
        @for (item of data; track $index;let idx = $index, e = $even) {
        <span
          class="dot"
          [class.active]="idx == slideIndex - 1"
          (click)="currentSlide(idx + 1)"
        ></span>
        }
      </div>
      }
    </div>
  `,
})
export class SlideShowImageComponent implements OnInit {
  @Input() banner: { image: string; caption?: string }[] = [];
  @Input() settings?: {
    isDot?: boolean;
    isPreNxt?: boolean;
    minH?: number;
    maxH?: number;
  } = {};
  slideIndex = 1;
  isActive = false;
  isDot: boolean = true;
  isPreNxt: boolean = true;
  defaultDuration = 5000; // 5 seconds
  timeOutVar: any;
  countDown = 1;
  minH = 0;
  maxH = 861;
  slideDuration = this.defaultDuration + 0;
  data: { image: string; caption?: string }[] = [];
  constructor() {}
  ngOnInit(): void {
    this.data = [
      {
        image: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        caption: 'Caption One',
      },
      {
        image: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
        caption: 'Caption Two',
      },
      { image: 'https://www.w3schools.com/howto/img_mountains_wide.jpg' },
    ];
    if (this.banner && this.banner.length > 0) this.data = this.banner;
    if (this.settings) this.isDot = this.settings?.isDot ?? this.isDot;
    if (this.settings) this.isPreNxt = this.settings?.isPreNxt ?? this.isPreNxt;
    if (this.settings) this.minH = this.settings?.minH ?? this.minH;
    if (this.settings) this.maxH = this.settings?.maxH ?? this.maxH;
    // Show the first slide
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n: number) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n: number) {
    if (n > this.data.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.data.length;
    }
    this.autoSlide();
  }
  autoSlide() {
    if (this.timeOutVar) clearTimeout(this.timeOutVar);
    if (this.intervalVar) clearTimeout(this.timeOutVar);
    this.timeOutVar = setTimeout(() => {
      if (!this.isActive) this.plusSlides(1);
    }, this.slideDuration);
    this.startCountDown();
  }
  intervalVar: any;
  startCountDown() {
    this.countDown = this.slideDuration / 1000;
    if (this.intervalVar) clearInterval(this.intervalVar);
    this.intervalVar = setInterval(() => {
      if (!this.isActive) this.countDown--;
      if (this.countDown <= 0) this.countDown = 0;
    }, 1000);
  }
  onMouseOver() {
    this.isActive = true;
  }
  onMouseOut() {
    this.isActive = false;
    this.autoSlide();
  }
}
