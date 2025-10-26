import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-stateCoordinators',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'organization_sevaOrgOdisha' | translate }}
        </h1>
        <div class="row">
          <div class="col-md-6">
            <img
              src="assets/images/odisha-sai-map-Jul2025.png"
              style="width:100%;"
            />
          </div>
          <div class="col-md-6">
            <p>
              {{ 'organization_sevaOrgOdisha_p1' | translate }}
            </p>
            <p>
              {{ 'organization_sevaOrgOdisha_p2' | translate }}
            </p>
            <p>
              {{ 'organization_sevaOrgOdisha_p3' | translate }}
            </p>
          </div>
        </div>
        <p>
          {{ 'organization_sevaOrgOdisha_p4' | translate }}
        </p>
        <p>
          {{ 'organization_sevaOrgOdisha_p5' | translate }}
        </p>
        <p>
          {{ 'organization_sevaOrgOdisha_p6' | translate }}
        </p>
        <p>
          {{ 'organization_sevaOrgOdisha_p7' | translate }}
        </p>
      </div>
    </div>
  `,
})
export class SevaOrgOdishaComponent implements OnInit {
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
