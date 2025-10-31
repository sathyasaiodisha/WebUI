import {Component, OnInit} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {ApiService} from '../../core/services/api.service';

@Component({
  selector: 'app-bookTrust',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai Books and Publications Trust' | translate }}
        </h1>
        <p>
        The magazine Sanatana Sarathi began printing in the small press at Prasanthi Nilayam in 1958. Later, there was a
        plan to publish books containing Baba’s discourses and divine plays in Mumbai. To manage this, the Sri Sathya
        Sai Education Institute was established. When the Sri Sathya Sai Central Trust was formed in 1972, the
        publishing work came under its control. On 1 January 1973, the Vrindavan Press was inaugurated at the Vrindavan
        Ashram. Later, when the Sri Sathya Sai Books and Publications Trust was created in June 1983, publishing
        activities were transferred from the Central Trust. Due to unavoidable reasons, the Vrindavan Press had to be
        closed on 31 May 1985, and Sanatana Sarathi was printed for a year at the Chandamama Press. The printing
        machines were then shifted from Vrindavan to Prasanthi Nilayam, where the Sri Sathya Sai Press was established
        in June 1986.
        </p>
        <p>
        The first trustee of the Sri Sathya Sai Books and Publications Trust was O. V. V. Narayanayya, who served until
        1988. He was succeeded by P. K. Suri, who served for the next ten years. Since 1998, K. S. Rajan has been
        managing this responsibility. On 1 February 2000, a library of 6,000 books was started by the Trust, which
        included 2,500 books from the Sri Kasturi Library, established in 1987. The Trust’s office, book depot, sales
        center, and library were brought together under one roof when Baba inaugurated the Trust’s own building on 23
        August 2001. As the need grew, another larger building was inaugurated next to it on 30 November 2008, mainly
        for storing books. In this way, the self-sufficient Publications Trust became the Publications Division of the
        Sri Sathya Sai Sadhana Trust on 1 January 2009.</p>
        <p>
        In Odisha, the publication activities were started by Professor Bijay Kumar Mishra and were later taken over by
        the Sri Sathya Sai Organization, established in 1970. After the formation of the Sri Sathya Sai Trust on 23
        March 1976, this responsibility was officially transferred, and in December 1980, the Sri Sathya Sai Press was
        set up in Bhubaneswar. Later, in line with the permission from Central trust , the Sri Sathya Sai Books and
        Publications Trust, Odisha, was formally established on 14 June 2006. A new building for the Trust’s office,
        computer room, and book depot was inaugurated on 4 June 2009 above the Sri Sathya Sai Press. After the passing
        of the first trustee, Parsuram Sahu, on 26 June 2018, Bijay Kumar Pusti took over the responsibility on 20 July
        2018.</p>
        <p>
        By the time the Trust was formed, 140 books and 80 affordable editions had already been published by the Sri
        Sathya Sai Press. Today, these numbers have increased to 257 and 106, respectively. The magazines Sanatana
        Sarathi and Sri Sathya Sai Bal Vikas are printed every month, with a combined circulation of 9000 copies. Even
        during the difficult times caused by the COVID-19 pandemic, when many services were disrupted, it was only
        through Baba’s divine grace that the Publications Trust could continue bringing His message to devotees every
        month. In truth, our love and interest in reading Sai literature reflect our spiritual growth and progress on
        Baba’s path.</p>

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
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
