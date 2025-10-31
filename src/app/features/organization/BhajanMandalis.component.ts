import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-samithis',
  imports: [SharedModule],
  template: `
    <div class="align-middle py-2 px-4  border border-secondary ">
      <h3 class="heading-colors text-center text-darkblue ff-source-serif-semi-bold border-heading">{{ 'AumSriSaiRam' | translate }}</h3>
      <h3 class="heading-colors text-center text-darkblue ff-source-serif-semi-bold border-heading">{{ 'bhajanmandaliTitle' | translate }}</h3>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">{{ 'slno' | translate }}</th>
            <th scope="col">{{ 'District' | translate }}</th>
            <th scope="col">{{ 'SamithiName' | translate }}</th>
            <th scope="col">{{ 'Bhajanmandali' | translate }}</th>
            <th scope="col">{{ 'RecogNo' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of data; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ item.dist }}</td>
            <td>{{ item.samithiName }}</td>
            <td>{{ item.bhajanmandali }}</td>
            <td>{{ item.recogNo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class BhajanMandalisComponent implements OnInit {
  data: {
    dist: string;
    samithiName: string;
    bhajanmandali: string;
    recogNo: string;
  }[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getBhajanMandalis().subscribe((data) => {
      this.data = data;
    });
  }
}
