import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-SathyaSaiSpeak',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue ">
        <table
          cellspacing="5"
          cellpadding="3"
          class="mx-auto p-2 table table-hover table-striped "
        >
          <thead>
            <tr>
              <th colspan="3">
                <b>Sathya Sai Speaks: Discourses by Sri Sathya Sai Baba</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td nowrap="">
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol01.html"
                  >Volume 01 (1953-1960)</a
                >&nbsp;&nbsp;&nbsp;
              </td>
              <td nowrap="">
                &nbsp;<a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol15.html"
                  >Volume 15 (1981-1982)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol29.html"
                  >Volume 29 (1996)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol02.html"
                  >Volume 02 (1961-1962)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol16.html"
                  >Volume 16 (1983)
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol30.html"
                  >Volume 30 (1997)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol03.html"
                  >Volume 03 (1963)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol17.html"
                  >Volume 17 (1984)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol31.html"
                  >Volume 31 (1998)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol04.html"
                  >Volume 04 (1964)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol18.html"
                  >Volume 18 (1985)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol32.html"
                  >Volume 32 (1999)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol05.html"
                  >Volume 05 (1965)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol19.html"
                  >Volume 19 (1986)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol33.html"
                  >Volume 33 (2000)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol06.html"
                  >Volume 06 (1966)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol20.html"
                  >Volume 20 (1987)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol34.html"
                  >Volume 34 (2001)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol07.html"
                  >Volume 07 (1967)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol21.html"
                  >Volume 21 (1988)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol35.html"
                  >Volume 35 (2002)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol08.html"
                  >Volume 08 (1968)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol22.html"
                  >Volume 22 (1989)
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol36.html"
                  >Volume 36 (2003)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol09.html"
                  >Volume 09 (1969)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol23.html"
                  >Volume 23 (1990)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol37.html"
                  >Volume 37 (2004)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol10.html"
                  >Volume 10 (1970)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol24.html"
                  >Volume 24 (1991)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol38.html"
                  >Volume 38 (2005)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol11.html"
                  >Volume 11 (1971-1972)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol25.html"
                  >Volume 25 (1992)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol39.html"
                  >Volume 39 (2006)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol12.html"
                  >Volume 12 (1973-1974)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol26.html"
                  >Volume 26 (1993)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol40.html"
                  >Volume 40 (2007)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol13.html"
                  >Volume 13 (1975-1977)
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol27.html"
                  >Volume 27 (1994)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol41.html"
                  >Volume 41 (2008)</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol14.html"
                  >Volume 14 (1978-1980)</a
                >&nbsp;&nbsp;
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol28.html"
                  >Volume 28 (1995)</a
                >
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol42.html"
                  >Volume 42 (2009)</a
                >
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td align="right">
                <a
                  target="_blank"
                  href="https://sssbpt.info/english/sssvol43.html"
                  >(2010)</a
                >
              </td>
            </tr>

            <!-- InstanceEndEditable -->
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class SathyaSaiSpeakComponent implements OnInit {
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
