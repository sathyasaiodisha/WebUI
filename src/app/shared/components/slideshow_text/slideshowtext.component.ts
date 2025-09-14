import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { set } from 'ol/transform';

@Component({
  selector: 'app-slideshowtext',
  imports: [NgClass],
  template: `
    <div class="slideshowText">
      <div class="slideshow-container">
        @for (item of data; track $index;let idx = $index, e = $even) { @if(idx
        == slideIndex-1){
        <div class="numbertext">{{ slideIndex }} / {{ data.length }}</div>

        <div
          class="mySlides"
          (mouseover)="onMouseOver()"
          (mouseout)="onMouseOut()"
        >
          <q>{{ item.text }}</q>
          @if(item.auther){
          <p class="author">- {{ item.auther }}</p>
          }
        </div>
        } }

        <a class="prev" (click)="plusSlides(-1)">❮</a>
        <a class="next" (click)="plusSlides(1)">❯</a>
        @if(isActive){
        <div class="pause">||</div>
        } @else {
        <div class="countDown">{{ countDown }}</div>
        }
      </div>

      <div class="dot-container">
        @for (item of data; track $index;let idx = $index, e = $even) {
        <span
          class="dot"
          [class.active]="idx == slideIndex - 1"
          (click)="currentSlide(idx + 1)"
        ></span>
        }
      </div>
    </div>
  `,
})
export class SlideShowTextComponent implements OnInit {
  slideIndex = 1;
  isActive = false;
  defaultDuration = 5000; // 5 seconds
  timeOutVar: any;
  countDown = 1;
  slideDuration = this.defaultDuration + 0;
  data: { text: string; auther?: string }[] = [];
  constructor() {}
  ngOnInit(): void {
    this.data = [
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love, enjoy it!',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'There is only one caste, the caste of humanity. There is only one religion, the religion of love. There is only one language, the language of the heart.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Love lives by giving and forgiving. Ego lives by getting and forgetting.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'See no evil, See what is good. Hear no evil, Hear what is good. Talk no evil, Talk what is good. Think no evil, Think what is good. Do no evil, Do what is good.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'When we “skill” our knowledge, life is well-balanced. When we “kill” our knowledge, the balance is upset.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'The end of wisdom is freedom. The end of culture is perfection. The end of knowledge is love. The end of education is character.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'For the mansion of life, Self-confidence is the foundation, Self-satisfaction the wall, Self-sacrifice the roof, Self-Realisation is the life.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Education should be for life, not for a living.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'We do not need different kinds of “information”. We need “transformation”.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Money comes and goes. Morality comes and grows.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Study to be steady.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Those anxious to live in joy must always be doing good.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'See all work as spiritual exercise, as an offering. Then, work is transformed into worship.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Work is worship. Duty is God.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Removal of immorality is the only way to immortality.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'The best way to love God is to love all and serve all.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Always repeat: I am human, not animal. I am human, not animal. When we join these two halves, we have the full truth.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Where there is faith, there is love; where there is love, there is peace; where there is peace, there is truth; where there is truth, there is God; where  there is God, there is bliss. ',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Conscience is our real power, strength, and awareness.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Some say that knowledge is power, but it is not true. Character is power.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'You must fill your heart with love for God (daiva preeti), fear of sin (paapa bheeti), and morality in society (sangha neeti).',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'When we turn our vision to the world, we develop attachment. When we turn to Divinity, detachment results.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Keeping in view the atmosphere in the world, it is important to teach students about morality and ethics while equipping them with worldly knowledge.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Humanness means unity in thought, word, and deed.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'The cause for this multiplication of human sorrow may be traced to man’s lack of faith in the essential unity underlying the phenomenal multiplicity.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'Gratitude is our life-breath.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'To transform the world from its present state, there is no need for a new social system or a new religion or creed. What is essential is a body of men and women with sacred ideals.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'One who respected his/her parents became worthy of everyone’s respect. The one who did not respect his/her parents was compelled to bow down to all. This inevitable law can never be changed by anyone.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: "Do not ever think that you and God are separate. Think always, 'God is with me; He is inside me; He is around me. All there is, Is God. I myself am God. I am the Infinite, the Eternal. I am not two; I am one, only one. There is no one else besides me. I and God are one and the same.' To realize this Unity, the first step is to develop Self-confidence. It comes when you realize that God is not outside of you.",
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'The essence of spiritual wisdom lies in apprehending and experiencing the oneness of the trinity of sathyam, jnanam, and anantam.',
      },
      {
        auther: 'Sri Sathya Sai Baba',
        text: 'The secret of perfect health lies in keeping the mind always cheerful - never worried, never hurried, never borne down by any fear, thought or anxiety.',
      },
    ];
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
