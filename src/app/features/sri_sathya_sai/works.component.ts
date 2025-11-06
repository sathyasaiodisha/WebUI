import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-sss-works',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri_Sathya_Sai_works_title' | translate }}
        </h1>
        <div class="row">
          <div class="col-md-4">
            <img src="assets/images/sai_satnding_5.png " style="width:100%;" />
          </div>
          <div class="col-md-8">
            <br />
            <p>
              {{
                'Sri_Sathya_Sai_works_p1' | translate
              }}
            </p>
            <ol class="boldIli">
              <li>{{ 'Sri_Sathya_Sai_works_p2_heading' | translate}}</li>
              <ul>
                <li>
                  <b>{{ 'Sri_Sathya_Sai_works_p2_heading_1' | translate}}</b> {{
                    'Sri_Sathya_Sai_works_p2_heading_1_body' | translate
                  }}
                  include:
                </li>
                <ul>
                  <li>
                    <b
                      >{{
                        'Sri_Sathya_Sai_works_p2_heading_2' | translate
                      }}</b
                    >
                    {{
                      'Sri_Sathya_Sai_works_p2_heading_2_body' | translate
                    }}
                  </li>
                  <li>
                    <b>{{ 'Sri_Sathya_Sai_works_p2_heading_3' | translate}}</b> {{
                      'Sri_Sathya_Sai_works_p2_heading_3_body' | translate
                    }}
                  </li>
                </ul>
                <li>
                  <b>{{ 'Sri_Sathya_Sai_works_p2_heading_4' | translate}}</b> {{'Sri_Sathya_Sai_works_p2_heading_4_body' | translate}}
                </li>
                <li>
                  <b>{{ 'Sri_Sathya_Sai_works_p2_heading_5' | translate}}</b> {{
                    'Sri_Sathya_Sai_works_p2_heading_5_body' | translate
                  }}
                </li>
              </ul>
            </ol>
          </div>
        </div>
        <ol class="boldIli" start="2">
          <li>{{ 'Sri_Sathya_Sai_works_p3_heading' | translate}}</li>
          <ul>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p3_heading_1' | translate}}</b> {{
                'Sri_Sathya_Sai_works_p3_heading_1_body' | translate
              }}
            </li>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p3_heading_2' | translate}}</b> {{
                'Sri_Sathya_Sai_works_p3_heading_2_body' | translate
              }}
            </li>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p3_heading_3' | translate}}</b> {{
                'Sri_Sathya_Sai_works_p3_heading_3_body' | translate
              }}
            </li>
          </ul>
          <li>{{ 'Sri_Sathya_Sai_works_p4_heading' | translate}}</li>
          <ul>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p4_heading_1' | translate}}</b> {{
                'Sri_Sathya_Sai_works_p4_heading_1_body' | translate
              }}
            </li>
            <ul>
              <li>
                <b>{{ 'Sri_Sathya_Sai_works_p4_heading_2' | translate}}</b> {{
                  'Sri_Sathya_Sai_works_p4_heading_2_body' | translate
                }}
              </li>
              <li>
                <b>{{ 'Sri_Sathya_Sai_works_p4_heading_3' | translate}}</b> {{
                  'Sri_Sathya_Sai_works_p4_heading_3_body' | translate
                }}
              </li>
              <li>
                <b>{{ 'Sri_Sathya_Sai_works_p4_heading_4' | translate}}</b> {{'Sri_Sathya_Sai_works_p4_heading_4_body' | translate}}
              </li>
            </ul>
            <li>
              {{
                'Sri_Sathya_Sai_works_p4_heading_5_body' | translate
              }}
            </li>
          </ul>
          <li>{{ 'Sri_Sathya_Sai_works_p5_heading' | translate }}</li>
          <ul>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p5_heading_1' | translate}}</b> {{ 'Sri_Sathya_Sai_works_p5_heading_1_body' | translate}}
            </li>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p5_heading_2' | translate}}</b> {{
                'Sri_Sathya_Sai_works_p5_heading_2_body' | translate
              }}
            </li>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p5_heading_3' | translate}}</b> {{
                'Sri_Sathya_Sai_works_p5_heading_3_body' | translate
              }}
            </li>
            <li>
              <b>{{'Sri_Sathya_Sai_works_p5_heading_4' | translate }}</b> {{
                'Sri_Sathya_Sai_works_p5_heading_4_body' | translate
              }}
            </li>
          </ul>
          <li>{{ 'Sri_Sathya_Sai_works_p6_heading' | translate }}</li>
          <ul>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p6_heading_1' | translate}}</b> {{
                'Sri_Sathya_Sai_works_p6_heading_1_body' | translate
              }}
            </li>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p6_heading_2' | translate }}</b> {{
                'Sri_Sathya_Sai_works_p6_heading_2_body' | translate
              }}
            </li>
            <li>
              <b>{{ 'Sri_Sathya_Sai_works_p6_heading_3' | translate }}</b> {{
                'Sri_Sathya_Sai_works_p6_heading_3_body' | translate
              }}
            </li>
          </ul>
        </ol>
      </div>
    </div>
  `,
})
export class WorksComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {}
}
