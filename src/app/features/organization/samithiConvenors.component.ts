import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-samithiConvenors',
  imports: [SharedModule],
  template: `
    <div class="align-middle py-2 px-4  border border-secondary ">
      <h3 class="text-center">{{ 'OmSriSaiRam' | translate }}</h3>
      <h4 class="text-center">{{ 'samithiConvenorsTitle' | translate }}</h4>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">{{ 'slno' | translate }}</th>
            <th scope="col">{{ 'District' | translate }}</th>
            <th scope="col">{{ 'SevaSamithi' | translate }}</th>
            <th scope="col">{{ 'StateRecognitionNumber' | translate }}</th>
            <th scope="col">{{ 'NameConvener' | translate }}</th>
            <th scope="col">{{ 'Age' | translate }}</th>
            <th scope="col">{{ 'PhoneNo' | translate }}</th>
            <th scope="col">{{ 'Year' | translate }}</th>
            <th scope="col">{{ 'ContinuingNew' | translate }}</th>
            <th scope="col">{{ 'SaiConnectID' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of data; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ item.dist }}</td>
            <td>{{ item.sevaSamiti }}</td>
            <td>{{ item.stRecNo }}</td>
            <td>{{ item.nm }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.mob }}</td>
            <td>{{ item.year }}</td>
            <td>{{ item.contiNew }}</td>
            <td>{{ item.SaiConnectID }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class SamithiConvenorsComponent implements OnInit {
  data: {
    dist: string;
    sevaSamiti: string;
    stRecNo: string;
    nm: string;
    age: string;
    mob: string;
    year: string;
    contiNew: string;
    SaiConnectID: string;
  }[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getSamithiConvenors().subscribe((data) => {
      this.data = data;
    });
  }
}
