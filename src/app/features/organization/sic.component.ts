import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';
interface row {
  stateInCharge: string;
  inChargeName: string;
  contactno: string;
  whatsAppNo: string;
  emailid: string;
  continuingNew: string;
}
interface data {
  wing: string;
  row: row[];
}

@Component({
  selector: 'app-sic',
  imports: [SharedModule],
  template: `
    <div class="align-middle py-2 px-4  border border-secondary ">
      <h3 class="text-center">{{ 'AumSriSaiRam' | translate }}</h3>
      <h4 class="text-center">{{ 'sicTitle' | translate }}</h4>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">{{ 'slno' | translate }}</th>
            <th scope="col">{{ 'StateInCharge' | translate }}</th>
            <th scope="col">{{ 'InChargeName' | translate }}</th>
            <th scope="col">{{ 'Contactno' | translate }}</th>
            <th scope="col">{{ 'WhatsAppNo' | translate }}</th>
            <th scope="col">{{ 'emailid' | translate }}</th>
            <th scope="col">{{ 'ContinuingNew' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <ng-content *ngFor="let r of data; let i = index">
            <tr>
              <th colspan="7">{{ r.wing }}</th>
            </tr>
            <tr *ngFor="let item of r.row; let ii = index"  >
              <td>{{ ii + 1 }}</td>
              <td>{{ item.stateInCharge }}</td>
              <td>{{ item.inChargeName }}</td>
              <td>{{ item.contactno }}</td>
              <td>{{ item.whatsAppNo }}</td>
              <td>{{ item.emailid }}</td>
              <td>{{ item.continuingNew }}</td>
            </tr>
          </ng-content>
        </tbody>
      </table>
    </div>
  `,
})
export class SICComponent implements OnInit {
  data: data[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getSICs().subscribe((data) => {
      this.data = data;
    });
  }
}
