import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-Presentations',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Presentations' | translate }}
        </h1>
        <table class="table table-bordered">
          <tbody>
            @for(ro of pdfs; track $index){
            <tr>
              <td>
                {{ ro?.title ?? ro.link }}
              </td>
              <td>
                <a
                  id="ContentPlaceHolder1_HyperLink1"
                  target="_blank"
                  href="/files/pdf/{{ ro.link }}"
                  >View</a
                >
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class PresentationsComponent implements OnInit {
  ngOnInit(): void {}
  Math = Math;
  perRo = 3;
  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
  pdfs = [
    {
      link: 'files/pdf/presentations/ACTIVITIES-SSSSO Odisha.pdf ',
      title: 'ACTIVITIES-SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/Bhajan_SSSSO Odisha.pdf ',
      title: 'Bhajan_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/CENTENARY CELEBRATION INITITAVES_SSSSO Odisha.pdf ',
      title: 'CENTENARY CELEBRATION INITITAVES_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/Final Charter Rules 45th State Conference.pdf ',
      title: 'Final Charter Rules 45th State Conference',
    },
    {
      link: 'files/pdf/presentations/Madhu Vadishyaami_SSSSO Odisha.pdf ',
      title: 'Madhu Vadishyaami_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/Meditation Tree_SSSSO Odisha.pdf ',
      title: 'Meditation Tree_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/OUR VILLAGE - OUR IDENTITY_SSSSO Odisha.pdf ',
      title: 'OUR VILLAGE - OUR IDENTITY_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/PN Seva_Duty Points_Amended_SSSSO.pdf ',
      title: 'N Seva_Duty Points_Amended_SSSSO',
    },
    {
      link: 'files/pdf/presentations/Sai Connect_SSSSO Odisha.pdf ',
      title: 'Sai Connect_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/SAI PREMDHARA_SSSSO Odisha.pdf ',
      title: 'SAI PREMDHARA_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/Sai Sanatani_SSSSO Odisha.pdf ',
      title: 'Sai Sanatani_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/Social Media_SSSSO Odisha.pdf ',
      title: 'Social Media_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/Study Circle Seminar Symposium_SSSSO Odisha.pdf ',
      title: 'Study Circle Seminar Symposium_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/Unity of Faiths_SSSSO Odisha.pdf ',
      title: 'Unity of Faiths_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/Vahini Swadhyaya, Sadhana Sivir,Likhita Japa,Jyoti Meditation_SSSSO Odisha.pdf ',
      title:
        'Vahini Swadhyaya, Sadhana Sivir,Likhita Japa,Jyoti Meditation_SSSSO Odisha',
    },
    {
      link: 'files/pdf/presentations/Veda Prabaham_SSSSO Odisha.pdf',

      title: 'Veda Prabaham_SSSSO Odisha',
    },
  ];
}
