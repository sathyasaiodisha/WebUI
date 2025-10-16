import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-DigitalLibrary',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'DigitalLibrary' | translate }}
        </h1>
        <p></p>
        <table
          style="width:100%; line-height:25px;font-family:Verdana;font-size:12px; height: 175px; border-right: gray thin solid; border-top: gray thin solid; border-left: gray thin solid; border-bottom: gray thin solid;"
        >
          <tbody>
            <tr>
              <td
                style="font-family:Verdana;font-size:14px;text-align:center"
                colspan="6"
              >
                <span style="font-size:14pt;color:#ff3300"> Documents</span>
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:30px;margin-left:10pt">
                Gurucharnambuja
              </td>
              <td style="width: 56px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink1"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Gurucharnambuja.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:30px">
                Kichi bi anabasyaka nuhen
              </td>
              <td style="width: 56px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink2"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Kichi%20bi%20anabasyaka%20nuhen.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:30px">Prarthana</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink3"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/pdf1.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Questions</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink4"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/pdf2.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Budhha Dharma</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink5"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/BaudhhaDharma.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Rutang Cha Swadhhaya</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink6"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Rutang%20Cha%20Swadhhaya.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Omkar</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink7"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Omkar.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Kshema Eti Bachi-2</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink8"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Kshema%20Eti%20Bachi-2.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Kshama Prarthana</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink9"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Kshama%20Prarthana.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Mantrapushpam</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink10"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Mantrapushpam.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Nagar Sankirtana</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink11"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Nagar%20Sankirtana.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Ganapati Prarthana</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink12"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Ganapati%20Prarthana.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Bruksha Debata</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink13"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Bruksha%20Debata.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Damascha Swadhhaya</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink14"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Damascha%20Swadhhaya.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Gurubramha Guruvishnnu</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink15"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Gurubramha%20Guruvishnnu.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Amrutara Santana</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink16"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Amrutara%20Santana.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Dibya Sparsha-Issue 3</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink17"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/DibyaSparsha-3.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Vakratunda Mahakaya</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink18"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Bakratunda_fnl.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Hanuman</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink19"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/hanuman_1fn.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Dasha Avatar</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink20"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Dasha_avatar_Rev1.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Bandedevam Umapati-2</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink21"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Bande_devamumapati2.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">
                Om Sarva Mangal Mangalya
              </td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink22"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Om-Sarva-Mangal-Mangalya-Stotra-Sikshya.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Guru Brahma</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink23"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/GuruBrahma.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Purbam Rama</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink24"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/purbamrama.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Kailash Rana</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink25"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/KailashRana.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Saraswati Bandana</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink26"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/SARASWATI-BANDANA-final.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Namastesumahamai</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink27"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Namastesumahamai-7.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Karagre Basate Laxmi</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink28"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/karagre-basate-laxmi.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Karacharana Kruramba</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink29"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/karacharana-krutam-odia.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Nilachal Nibasaya</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink30"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/nilachal-nibasaya.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Omkaram</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink31"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/om-karam.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Harirdata Haribhokta</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink32"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Harirdata-Haribhokta.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Om Sahanavavatu</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink33"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Om-SAHANAVAVATU.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Ganesh Chaturthi</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink34"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Ganesh-chaturthi.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Patram Pushpam-2</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink35"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/patram%20pushpam2.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Aham</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink36"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/aham.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">Geeta</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink37"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Geeta.pptx"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">
                Geeta Sloka-Yada Yada hi
              </td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink38"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/GeetaSloka-Yada-Yada-hi.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">
                Geeta Sloka- Pashya men partha Rupani
              </td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink39"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/GeetaSloka-Pashya-men-partha-Rupani.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">
                Geeta-Sloka-Paritranaya-Sadhunam
              </td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink40"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Geeta-Sloka-Paritranaya-Sadhunam.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">Bhajan Mahotsavam</td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink41"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/BhajanMahotsavam.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">
                Report on sai Premdhara &amp; raja Festival
              </td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink42"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Report_on_sai_Premdhara_&amp;_raja_Festival.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
            <tr>
              <td style="width: 259px; height:27px">
                Observation-of-Prematharu-Day-on-10th-July-2025
              </td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink43"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Observation-of-Prematharu-Day-on-10th-July-2025.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">
                Report-State-Conference-of-BalVikas-Gurus
              </td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink44"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/Report-State-Conference-of-BalVikas-Gurus.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
              <td style="width: 259px; height:27px">
                SSSSO ODISHA Annual report 2024-25
              </td>
              <td style="width: 259px; height:27px">
                <a
                  id="ContentPlaceHolder1_HyperLink45"
                  href="https://www.sathyasaiodisha.org/PdfFiles/digital_pdf/SSSSO+ODISHA-Annual+report+2024-25.pdf"
                  style="display:inline-block;width:36px;"
                  >View</a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table
          style="width:100%; line-height:25px;font-family:Verdana;font-size:12px; height: 175px; border-right: gray thin solid; border-top: gray thin solid; border-left: gray thin solid; border-bottom: gray thin solid;"
          align="center"
        >
          <tbody>
            <tr>
              <td
                style="font-family:Verdana;font-size:14px;text-align:center"
                colspan="2"
              >
                <span style="text-align:center;font-size:14pt;color:#ff3300">
                  <br />
                  Videos <br /></span
                ><br />
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/Rjbvzv8YbSo"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>YA KUNDENDU part 1</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="315"
                  src="//www.youtube.com/embed/RF-4A2v3eZI"
                  frameborder="0"
                  allowfullscreen=""
                  style="height: 298px"
                >
                </iframe>
                <p>YA KUNDENDU PART-2</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/FbMstCCaJL4"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Vande Deba Umapatim Part 2</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="315"
                  src="//www.youtube.com/embed/ZBDQm3BqdB8"
                  frameborder="0"
                  allowfullscreen=""
                  style="height: 298px"
                >
                </iframe>
                <p>Vande Deba Umapatim Part 1</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/GHpXlx2EmNI"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Twameva Mata part 2</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="315"
                  src="//www.youtube.com/embed/ytmxI1HJhaM"
                  frameborder="0"
                  allowfullscreen=""
                  style="height: 298px"
                >
                </iframe>
                <p>Twameva Mata part 1</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/TN3Xhe2PWlQ"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Namastestu Mahamaye Part 1</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="315"
                  src="//www.youtube.com/embed/bgzokM8DRtQ"
                  frameborder="0"
                  allowfullscreen=""
                  style="height: 298px"
                >
                </iframe>
                <p>Namastestu Mahamaye Part 2</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="315"
                  src="//www.youtube.com/embed/_Kmt8nlWOAU"
                  frameborder="0"
                  allowfullscreen=""
                  style="height: 298px"
                >
                </iframe>
                <p>Matrudebo Bhaba Part2</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/qoZ96v-MmrY"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Gita Sloka Part1</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/IbLDh1pVqLM"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Matrudebo Bhaba Part1</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="315"
                  src="//www.youtube.com/embed/w3gZZbWFeQU"
                  frameborder="0"
                  allowfullscreen=""
                  style="height: 298px"
                >
                </iframe>
                <p>Man mana Bhava Mad bhakto Part 2</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/20Mu_tmCyCc"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Man mana Bhava Mad bhakto Part 1</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="315"
                  src="//www.youtube.com/embed/4QgiROS4OJU"
                  frameborder="0"
                  allowfullscreen=""
                  style="height: 298px"
                >
                </iframe>
                <p>Gita Sloka Part2</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/eZQdKd6tem0"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Story Group-I</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="315"
                  src="//www.youtube.com/embed/lOeT75I0YaE"
                  frameborder="0"
                  allowfullscreen=""
                  style="height: 298px"
                >
                </iframe>
                <p>Karagre Basate Lakshmi</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/-63mN65If8U"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Pala Kichhi Anabashyaka Nuhe</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="315"
                  src="//www.youtube.com/embed/QuczzTu_k5Q"
                  frameborder="0"
                  allowfullscreen=""
                  style="height: 298px"
                ></iframe>
                <p>SLOKA AHAMATMA FINAL</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/xv_feAM1Wio"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Gurucharanambuja Part-1</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/PzBIa83BmSo"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Gurucharanambuja Part-2</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/pa-iAJKFEuU"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Badrinath</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/iVtdZSjgUNQ"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>kedarnath</p>
              </td>
            </tr>
            <tr>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/nWNgv3dBONY"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Asato ma sadgamay</p>
              </td>
              <td align="center">
                <iframe
                  width="472"
                  height="300"
                  src="//www.youtube.com/embed/XG_1gKpQ2jg"
                  frameborder="0"
                  allowfullscreen=""
                >
                </iframe>
                <p>Shadow puppet show</p>
              </td>
            </tr>

            <tr>
              <td
                colspan="3"
                valign="top"
                height="21"
                style="border-bottom-style: solid; border-bottom-width: 1px"
              >
                <table
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="font-size:11px; font-family:Verdana, Geneva, sans-serif; color:#F00"
                >
                  <tbody>
                    <tr class="side">
                      <td>
                        <a
                          id="LinkButton1"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton1", "", false, "", "odishasaips.aspx", false, true))'
                          >PRASHANTHI SEVA</a
                        >
                      </td>
                      <td>
                        <a
                          id="LinkButton2"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton2", "", false, "", "odishasaiservice.aspx", false, true))'
                          >SERVICE</a
                        >
                      </td>
                      <td>
                        <a
                          id="LinkButton3"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton3", "", false, "", "odishasaispiritual.aspx", false, true))'
                          >SPIRITUAL</a
                        >
                      </td>
                      <td>
                        <a
                          id="LinkButton4"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton4", "", false, "", "odishasaieducation.aspx", false, true))'
                          >EDUCATION</a
                        >
                      </td>
                      <td>
                        <a
                          id="LinkButton5"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton5", "", false, "", "odishasaisssvip.aspx", false, true))'
                          >SSSVIP</a
                        >
                      </td>
                      <td>
                        <a
                          id="LinkButton6"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton6", "", false, "", "odishasaiholistic.aspx", false, true))'
                          >HOLISTIC</a
                        >
                      </td>
                      <td>
                        <a
                          id="LinkButton7"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton7", "", false, "", "odishasaiyouth.aspx", false, true))'
                          >YOUTH</a
                        >
                      </td>
                      <td>
                        <a
                          id="LinkButton8"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton8", "", false, "", "odishasailadies.aspx", false, true))'
                          >LADIES</a
                        >
                      </td>
                      <td>
                        <a
                          id="LinkButton9"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton9", "", false, "", "odishasaibooktrust.aspx", false, true))'
                          >BOOK TRUST</a
                        >
                      </td>
                      <td>
                        <a
                          id="LinkButton10"
                          href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$LinkButton10", "", false, "", "odishasaisaiinstitution.aspx", false, true))'
                          >SAI SCHOOLS</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td
                valign="top"
                colspan="3"
                style="border-top-style: solid; border-top-width: 1px"
                height="75px"
              >
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td height="5" align="center" valign="top">
                        <img id="Image2" src="./image/MsSpacer.gif" />
                      </td>
                    </tr>
                    <tr>
                      <td
                        valign="middle"
                        align="center"
                        height="50px"
                        width="100%"
                        style="background:#0C4579; font-family:Verdana, Geneva, sans-serif; font-size:12px; color:#FFF "
                      >
                        Copyright | Sri Sathya Sai Seva Organisation,Odisha
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class DigitalLibraryComponent implements OnInit {
  ngOnInit(): void {}
}
