import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-samithis',
  imports: [SharedModule],
  template: `
    <div class="align-middle py-2 px-4  border border-secondary ">
      <h3 class="text-center">{{ 'OmSriSaiRam' | translate }}</h3>
      <h4 class="text-center">{{ 'samithisTitle' | translate }}</h4>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">{{ 'slno' | translate }}</th>
            <th scope="col">{{ 'District' | translate }}</th>
            <th scope="col">{{ 'SamithiName' | translate }}</th>
            <th scope="col">{{ 'RecogNo' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of data; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ item.dist }}</td>
            <td>{{ item.samithiName }}</td>
            <td>{{ item.recogNo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class SamithisComponent implements OnInit {
  data: {
    dist: string;
    samithiName: string;
    recogNo: string;
  }[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getSamithis().subscribe((data) => {
      this.data = data;
    });
  }
}
