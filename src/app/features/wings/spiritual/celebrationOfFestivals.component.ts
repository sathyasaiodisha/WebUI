import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-celebrationOfFestivals',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'CELEBRATION OF FESTIVALS' | translate }}
        </h1>
        <p>
          Festivals and holy days are designed to reveal the greatness and
          integrity of Indian culture as well as in Odia culture. There is a
          proverb in Odia “Bara Mase Tera Parba”, meaning 13 festivals in a year
          of 12 calendar months, where people of Odisha celebrate numerous
          festivals throughout the year. Major festivals include rath Yatra,
          Deepavali, Holi, Navratri, Durga Puja, Eid, Christmas, Raksha Bandhan,
          and Ganesh Chaturthi, Saraswati Puja, Laxmi-Narayan Brata, Janmastami,
          Sacred Kartik Month, Maha Shiva Ratri, Snana Poornima etc. Apart fronm
          this, the occasions like Eswaramma day, Sathya Sai Jayanti, Avatarhood
          day, Guru Purnima, Month Long Aradhana Utsava also celebrated by Sai
          Devotees. Celebrations are centered around the teachings of Sri Sathya
          Sai Baba, emphasizing universal love and selfless service as well as
          to bring together the communities through shared activities, fostering
          unity and fellowship.
        </p>
      </div>
    </div>
  `,
})
export class CelebrationOfFestivalsComponent implements OnInit {
  ngOnInit(): void {}
}
