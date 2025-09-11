import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-bookTrust',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'HISTROY OF SANATHANA SARATHI (ODIA)' | translate }}
        </h1>
        <p>
          A blade of grass cannot move without His directions. It must have been
          His Divine Sankalpa that immediately after the Guru Purnima, 1969 the
          idea of a monthly magazine in Odia carrying BHAGAWAN’S message caught
          hold of Sri Bijay Kumar Mishra, then, a Lecturer in english at B.J.B
          College, Bhubaneswar, who had by then been to Prasanthi Nilayam
          several times and been greatly inspired by Swami. It was a daunting
          task, especially at that early stage of the Sai Movement in Odisha.
        </p>
        <p>
          As a first step, Sri Mishra wrote to Prof. N. Kasturi praying for
          Bhagawan’s permission and blessings and response was prompt. Prof.
          Kasturi wrote: 11-09-1969
        </p>
        <p>
          Dear Brother , I am delighted to inform you that you can start Odia
          monthly on the model of Sathya Sai Vani of and sathya sai sudha poona.
          You have the assigns of Bhagawan. Sincerely yours, N.Kasturi
        </p>
        <p>
          Dear Brother, I am delighted to inform you that you can start Odia
          monthly on the model of Sathya Sai Vani of Bombay and Sathya Sai Sudha
          of Poona. You have the blessings of Bhagawan.<br />
          Sincerely yours,<br />
          N.Kasturi<br />
        </p>
        <p>
          Immediately thereafter, a news item about the proposed monthly with an
          annual subscription of Rs.3/- placed in the leading Odia daily, ”The
          Samaj”. The idea was to make the first issue available to the devotees
          on the 44th Birthday of Bhagawan. However, the printing could not be
          done due to various constraints and it was decided to have it
          cyclostyled. Sri Mishra chose a student of his in the pre-university
          class as his messenger for the cyclostyling work: and it was in this
          form that the first issue reached the devotees on the hallowed day.
          The second issue too came out in a similar form. Both the issues came
          out subsequently in the printed form in demy 1/8 format with bi-colour
          face and were re-issued to the subscribers. The magazine was named
          SATYA SAI VANI. Initially the number of subscribers was 400.
        </p>
        <p>
          To meet some administrative needs to file the declaration Sri
          Trilochan Satpathy, a Lecturer in Economics and a colleague of Sri
          Mishra signed as the publisher and his wife Smt. Surekha Sathpathy as
          the owner of the magazine. Then Sri Rama Chandra Mishra, a well known
          satirical author, who wrote under the pen name of Faturananda offered
          to print the magazine in his Dagara Press at Cuttack and Sri Mishra’s
          transfer from B.J.B college, Bhubaneswar to Ravenshaw College, Cuttack
          helped to coordinate the editing and printing work at Cuttack. After
          two years the ownership of the magazine was transferred to Sri Sathya
          Sai Organization of Orissa and the State President Sri Brahmananda
          Panda, M.P., became its publisher in November 1971.
        </p>
        <p>
          When Sri Sathya Sai Organization at Prasanthi Nilayam officially
          decided to get all similar magazines published in different languages
          under one standardised format “ Satya Sai Vani” was renamed as
          ‘Sanathana Sarathi’ in April 1972 and contained some of the articles
          translated from English edition. The present size was adopted in
          November 1974 and it became the Odia version of the English edition.
        </p>
        <p>
          Sri B.K. Mishra continued to look after the editorial work till June
          1980. Shortly after which he left for Prasanthi Nilayam to join as a
          teacher in Sri Sathya Sai College, there.
        </p>
        <p>
          Sri Praharahj Satyanarayana Nanda, a poet and journalist, who was then
          working as sub-editor of “Orissa Review” and ”Utkal Prasang” of the
          Government of Orissa was chosen to succeed him. The State Organization
          set up its own press at Bhubaneswar with Sri G. Gopla Rao a retired
          Deputy Secretary to Government of Odisha and District President of the
          Organization as it’s Manager, and the magazine began to be printed
          there from December 1980 and Sri Narender Chandra Pradhan, Convenor,
          Sri Sathya Sai Trust, Orissa replaced Sri R.C. Mishra as the printer.
        </p>
        <p>
          Sri Nanda did the editorial work till February 1983. However, he
          needed some assistance as he was busy otherwise and has an urge for
          frequent and prolonged visits to Prasanthi Nilayam for
        </p>
        <p>
          Bhagawanh’s Darshan. This assistance he received from Dr. Sudhansu
          kumar Nayak, a summer course student of 1974, the same college lad who
          had run errands at the beginning and then working as a Lecturer in
          Hindi at Brahmapur. He started translating one half of the English
          edition from November 1981 and by July 1982 was practically doing the
          entire translation work with the final check by Sri Nanda.
        </p>
        <p>
          Towards the end of 1982 Sri Nanda left for Prasanthi Nilayam for an
          indefinite period and the entire work automatically passed on to Dr.
          Nayak, who was officially entrusted with the work in March 1983 and is
          continuing with the job till date.
        </p>
        <p>
          Publication during those days used to be delayed by two months as the
          translation work could start only after the English edition was
          received by post and had to be manually printed which took a long
          time. Hence it was decided to publish the Odia edition one month after
          the release of the English edition. Thus the April 1986 issue was
          marked as May 1986 in Odia and the practice continued.
        </p>
        <p>
          Colour photographs of Bhagawan started adorning the front page from
          July 1991 and the offset process was adopted in June 1997. The
          magazine was registered with the RNI in 2000 as required under law.
          Once the e-mail facility was available the one-month gap was bridged
          in April 2003. The English edition used to be published on the 10th of
          every month and hence its Odia edition on the 30th of the same month.
          Since the English edition is now being published on the 1st of every
          month the Odia edition gates ready on the 20th of the same month.
        </p>
        <p>
          After Sri Brahmanada Panda merged at HIS Lotus feet in May 1996, Prof.
          I. Srinivas Rao became the State President and the Publisher from June
          1996. With the change in the State Organization the present State
          President Prof. Harikrishba Dash and State Trust Convenor Sri
          Satchidananda Mohapatra became Publisher and Printer respectively from
          March 2006. On formation of Sri Sathya Sai Books and Publication
          Trust, Orissa, the ownership of the magazine was transferred in March
          2007 and the convenor of the SSSBPT, Sri Parsurama Sahu became the
          printer from July 2009. The management is now being looked after by
          Sri Niranjan Mohanty since January 1994 after he took over as Manager,
          Sri Sathya Sai press from Sri G. Gopal Rao.
        </p>
        <p>
          During its journey “Sanathan Sarathi” has given birth to a children’s
          magazine “Sri Sathya Sai Bal Vikas” which was started as a quarterly
          magazine in August 1973 under the Editorship of Sri B.K. Mishra and
          later from August 1980 came to the hands of Sri Brahmananda Panda, who
          turned it to a Monthly one since January 1981. Presently, it is being
          edited by Dr. Sudhansu Kumar Nayak, since October 1992.
        </p>
        <p>
          At present the number of subscriber for Sanathana Sarathi and Bal
          Vikas is 15000 and 11000 respectively.
        </p>
        <p>
          Both the magazines are widely read and appreciated in Odisha and have
          been acclaimed as major contribution in the field of Odia literature.
        </p>
      </div>
    </div>
  `,
})
export class BookTrustComponent implements OnInit {
  // data: {
  //   designation: string;
  //   name: string;
  //   phoneNo: string;
  //   whatsAppNo: string;
  //   emailid: string;
  // }[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
