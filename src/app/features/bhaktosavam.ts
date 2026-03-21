import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bhaktosavam',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-wrapper">
      <div class="content-card">
        <h1 class="main-title">Sri Sathya Sai Bhaktosavam</h1>
        <div class="divider"></div>

        <div class="text-body">
          <p>
            Again and again Bhagawan in all Avatarhood has reminded the Mankind that the Supreme Lord of the Universe surrenders only and only to his Bhakta and address himself as <strong>Dasanudashoham</strong> .
          </p>

          <p>
            This is only to remind that He who is omnipotent to bring any change to this universe is bound by the devotion of his Bhakta. The greatest example of an ideal Bhakta is <strong>Hanuman</strong>
          </p>

          <p>
            On the eve of Centenary Celebration of our Divine Master, lets try to be like <strong>Bhakta Hanuman</strong> and celebrate the divine bond between Bhakta and Bhagawan.
          </p>

          <p>
            To commemorate this lets plan for Chanting Hanuman Chalisa at Hanuman or Ram Temples Across the State on and between Ram Navami and Hanuman Chalisha.(preferably on Tuesday/Saturday as we get more footfalls)
          </p>

          <h2 class="section-title">Detailed program:</h2>

          <p>
            We are planning to organize a combined program of chanting 100 Hanuman Chalisa and Bhajans at various Ram & Hanuman temple across the state from April 6 (Ram Navami) to April 14 (Hanuman Jayanti) for a duration of 9 days.
          </p>

          <h3 class="sub-title">Program</h3>
          <ul class="list-style">
            <li>-3 times Omkaram.</li>
            <li>-Hanuman Chalisa chanting for 11 times.</li>
            <li>-Bhajan</li>
            <li>(Total duration of Hanuman Chalisha chanting and Bhajan to continue as per samithi discretion)</li>
            <li>-Om Shanti, Shanti, Shanti</li>
            <li>-Satsangh On - Hanuman, The role model for Youths. ( Satsangh on this topic shall be held on 04.04.2025 during the weekly Friday Satsangh)</li>
            <li>- Handing over of the Hanuman Photo to Mandir Committee (to be fixed on wall or Positioned in the sanctum sanctorum before leaving as discussed beforehand)</li>
            <li>- ⁠Aarati</li>
            <li>(No Sarvadharma prayer & Silent sitting and Asatoma)</li>
          </ul>

          <h2 class="section-title">Reporting:</h2>
          <p>After the program, report via Google Form, including:</p>
          <ul class="list-style">
            <li>- Name of the Sai District</li>
            <li>- ⁠Name of Samithi/ Bhajan Mandali</li>
            <li>- ⁠Name of the temple / location</li>
            <li>- ⁠The number of youth participants.</li>
            <li>- ⁠3 photos (Max) from the program. At least one photo should be with the Hanuman placed in the Mandir.</li>
          </ul>

          <p>
            Districts to collect the Photo of Hanuman Statue Hanuman statue photo during the bhajan mahotsav going on in Sai Janani on 22 & 23rd this month.
          </p>

          <p>
            The photographs to be beautifully framed and gifted to the Hanuman or Ram temple.
          </p>

          <p class="closing-text">Jai Sairam.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper {
      background-color: #fcfcfc;
      padding: 40px 20px;
      min-height: 100vh;
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    .content-card {
      max-width: 850px;
      margin: 0 auto;
      background: #ffffff;
      padding: 50px;
      border-radius: 4px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      border-top: 5px solid #bf623f;
    }

    .main-title {
      color: #bf623f;
      text-align: center;
      margin-bottom: 10px;
      font-size: 2rem;
      font-weight: 700;
    }

    .divider {
      height: 3px;
      width: 60px;
      background: linear-gradient(to right, #edc685, #bf623f);
      margin: 0 auto 30px;
    }

    .text-body p {
      margin-bottom: 20px;
      white-space: pre-line;
    }

    .section-title {
      color: #bf623f;
      font-size: 1.4rem;
      margin-top: 30px;
      margin-bottom: 15px;
      border-bottom: 1px solid #eee;
      padding-bottom: 5px;
    }

    .sub-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 20px;
    }

    .list-style {
      list-style: none;
      padding-left: 0;
      margin-bottom: 20px;
    }

    .list-style li {
      margin-bottom: 8px;
    }

    .closing-text {
      text-align: center;
      font-weight: bold;
      font-size: 1.3rem;
      color: #bf623f;
      margin-top: 40px;
    }

    @media (max-width: 768px) {
      .content-card {
        padding: 25px;
      }
      .main-title {
        font-size: 1.5rem;
      }
      .page-wrapper {
        padding: 20px 10px;
      }
    }
  `]
})
export class BhaktosavamComponent {}
