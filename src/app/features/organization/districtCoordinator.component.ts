import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-sic',
  imports: [SharedModule],
  template: `
    <div class="align-middle py-2 px-4  border border-secondary ">
      In progress...
      <!--h3 class="text-center">{{ 'OmSriSaiRam' | translate }}</!--h3>
      <h4 class="text-center">{{ 'stateCoordinatorsTitle' | translate }}</h4>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">{{ 'slno' | translate }}</th>
            <th scope="col">{{ 'Designation' | translate }}</th>
            <th scope="col">{{ 'Name' | translate }}</th>
            <th scope="col">{{ 'PhoneNo' | translate }}</th>
            <th scope="col">{{ 'WhatsAppNo' | translate }}</th>
            <th scope="col">{{ 'emailid' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of data; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ item.designation }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.phoneNo }}</td>
            <td>{{ item.whatsAppNo }}</td>
            <td>{{ item.emailid }}</td>
          </tr>
        </tbody>
      </!--table-->
    </div>
  `,
})
export class DistrictCoordinatorComponent implements OnInit {
  data: {
    designation: string;
    name: string;
    phoneNo: string;
    whatsAppNo: string;
    emailid: string;
  }[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getStateCoordinators().subscribe((data) => {
      this.data = data;
    });
  }
}
