import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule, MatError } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpEventType } from '@angular/common/http';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';

import { BVGuruItem, BVCentreItem, BhajanmandaliItem, SamithiItem, DistItem, BvguruService, GraduationMajorSubjectItem, OccupationItem, EduDegreeItem } from '../../../../core/services/bvguru.service';
import { data } from 'jquery';

@Component({
  standalone: true,
  imports: [MatCardModule, MatPaginator, MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatDividerModule, MatError, MatSelectModule, MatOptionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, ConfirmDialogComponent],
  templateUrl: './guruentry.component.html',
  styleUrl: './guruentry.component.scss'
})
export class GuruentryComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['BhajanMandaliRegNo', 'BhajanMandaliName', 'Actions'];
    districts: DistItem[]= [];
    distAll: DistItem[] = [{ID: 0, DistrictName: "All"}];
  
    samithis: SamithiItem[]= [];
    samithiAll: SamithiItem[] = [{ID: 0, SamithiName: "All"}];
    filteredSamithis: SamithiItem[] = [];

    bhajanmandalis: BhajanmandaliItem[]= [];
    bhajanmandaliAll: BhajanmandaliItem[] = [{ID: 0, BhajanMandaliName: "All"}];
    filteredBhajanMandalis: BhajanmandaliItem[] = [];

    bvcentres: BVCentreItem[]= [];
    bvcentreAll: BVCentreItem[] = [{ID: 0, BalVikasCentreName: "All"}];
    filteredBVCentres: BVCentreItem[] = [];
  
    samithiAllDataSrc = new MatTableDataSource<SamithiItem>([]);
    samithiDataForSamithiSrc = new MatTableDataSource<SamithiItem>([]);
  
    bmAllDataSrc = new MatTableDataSource<BhajanmandaliItem>([]);
    bmDataFilteredSrc = new MatTableDataSource<BhajanmandaliItem>([]);

    bvCentreAllDataSrc = new MatTableDataSource<BVCentreItem>([]);
    bvCentreDataFilteredSrc = new MatTableDataSource<BVCentreItem>([]);

    bvGuruAllDataSrc : BVGuruItem[] = [];

    qualifications : EduDegreeItem[] = [];

    gradMajorSubs : GraduationMajorSubjectItem[] = [];

    occupations : OccupationItem[] = [];
  
    currentlyEditingId: number | null = null;
    successMsg: string = "";
    showSuccessMsg: boolean = false;
    isDisabled : boolean = true;
    isSamiithiSelectionDisabled : boolean = true;
    isBMSelectionDisabled : boolean = true;
    isBVCentreSelectionDisabled : boolean = true;
    selectedFile: File | null = null;
    uploadProgress = 0;

    //selectedDistictId: number | null = null;
  
    errMsg: string = "";
    showErrMsg: boolean = false;

    GroupsOfStudents = [
      {name: 'Group1', value: '1', selected: false},
      {name: 'Group2', value: '2', selected: false},
      {name: 'Group3', value: '3', selected: false}
    ]

    selectedGroups: string[] = [];

    selectedGroupsConcatenated = "";

    newbvGuru: BVGuruItem = {
        DistrictID: -1,
        SamithiID: -1,
        BhajanMandaliID: -1,
        BalVikasCentreID: -1,
        BalVikasCentreName: '',
        GuruName: '',
        DateOfBirth: '',
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        PIN: '',
        ContactNo1: '',
        ContactNo2: '',
        Email: '',
        Gender: '',
        HighestEducationalDegreeID: -1,
        GraduationMajorSubjectID: -1,
        OccupationID: -1,
        AlumnusOf: '',
        Photo: '',
        TargetGroupsOfStudents: ''
      };

    constructor(private bvguruService: BvguruService, private dialog: MatDialog) {}

    ngOnInit(): void {

      this.bvguruService.geItems().subscribe(data => {
        this.bvGuruAllDataSrc.concat(data);
      });

      this.bvguruService.getDists().subscribe(data => {
        this.districts = this.distAll.concat(data);
      });
  
      this.bvguruService.getSamithis().subscribe(data => {
        this.samithis = this.samithiAll.concat(data);
        this.filteredSamithis = this.samithis;
      });

      this.bvguruService.getGuruQualifications().subscribe(data => {
        this.qualifications = data;
      });

      this.bvguruService.getGuruGraduationMajors().subscribe(data => {
        this.gradMajorSubs = data;
      });

      this.bvguruService.getGuruOccupations().subscribe(data => {
        this.occupations = data;
      });
      // this.bvguruService.getItems().subscribe(data => {
      //   this.bmAllDataSrc.data = data;
      //   this.bmDataFilteredSrc.data = data;
      // });
    }

    ngAfterViewInit(): void {
      //this.bmDataFilteredSrc.paginator = this.paginator;
    }

    onDistrictChange(districtId: number){
      this.newbvGuru.DistrictID = districtId;
      this.newbvGuru.SamithiID = -1;
      this.filteredBhajanMandalis= [];
      this.filteredBVCentres= [];
      this.isBMSelectionDisabled = true;
      this.isBVCentreSelectionDisabled = true;
      this.isDisabled = true;
      if (districtId == 0 || districtId == -1){
        this.bmDataFilteredSrc.data = this.bmAllDataSrc.data;
        //this.bmDataFilteredSrc.paginator = this.paginator;
        
        this.isSamiithiSelectionDisabled = true;
        this.filteredSamithis = this.samithis;
      }
      else{
        this.bvguruService.getSamithisbyDistrict(districtId).subscribe(data => {
          this.filteredSamithis = this.samithiAll.concat(data);
          this.isSamiithiSelectionDisabled = false;
        });
      }
    }

    onSamithiChange(samithiId: number){
      this.newbvGuru.SamithiID = samithiId;
      this.newbvGuru.BhajanMandaliID = -1;
      this.filteredBVCentres = [];
      this.filteredBhajanMandalis = [];
      this.isBVCentreSelectionDisabled = true;
      this.isDisabled = true;
      if (samithiId == 0 || samithiId == -1){
        this.bmDataFilteredSrc.data = this.bmAllDataSrc.data;
        //this.bmDataFilteredSrc.paginator = this.paginator;
        this.isDisabled = true;
        this.isBMSelectionDisabled = true;
        this.filteredBhajanMandalis = this.bhajanmandalis;
      }
      else{
        this.bvguruService.getBhajanMandaisBySamithi(samithiId).subscribe(data => {
          this.filteredBhajanMandalis = this.bhajanmandaliAll.concat(data);
          this.isBMSelectionDisabled = false;
        });
      }
    }

    onBhajanMandaliChange(bhajanMandaliId: number){
      this.newbvGuru.BhajanMandaliID = bhajanMandaliId;
      this.newbvGuru.BalVikasCentreID = -1;
      if (bhajanMandaliId == 0 || bhajanMandaliId == -1){
        this.bvCentreDataFilteredSrc.data = this.bvCentreAllDataSrc.data;
        this.isDisabled = true;
        this.isBVCentreSelectionDisabled = true;
        this.filteredBVCentres = this.bvcentres;
        //this.bmDataFilteredSrc.paginator = this.paginator;
        this.isDisabled = true;
      }
      else{
        this.bvguruService.getBVCentresbyBM(bhajanMandaliId).subscribe(data => {
          this.filteredBVCentres = this.bvcentreAll.concat(data);
          this.isBVCentreSelectionDisabled = false;
          this.isDisabled = true;
        });
      }
    }

    onBVCentreChange(bvCentreId: number){
      if (bvCentreId == 0 || bvCentreId == -1){
        this.isDisabled = true;
      }
      else
      {
        this.isDisabled = false;
      }
    }

    onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile);
      }
    }

    onSelectionChange() {
      this.selectedGroups = this.GroupsOfStudents
                            .filter(item => item.selected)
                            .map(item => item.value);
      
      this.selectedGroupsConcatenated = this.selectedGroups.join(", ");
    }

    createItem() {
          const alreadyExistingBVGuru = this.bvGuruAllDataSrc.find(bvguru => bvguru.GuruName === this.newbvGuru.GuruName && bvguru.DistrictID === this.newbvGuru.DistrictID && bvguru.SamithiID === this.newbvGuru.SamithiID && bvguru.BhajanMandaliID === this.newbvGuru.BhajanMandaliID && bvguru.BalVikasCentreID === this.newbvGuru.BalVikasCentreID)
      
          if (alreadyExistingBVGuru){
              this.errMsg = "Guru with this name already exists";
              this.showErrMsg = true;
      
              setTimeout(()=>
              {
                this.showErrMsg = false;
              }, 5000);
          }
          else{
            if (!this.selectedFile) return;
          this.bvguruService.uploadFile(this.selectedFile).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress)
            {
              this.uploadProgress = Math.round(100 * event.loaded/(event.total || 1));
            }
            else if (event.type === HttpEventType.Response) {
              console.log('Upload complete:', event.body);
              this.newbvGuru.Photo = event.body.fileurl;
              
              this.newbvGuru.TargetGroupsOfStudents = this.selectedGroupsConcatenated; 
              this.bvguruService.createItem(this.newbvGuru).subscribe(() => {
                this.successMsg = "Bal Vikas Guru added successfully";
                this.showSuccessMsg = true;
              });
            }

          });
          // this.newbvGuru.TargetGroupsOfStudents = this.selectedGroupsConcatenated;
          // this.bvguruService.createItem(this.newbvGuru).subscribe(() => {
          //       this.successMsg = "Bal Vikas Guru added successfully";
          //       this.showSuccessMsg = true;
          // });
        }
        }
}
