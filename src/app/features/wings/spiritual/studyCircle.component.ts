import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-spiritual-studyCircle',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'STUDY CIRCLE' | translate }}
        </h1>
        <p>
          Study Circle is an integral part of the Sai Organization's activities,
          serving as a group discussion forum where participants explore
          spiritual concepts on the aptly choosen Topic, share insights, and
          apply them to daily life. Unlike formal lectures or mere book
          readings, it emphasizes interactive dialogues shared by the
          participating memebers in a positive and devine atmosphere.
        </p>
        <p>
          Sri Sathya Sai Baba described it as: "Circle, study circle means
          taking a point and each person discussing what is the meaning of the
          point to them." Since the goal of a Study Circle is transformation,
          not simply transfer of knowledge, the following idea may be good. Near
          the end of the Study Circle, discuss a teaching that came out of the
          Study Circle could be put into practice during the coming week. See
          whether the group can hone in one teaching or principal. At the next
          Study Circle, one could begin by going around the circle and see what
          comments people have about how they put last weeks teaching/principle
          into practice and what effect it had on them.
        </p>
      </div>
    </div>
  `,
})
export class StudyCircleComponent implements OnInit {
  ngOnInit(): void {}
}
