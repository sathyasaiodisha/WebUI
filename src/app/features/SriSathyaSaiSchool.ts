import {Component, OnInit} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {ApiService} from '../core/services/api.service';
import {ImageModalComponent} from '../shared/components/image-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sssschool',
  imports: [SharedModule, RouterLinkActive],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai School, Odisha' | translate }}
        </h1>

        <div style="background:#f3f3f3; border-left:5px solid #7a0c0c;padding:15px 20px;margin:25px 0;font-style:italic;">
          Today education is leading to agitation. If this situation is to be corrected, education must be
          supplemented with Educare. Education is acquired from books. Educare has, however, to manifest from
          the heart. Educare involves manifesting the human values that are latent in one’s own heart. Secular
          Education can be obtained from books. The book is like a nose, whereas education is the very breath that
          is inhaled through the nose. If there is no breath, there is no life. Similarly, humanness cannot survive
          without human values that are to be manifested through the process of Educare.
          <div style="text-align:right;font-weight:bold;margin-top:10px;font-style:italic;">
            — Bhagawan Sri Sathya Sai Baba.
          </div>
        </div>

        <p>
          The Sri Sathya Sai Education offers a <strong>special kind of education</strong> to its students with focus on
          developing <strong>good character,</strong> living a life focused on <strong>service to others,</strong> having <strong>spiritual
          awareness</strong> and achieving <strong>academic success.</strong>
        </p>
        <p>
          This whole system is built around <strong>"Educare",</strong> which is education based on human values. By
          placing these values at the core, it is a truly <strong>holistic education</strong> that aims to nourish the soul,
          improve character, and bring out the good, divine qualities hidden inside all of us.
        </p>

        <p>
          The state of Odisha is home to <strong>18 Sri Sathya Sai Schools,</strong> affiliated either to the Board of
          Secondary Education Odisha or the Central Board of Secondary Education (CBSE)
        </p>

        <p>
          Inspired by Bhagawan Sri Sathya Sai Baba's philosophy, these schools are viewed as
          important institutions, the <strong>"true temples of learning,"</strong> that provide a sound, comprehensive
          education. Each school has a management team and a dedicated group of teachers who share
          one goal: to establish a <strong>strong foundation of values</strong> in students, which is essential for their
          complete development. All Sri Sathya Sai Schools abide to a <strong>"Common Minimum Program"</strong>
          to put the ideals of Bhagawan into practice.
        </p>

        <p>The main goals of the Sri Sathya Sai Schools are focused on building a positive environment
          and mindset through:</p>
        <ul>
          <li>
            <strong>Creating a Sacred Environment:</strong> Maintaining a holy and respectful school atmosphere
            filled with the <strong>five human values:</strong> Truth, Righteous Conduct, Peace, Love and Non-
            Violence
          </li>

          <li>
            <strong>Inculcating the will for Service:</strong> Encouraging the spirit of <strong>“Love All, Serve All”</strong> and
            <strong>“Help Ever, Hurt Never.”</strong>
          </li>

          <li>
            <strong>Focusing on Life, Not Just a Living:</strong> Realizing that <strong>"Education is not merely for
            Living but for Life."</strong> <span style="font-style: italic">(Education prepares you for life itself, not just a career).</span>
          </li>

          <li>
            <strong>Promoting Unity:</strong>
            Getting rid of prejudices based on gender, caste, class, or religion,
            based on the strong belief that:
            <ul>
              <li>There is only one religion, the religion of <strong>Love.</strong></li>
              <li>There is only one caste, the caste of <strong>Humanity.</strong></li>
              <li>There is only one language, the language of the <strong>Heart.</strong></li>
              <li>There is only one God, who is <strong>Omnipresent (everywhere).</strong></li>
            </ul>
          </li>
        </ul>

        <p>
          The schools are managed by the <strong>Sri Sathya Sai Trust</strong> entrusted to the Managing Committees,
          following all the statuary guidelines, including the State Education Act, The Right to
          Education (RtE) Act 2009 (Central Act), and the State RtE Rules 2010, along with the latest
          government circulars and notifications.
        </p>

        <p>
          The state-level Sai Organisation treats each school as an important <strong>District Project</strong> in its
          respective area. This approach ensures that both the Organisation and the school benefit from
          working together and supporting each other.
        </p>
        <h2>
          School Factsheet
        </h2>
        <img style="height: auto;width: 100%;" src="assets/images/institutions/schools_data_and_graph.jpg" alt="School Data and Graph">
        <h2>
          School Statistics:
        </h2>
        <div class ="sub_wing_wrapper_bottom">
          <button type="button" class="btn btn-light" (click)="
                openImage('assets/images/institutions/year_of_establishment.jpg')">
            Year Of Establishment
          </button>
          <button type="button" class="btn btn-light" (click)="
                openImage('assets/images/institutions/address_ssss.jpg')">
            Address of Sri Sathya Sai Schools
          </button>
          <button type="button" class="btn btn-light" (click)="
                openImage('assets/images/institutions/email_ssss.jpg')">
            Email ID of Sri Sathya Sai Schools
          </button>
          <button type="button" class="btn btn-light" (click)="
                openImage('assets/images/institutions/enrolment_ssss.jpg')">
            Enrolment Status in Schools
          </button>
          <button type="button" class="btn btn-light" (click)="
                openImage('assets/images/institutions/national_council_code_ssss.jpg')">
            National Council Code for Schools
          </button>
          <button type="button" class="btn btn-light" (click)="
                openImage('assets/images/institutions/teachers_no_ssss.jpg')">
            Number of Teachers in Schools
          </button>

        </div>
        <div style="margin-top: 1rem; margin-bottom: 0.5rem">
          <h2>Contact For Sri Sathya Sai Schools</h2>
          <h5>Email: schoolcommitee&#64;sathyasaiodisha.org <br/></h5>
          <h5>Phone: 9437108062</h5>
        </div>
      </div>

    </div>`,
})
export class SriSathyaSaiSchoolComponent implements OnInit {

  constructor(private dialog: MatDialog, private apiService: ApiService) {
  }
  openImage(imageUrl: string) {
    this.dialog.open(ImageModalComponent, {
      data: { imageUrl },
      panelClass: 'image-dialog',
      maxWidth: '90vw',
      maxHeight: '90vh',
    });
  }
  ngOnInit(): void {

  }
}
