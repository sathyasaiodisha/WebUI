import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-sic',
  imports: [SharedModule],
  template: `
    <div class="align-middle py-2 px-4  border border-secondary ">
      <h3 class="text-center">{{ 'OmSriSaiRam' | translate }}</h3>
      <h4 class="text-center">{{ 'dpTitle' | translate }}</h4>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">{{ 'slno' | translate }}</th>
            <th scope="col">{{ 'District' | translate }}</th>
            <th scope="col">{{ 'DistrictPresident' | translate }}</th>
            <th scope="col">{{ 'PhoneNo1' | translate }}</th>
            <th scope="col">{{ 'PhoneNo2' | translate }}</th>
            <th scope="col">{{ 'WhatsAppNo' | translate }}</th>
            <th scope="col">{{ 'emailid' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of data; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ item.district }}</td>
            <td>{{ item.dp }}</td>
            <td>{{ item.phoneNo1 }}</td>
            <td>{{ item.phoneNo2 }}</td>
            <td>{{ item.whatsAppNo }}</td>
            <td>{{ item.emailid }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class DistrictPresidentsComponent implements OnInit {
  data: {
    district: string;
    dp: string;
    phoneNo1: string;
    phoneNo2: string;
    whatsAppNo: string;
    emailid: string;
  }[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getDistrictPresidents().subscribe((data) => {
      this.data = data;
    });
  }
}
