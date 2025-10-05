import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-sic',
  imports: [SharedModule],
  template: `
    <div class="align-middle py-2 px-4  border border-secondary ">
      <h3 class="text-center">{{ 'AumSriSaiRam' | translate }}</h3>
      <h4 class="text-center">{{ 'districtCoordinatorTitle' | translate }}</h4>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th rowspan="2">{{ 'slno' | translate }}</th>
            <th rowspan="2">{{ 'District' | translate }}</th>
            <th rowspan="2">{{ 'Gender' | translate }}</th>
            <th colspan="2">{{ 'distSpiritualCOORDINATOR' | translate }}</th>
            <th colspan="2">{{ 'distEduCOORDINATOR' | translate }}</th>
            <th colspan="2">{{ 'distSerCOORDINATOR' | translate }}</th>
            <th colspan="2">{{ 'distYouthCOORDINATOR' | translate }}</th>
            <th colspan="2">{{ 'distJtYouthCOORDINATOR' | translate }}</th>
            <th colspan="2">{{ 'distItCOORDINATOR' | translate }}</th>
          </tr>
          <tr>
            <th scope="col">{{ 'Name' | translate }}</th>
            <th scope="col">{{ 'PhoneNo' | translate }}</th>
            <th scope="col">{{ 'Name' | translate }}</th>
            <th scope="col">{{ 'PhoneNo' | translate }}</th>
            <th scope="col">{{ 'Name' | translate }}</th>
            <th scope="col">{{ 'PhoneNo' | translate }}</th>
            <th scope="col">{{ 'Name' | translate }}</th>
            <th scope="col">{{ 'PhoneNo' | translate }}</th>
            <th scope="col">{{ 'Name' | translate }}</th>
            <th scope="col">{{ 'PhoneNo' | translate }}</th>
            <th scope="col">{{ 'Name' | translate }}</th>
            <th scope="col">{{ 'PhoneNo' | translate }}</th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngFor="let district of data; let ii = index">
            <ng-container
              *ngFor="let contact of district.contacts; let i = index"
            >
              <tr>
                <td *ngIf="i === 0" [attr.rowspan]="district.contacts.length">
                  {{ ii + 1 }}
                </td>
                <td *ngIf="i === 0" [attr.rowspan]="district.contacts.length">
                  {{ district.dist }}
                </td>
                <td>{{ contact.gender }}</td>
                <td>{{ contact.spCoord.name }}</td>
                <td>{{ contact.spCoord.PhoneNo }}</td>
                <td>{{ contact.eduCoord.name }}</td>
                <td>{{ contact.eduCoord.PhoneNo }}</td>
                <td>{{ contact.serCoord.name }}</td>
                <td>{{ contact.serCoord.PhoneNo }}</td>
                <td>{{ contact.youthCoord.name }}</td>
                <td>{{ contact.youthCoord.PhoneNo }}</td>
                <td>{{ contact.jrYouthCoord.name }}</td>
                <td>{{ contact.jrYouthCoord.PhoneNo }}</td>
                <td>{{ contact.itCoord.name }}</td>
                <td>{{ contact.itCoord.PhoneNo }}</td>
              </tr>
            </ng-container>
          </ng-container>
        </tbody>
      </table>
    </div>
  `,
})
export class DistrictCoordinatorComponent implements OnInit {
  data: {
    dist: string;
    contacts: any[];
  }[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getDistrictCoordinators().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
