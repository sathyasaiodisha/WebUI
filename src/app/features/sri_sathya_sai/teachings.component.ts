import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-sss-teachings',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Teachings of Sri Sathya Sai' | translate }}
        </h1>
        <div class="row">
          <div class="col-md-4">
            <img src="assets/images/sai_standing_6.png" style="width:100%;" />
          </div>
          <div class="col-md-8">
            <br />
            <br />
            <p>
              Teachings of Sri Sathya Sai Baba emphasize on Universal
              Spirituality, Love, Service, and self-realization. His philosophy
              centers on the unity of all religions and the cultivation of human
              values to lead a meaningful life. Every human being is spark of
              the Divine and the purpose of life is the realization of this
              Divinity. This will occur, He says, by leading a moral life, by
              rendering selfless service to those in need, by engaging in
              devotional practices, and by developing love, respect, and
              compassion for all life. Swami emphasized five universal human
              values as the foundation for a righteous life.
            </p>

            <ol class="boldIli">
              <li>Human Values</li>

              <ul>
                <li>
                  Sathya (Truth): Speak and act with honesty, aligning with the
                  inner truth of one's conscience.
                </li>
                <li>
                  Dharma (Righteousness): Live ethically, following moral
                  principles and doing what is right.
                </li>
                <li>
                  Shanti (Peace): Cultivate inner calm and equanimity,
                  regardless of external circumstances.
                </li>
                <li>
                  Prema (Love): Practice selfless, unconditional love for all
                  beings, as love is the essence of divinity.
                </li>
                <li>
                  Ahimsa (Non-violence): Avoid harming others in thought, word,
                  or deed, promoting compassion and harmony.
                </li>
              </ul>
            </ol>
          </div>
        </div>
        <ol class="boldIli" start="2">
          <li>Unity of All Religions</li>
          <p>
            All religions lead to the same divine truth. He encouraged respect
            for all faiths, emphasizing their common essence—love, compassion,
            and service. His ashram in Puttaparthi welcomed people from all
            religious backgrounds, and he often said, “There is only one
            religion, the religion of love.”
          </p>
          <li>Service to Humanity</li>
          <p>
            Selfless service (Seva) is a cornerstone of his teachings. He
            believed serving others, especially the poor and needy, is
            equivalent to serving God. His organizations, like the Sri Sathya
            Sai Seva Organization, promote humanitarian activities in the field
            of Health, Education, Disaster relief, Agriculture, Self Reliance,
            Drinking Water, Narayan Seva(feeding poor), Animal Care etc.
          </p>
          <li>Self-Realization and Inner Transformation</li>

          <ul>
            <li>
              Self-discipline: Control over desires and senses through practices
              like meditation and prayer.
            </li>
            <li>
              Devotion (Bhakti): Surrender to God through love, faith, and
              spiritual practices.
            </li>
            <li>
              Inner inquiry: Reflect on “Who am I?” to discover the eternal self
              beyond the body and mind.
            </li>
          </ul>
          <li>Education with Values</li>
          <p>
            “Educare,” which means “to bring out within”, an education system
            that integrates human values with academic learning. The Bal Vikas
            programme, is a free, value-based education for children aged 4-16,
            founded by Bhagawan Sri Sathya Sai Baba in 1969. It aims to
            "blossom" human excellence by teaching the five human values (Truth,
            Righteousness, Peace, Love, and Nonviolence) through silent sitting,
            storytelling, bhajans (devotional singing), selfless service, and
            developing good conduct and a strong conscience. Sri Sathya Sai
            Institute of Higher Learning, aim to develop students’ character
            alongside intellectual growth, fostering a sense of responsibility
            to society.
          </p>
          <li>Ceiling on Desires</li>
          <p>
            Swami advocated moderation and detachment from material desires. By
            controlling excessive wants, individuals can focus on spiritual
            growth and use resources to help others.
          </p>
          <li>Love All, Serve All; Help Ever, Hurt Never</li>
          <p>
            These two phrases encapsulate his teachings. Sai Baba urged
            followers to practice universal love and compassion, avoid harming
            others, and dedicate their lives to helping those in need.
          </p>
          <li>Practical Spirituality</li>
          <p>Baba emphasized living spirituality in daily life through:</p>
          <ul>
            <li>Simple living and high thinking.</li>
            <li>Practicing gratitude and humility.</li>
            <li>Maintaining a positive attitude and faith in divine will.</li>
          </ul>
          <li>Discipline and Devotion</li>
          <p>
            He taught that spiritual progress requires discipline (e.g., regular
            prayer, meditation, and ethical living) and devotion to God, whom he
            described as present in all beings.
          </p>
          <p>
            Sri Sathya Sai Baba’s teachings inspired millions worldwide, leading
            to the establishment of schools, hospitals, and charitable projects.
            His message continues to resonate through his followers and
            organizations, emphasizing love, service, and spiritual unity.
          </p>
        </ol>
      </div>
    </div>
  `,
})
export class TeachingsComponent implements OnInit {
  ngOnInit(): void {}
}
