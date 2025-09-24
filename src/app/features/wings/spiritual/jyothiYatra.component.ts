import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-jyothiYatra',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'JYOTHI YATRA' | translate }}
        </h1>
        <p>
          "Jyothi Yatra" commonly known as Divya Akhanda Jyoti Yatra, a
          devotional event organized by the Sri Sathya Sai Seva Organisations
          across Odisha. In this Yatra, a sacred flame (Jyoti) symbolizing the
          divine presence of Sri Sathya Sai Baba is carried to various devotees'
          homes, bringing spiritual blessings and fostering devotion through
          daily programs like Nagar Sankirtan, Bhajans,Narayan Seva, Satsang and
          Aratis. Devotees at their homes feel as Swami Himself is present in
          Jyothi form and accordingly the entire family conduct themselves with
          discipline, devotion, dedication, sanctity. As the flame passes
          through from one house to other, people come out in joy and light a
          lamp in their home from the blessed flame. The Jyoti Yatra, as it is
          called, goes on for several weeks every year.
        </p>
      </div>
    </div>
  `,
})
export class JyothiYatraComponent implements OnInit {
  ngOnInit(): void {}
}
