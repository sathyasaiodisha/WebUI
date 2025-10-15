import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-BannerDesign',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'BannerDesign' | translate }}
        </h1>
        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th scope="col">Name of the Event</th>
              <th scope="col">Banner Design Drive link</th>
            </tr>
          </thead>
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
                  href="{{ ro.link }}"
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
export class BannerDesignComponent implements OnInit {
  ngOnInit(): void {}
  Math = Math;
  perRo = 3;
  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
  pdfs = [
    {
      title: '100 years Celebration of Sri Sathya Sai Baba',
      link: 'https://drive.google.com/drive/folders/199I2wIMwRPhoISilfjJj5N-gOM7YCAuC?usp=sharing',
    },
    {
      title: 'Walk for Values',
      link: 'https://drive.google.com/drive/folders/12mbRZeN7PrCanyvf0bpDhcckJFS7joNj?usp=sharing',
    },
    {
      title: 'Amruta Bindu',
      link: 'https://drive.google.com/file/d/1uSNKqTKohEbYLmxNJraMtjqIQ1Zja7rE/view?usp=sharing',
    },
    {
      title: 'Aradhana Mahotsava by BV Students',
      link: 'https://drive.google.com/file/d/11Di35iszMz0oTiEaCgRNmSxAdM9Env9A/view?usp=sharing',
    },
    {
      title: 'Aradhana Mahotsava',
      link: 'https://drive.google.com/drive/folders/1quIM5oGpFrp-OLXxz85ZU49HSRF3L97p?usp=sharing',
    },
    {
      title: 'Dhyana Brukshya',
      link: 'https://drive.google.com/file/d/1ZWv9j-zo9n4r-MVH-AvKTpqIOBOzU-9H/view?usp=sharing',
    },
    {
      title: 'District Conference',
      link: 'https://drive.google.com/drive/folders/17u9pwZWvxmgF_lJoVP5KDcjI3ZLC8X11?usp=sharing',
    },
    {
      title: 'QR CODE BANNER SSSSO, Odisha',
      link: 'https://drive.google.com/drive/folders/1jmcqPvK5XVH3fhVCq3hzXLGjUggN0nhS?usp=sharing',
    },
    {
      title: 'Run for unity 2025',
      link: 'https://drive.google.com/drive/folders/1SjxPb-gGitHyFUWAuPfVIyjS78Vn-rp3?usp=sharing',
    },
    {
      title: 'SRI SATHYA SAI GRAMOTSAVAM',
      link: 'https://drive.google.com/drive/folders/1fRAlMrXqxiqyC1HU2dv24gG0txxfBQUu?usp=sharing',
    },
    {
      title: 'SRI SATHYA SAI PREMOTSAVAM',
      link: 'https://drive.google.com/drive/folders/1M8aVKP3EC1RWgQiB2ErAx6dtxn9TSC44?usp=sharing',
    },
    {
      title: 'Grama seva sadhana shivir',
      link: 'https://drive.google.com/drive/folders/1ZW9sbjHyy2OD5uT5TrGciZgjINJtdwi-?usp=drive_link',
    },
    {
      title: 'Liquid love blood donatation flex',
      link: 'https://drive.google.com/file/d/1YsJzzDDD1Gsr7y9WEzvXNlFnmp0RFDIW/view?usp=sharing',
    },
    {
      title: 'Nine point code of Conduct and ten fold path of divinity',
      link: 'https://drive.google.com/drive/folders/1K0pmnBUgy6Zd4O228cth59YTvEvl-2zJ?usp=sharing',
    },
    {
      title: 'Sri Sathya Sai Akhanda Jyothi Yatra',
      link: 'https://drive.google.com/drive/folders/1Yg0QrG0XNaEgec7AZ7c-F4JT-gQj0H41?usp=sharing',
    },
    {
      title: 'Sri Sathya Sai Padambujam',
      link: 'https://drive.google.com/drive/folders/1nm5TOOnYElhlibs4gEiKehsl8nSpRBvw?usp=sharing',
    },
    {
      title: 'State Level Prasanthi Service (PS) Sadhana Sibir',
      link: 'https://drive.google.com/drive/folders/1l-Pjd4EQW_2RXfIZKr_OdD5O-SJAdwFg?usp=sharing',
    },
    {
      title: 'Summer Course- 2024',
      link: 'https://drive.google.com/drive/folders/15xhoWJCjqnEq62NOwiTDsEozFSRA5uN2?usp=sharing',
    },
    {
      title: 'Swachata Se Divyata- 2025',
      link: 'https://drive.google.com/drive/folders/1cCKQOD3gABQo8ZeQ8LQHf7D-Z5BKkwgt?usp=sharing',
    },
    {
      title: 'Zonal Sevadal Task Force Orientation for Prasanti Nilayam Seva',
      link: 'https://drive.google.com/drive/folders/1Z4zmXYyWEJZWUqtdEngkyz2W9xg9Zrp4?usp=sharing',
    },
    {
      title: 'Mo Gaon re Sri Sathya Sai',
      link: 'https://drive.google.com/drive/folders/1OHHiiVEgzPoyIC4MfcPH60gCzqmwDg2_?usp=sharing',
    },
    {
      title: 'Samuhika Tapoban Parayan',
      link: 'https://drive.google.com/drive/folders/1F8SYNlCgQ0QiO9p2EXFYz0f336v86lhT?usp=sharing',
    },
    {
      title: 'Sri Sathya Sai Grama Seva',
      link: 'https://drive.google.com/drive/folders/1uUxrPhrc5kRDsjEOpQe9YUrWhSmLmP9s?usp=sharing',
    },
    {
      title: 'Sri Sathya SaiPrema Taru',
      link: 'https://drive.google.com/drive/folders/16pMjodHOmdKv9UK0UPQ8xj6xo0yhFNlp?usp=sharing',
    },
    {
      title: 'Rudramayam-2023',
      link: 'https://drive.google.com/drive/folders/1vutgmBWzDRteZcg-MO7XTgHDYRw9Rove?usp=sharing',
    },
    {
      title: 'Cod Promise',
      link: 'https://drive.google.com/drive/folders/1MsmxD-A0EpReBiOzX8l5IclAlPxdh4vr?usp=sharing',
    },
    {
      title: 'Divine Message',
      link: 'https://drive.google.com/drive/folders/1UXCzopXyh5R3Krpt6HPQeLYdmkOQiJ1r?usp=sharing',
    },
    {
      title: 'Sai Connect',
      link: 'https://drive.google.com/drive/folders/1eB9zubN_8NLjIZ6CGGI5IxCaEsj4sXA0?usp=sharing',
    },
    {
      title: 'Sai Sudarshan',
      link: 'https://drive.google.com/drive/folders/1GLP-7e90R20Plphp4gFZahsRmXf2_PaG?usp=drive_link',
    },
    {
      title: 'Sri Sathya Sai Paduka Yatra',
      link: 'https://drive.google.com/drive/folders/1vBJtGRzqu5TnTm6mja-OWe884NQUodwC?usp=sharing',
    },
    {
      title: 'Symposium on Education for Livelihood and Wisdom for Life',
      link: 'https://drive.google.com/drive/folders/1e5n4hZ11_fevE89WXAHturbeCLlnGp1Y?usp=sharing',
    },
    {
      title: 'Sai Karuna',
      link: 'https://drive.google.com/file/d/1STMz00ASBKeTU9E0cQ60HP9GhHUSAQBT/view?usp=drivesdk',
    },
    {
      title: 'ANANDA UDYAN',
      link: 'https://drive.google.com/file/d/1KcPjq0GlHAywUbACfNjHzBkjewJwaCnq/view?usp=drive_link',
    },
    {
      title: 'Divine Message flex',
      link: 'https://drive.google.com/drive/folders/1B2eDSrrtNskNocQ4NkiTp4Id4s4WnbEp?usp=drive_link',
    },
    {
      title: 'SRI SATHYA SAI PREMOTSAVAM',
      link: 'https://drive.google.com/drive/folders/1M8aVKP3EC1RWgQiB2ErAx6dtxn9TSC44?usp=sharing',
    },
  ];
}
