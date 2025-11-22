import { Component, AfterViewInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from 'bootstrap';
@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  template: `
    <div
      id="carouselZoom"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
      
    >
      <div class="carousel-indicators">
        <button
          *ngFor="let slide of banner; let i = index"
          type="button"
          data-bs-target="#carouselZoom"
          [attr.data-bs-slide-to]="i"
          [class.active]="i === 0"
        ></button>
      </div>

      <div class="carousel-inner">
        <div
          *ngFor="let slide of banner; let i = index"
          class="carousel-item {{slide.carouselFadeClass}}"
          [attr.data-bs-interval]="slide.interval"
          [class.active]="i === 0"
        >
          <img
            [src]="slide.image"
            class="d-block w-100"
            [alt]="slide.caption"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ slide.caption }}</h5>
            <p>{{ slide?.desc || '- Sri Sathya Sai Baba' }}</p>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselZoom"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselZoom"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  `,
  styles: [
    `
      .carousel-item img {
        /* height: 850px; adjust as needed */
        object-fit: cover;
        transition: transform 8s ease-in-out;
      }

      .carousel-item.active img {
        transform: scale(1.3); /* zoom in */
      }
      .carousel-item.slow-fade img
      {      
        transform: scale(1);
        transition: transform 4s ease-in-out 16s !important;        
      }

      .carousel-item.slow-fade.active img {
        transform: scale(1);
        animation: zoomAfterDelay 4s ease-in-out 16s forwards !important;
      }

      @keyframes zoomAfterDelay {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(1.3);
        }
      }
    `,
  ],
})
export class CarouselComponent implements AfterViewInit {
  @Input() banner: { image: string; caption?: string; interval: string; carouselFadeClass?: string; desc?: string }[] = [];

  ngAfterViewInit(): void {
    const element = document.querySelector('#carouselZoom');
    if (element) {
      new Carousel(element, {
        interval: 5000, // 4 seconds
        ride: 'carousel', // enable auto-ride
        pause: false, // do not pause on hover
      });
    }
  }
}
