import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-sss-teachings',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri_Sathya_Sai_teachings_title' | translate }}
        </h1>
        <div class="row">
          <div class="col-md-4">
            <img src="assets/images/sai_standing_6.png" style="width:100%;" />
          </div>
          <div class="col-md-8">
            <br />
            <br />
            <p>
              {{
                'Sri_Sathya_Sai_teachings_p1' | translate
              }}
            </p>

            <ol class="boldIli">
              <li>{{ 'Sri_Sathya_Sai_teachings_p2_heading' | translate}}</li>

              <ul>
                <li>
                  <span style="font-weight: bold;">{{ 'Sri_Sathya_Sai_teachings_p2_heading_1' | translate}}</span> {{'Sri_Sathya_Sai_teachings_p2_heading_1_body' | translate}}
                </li>
                <li>
                  <span style="font-weight: bold;">{{'Sri_Sathya_Sai_teachings_p2_heading_2' | translate}}</span> {{'Sri_Sathya_Sai_teachings_p2_2_body' | translate}}
                </li>
                <li>
                  <span style="font-weight: bold;">{{'Sri_Sathya_Sai_teachings_p2_heading_3' | translate}}</span> {{'Sri_Sathya_Sai_teachings_p2_3_body' | translate}}
                </li>
                <li>
                  <span style="font-weight: bold;">{{'Sri_Sathya_Sai_teachings_p2_heading_4' | translate}}</span> {{'Sri_Sathya_Sai_teachings_p2_4_body' | translate}}
                </li>
                <li>
                  <span style="font-weight: bold;">{{ 'Sri_Sathya_Sai_teachings_p2_heading_5' | translate}}</span> {{'Sri_Sathya_Sai_teachings_p2_5_body' | translate}}
                </li>
              </ul>
            </ol>
          </div>
        </div>
        <ol class="boldIli" start="2">
          <li>{{'Sri_Sathya_Sai_teachings_p3_heading_1' | translate}}</li>
          <p>
            {{'Sri_Sathya_Sai_teachings_p3_1_body' | translate}}
          </p>
          <li>{{'Sri_Sathya_Sai_teachings_p4_heading_1' | translate}}</li>
          <p>
            {{'Sri_Sathya_Sai_teachings_p4_1_body' | translate}}
          </p>
          <li>{{'Sri_Sathya_Sai_teachings_p5_heading' | translate}}</li>

          <ul>
            <li>
              <span style="font-weight: bold;">{{'Sri_Sathya_Sai_teachings_p5_heading_1' | translate}}</span> {{'Sri_Sathya_Sai_teachings_p5_1_body' | translate}}
            </li>
            <li>
              <span style="font-weight: bold;">{{'Sri_Sathya_Sai_teachings_p5_heading_3' | translate}}</span> {{'Sri_Sathya_Sai_teachings_p5_3_body' | translate}}
            </li>
            <li>
              <span style="font-weight: bold;">{{'Sri_Sathya_Sai_teachings_p5_heading_4' | translate}}</span> {{'Sri_Sathya_Sai_teachings_p5_4_body' | translate}}
            </li>
          </ul>
          <li>{{'Sri_Sathya_Sai_teachings_p10_heading' | translate}}</li>
          <p>
            {{'Sri_Sathya_Sai_teachings_p10_1_body' | translate}}
          </p>
          <li>{{'Sri_Sathya_Sai_teachings_p6_heading' | translate}}</li>
          <p>
            {{'Sri_Sathya_Sai_teachings_p6_1_body' | translate}}
          </p>
          <li>{{'Sri_Sathya_Sai_teachings_p7_heading' | translate}}</li>
          <p>
            {{'Sri_Sathya_Sai_teachings_p7_1_body' | translate}}
          </p>
          <li>{{'Sri_Sathya_Sai_teachings_p8_heading' | translate}}</li>
          <p>{{'Sri_Sathya_Sai_teachings_p8_1_body' | translate}}</p>
          <ul>
            <li>{{'Sri_Sathya_Sai_teachings_p8_2_body' | translate}}</li>
            <li>{{'Sri_Sathya_Sai_teachings_p8_3_body' | translate}}</li>
            <li>{{'Sri_Sathya_Sai_teachings_p8_4_body' | translate}}</li>
          </ul>
          <li>{{'Sri_Sathya_Sai_teachings_p9_heading' | translate}}</li>
          <p>
            {{'Sri_Sathya_Sai_teachings_p9_1_body' | translate}}
          </p>
          <p>
            {{'Sri_Sathya_Sai_teachings_p9_2_body' | translate}}
          </p>
        </ol>
      </div>
    </div>
  `,
})
export class TeachingsComponent implements OnInit {
  ngOnInit(): void {}
}
