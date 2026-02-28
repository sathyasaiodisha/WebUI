import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule, MatError } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpEventType } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProgrammeItem } from '../../../../core/models/programme';
import { ActivityItem, DigitalArchiveToAdd } from '../../../../core/models/activity';
import { DistictItem } from '../../../../core/models/district';
import { SamithiItem } from '../../../../core/models/samithi';
import { WingItem } from '../../../../core/models/wing';
import { EventItem } from '../../../../core/models/event';
import { DistrictService } from '../../../../core/services/district.service';
import { WingService } from '../../../../core/services/wing.service';
import { ProgrammeService } from '../../../../core/services/programme.service';
import { EventService } from '../../../../core/services/event.service';
import { SamithiService } from '../../../../core/services/samithi.service';
import { ActivitiesService } from '../../../../core/services/activities.service';

@Component({
  standalone: true,
  imports: [MatCardModule, MatPaginator, MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatDividerModule, MatError, MatSelectModule, MatOptionModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnInit {
  successMsg: string = "";
  showSuccessMsg: boolean = false;
  
  errMsg: string = "";
  showErrMsg: boolean = false;
  
  wings: WingItem[] = [];
  selectedWingID: number = -1
  selectedWingName: string = ""

  selectedOrgLvlID: number = -1
  selectedOrgLvlName: string = ""

  programmes: ProgrammeItem[] = [];
  filteredProgrammes: ProgrammeItem[] = [];

  districts: DistictItem[] = [];
  selectedDistID: number = -1

  samithis: SamithiItem[]= [];
  filteredSamithis: SamithiItem[] = [];

  fiteredActivities: ActivityItem[] = [];
  digitalArchivesToAdd: DigitalArchiveToAdd[] = [];

  isDisabled : boolean = true;
  isDistrictSelectionDisabled: boolean = true;
  isSamithiSelectionDisabled: boolean = true;
  isWingSelectionDisabled: boolean = true;
  isProgrammeSelectionDisabled: boolean = true;
  isActivitySelectionDisabled: boolean = true;

  selectedBannerFile: File | null = null;
  selectedAgendaFile1: File | null = null;
  selectedAgendaFile2: File | null = null;

  selectedBannerFileUrl: string = "";
  selectedAgendaFile1Url: string = "";
  selectedAgendaFile2Url: string = "";

  uploadBannerProgress = 0;
  uploadAgenda1Progress = 0;
  uploadAgenda2Progress = 0;

  newEventPlan: EventItem = {
            ActivityID: -1,
            OrgLevelID: -1,
            DistrictID: -1,
            SamithiID: -1,
            EventTitle: '',
            EventVenue: '',
            EventBannerImageUrl: '',
            EventDate: '',
            EventAgendaImage1Url: '',
            EventAgendaImage2Url: ''
        };

  constructor(private wingService: WingService, private programmeService: ProgrammeService, private districtService: DistrictService, private eventService: EventService,private samithiService: SamithiService, private activitiesService: ActivitiesService, private dialog: MatDialog) {
    this.addActivity();
  }
  
  ngOnInit(): void {
      this.wingService.getItems().subscribe(data => {
        this.wings = data;
      });

      this.districtService.getItems().subscribe(data => {
        this.districts = data;
      });
    }

  onWingChange(event: MatSelectChange){
    this.selectedWingID = event.value;
    this.selectedWingName = (event.source.selected as MatOption).getLabel();

    this.programmeService.getProgrammesByWingId(this.selectedWingID, this.selectedOrgLvlID).subscribe(data => {
      if (data == null || data.length == 0){
        this.errMsg = "No programmes found for " + this.selectedWingName + " wing at " + this.selectedOrgLvlName + " level";
        this.showErrMsg = true;
        this.isProgrammeSelectionDisabled = true;
      }
      else
      {
        this.errMsg = "";
        this.showErrMsg = false;
        this.filteredProgrammes = data;
        this.isProgrammeSelectionDisabled = false;
      }
    });
  }

  onProgrammeChange(programmeId: number){
    //this.isDistrictSelectionDisabled = false;
    if (programmeId > 0)
      this.isActivitySelectionDisabled = false;
    else
      this.isActivitySelectionDisabled = true;

    if (this.newEventPlan.SamithiID != -1)
    {
      this.newEventPlan.OrgLevelID = 3;
    }
    else if (this.newEventPlan.DistrictID != -1)
    {
      this.newEventPlan.OrgLevelID = 2;
    }
    else
    {
      this.newEventPlan.OrgLevelID = 1;
    }

    this.activitiesService.getActivitiesByProgrammeIdAndOrgLvl(programmeId, this.newEventPlan.OrgLevelID).subscribe(data => {
      this.fiteredActivities = data;
    });
  }

  onOrgLevelChange(orgLvlId: number){ 
    this.selectedOrgLvlID = orgLvlId;

    switch(orgLvlId.toString())
    {
      case "1":
        this.isDistrictSelectionDisabled = true;
        this.selectedOrgLvlName = "State";
        this.isWingSelectionDisabled = false;
        break;
      case "2":
        this.isDistrictSelectionDisabled = false;
        this.selectedOrgLvlName = "District";
        this.isWingSelectionDisabled = true;
        break;
      case "3":
        this.isDistrictSelectionDisabled = false;
        this.isSamithiSelectionDisabled = false;
        this.selectedOrgLvlName = "Samithi";
        this.isWingSelectionDisabled = true;

        if (this.newEventPlan.DistrictID != null && this.newEventPlan.DistrictID > 0)
        {
          this.samithiService.getItemsbydistrict(this.newEventPlan.DistrictID).subscribe(data => {
            this.filteredSamithis = data;
          });      
        }
        break;
    }    
  }

  onDistrictChange(districtId: number){
    this.newEventPlan.DistrictID = districtId;

    if (this.selectedOrgLvlID == 3)
    {
      this.isSamithiSelectionDisabled = false;
      this.isWingSelectionDisabled = true;
    }
    else
    {
      this.isSamithiSelectionDisabled = true;
      this.isWingSelectionDisabled = false;
    }

    this.samithiService.getItemsbydistrict(districtId).subscribe(data => {
      this.filteredSamithis = data;
    });
  }

  onSamithiChange(samithiId: number){
    if (samithiId > 0)
    {
      this.isWingSelectionDisabled = false;
    }
    else
    {
      this.isWingSelectionDisabled = true;
    }
  }

  onEventTypeChange(eventTypeId: number){
    if (eventTypeId > 0)
    {
      this.isDisabled = false;
    }
    else
    {
      this.isDisabled = true;
    }
  }

  onBannerFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedBannerFile = input.files[0];
      console.log('Selected file:', this.selectedBannerFile);
      }
    }

  onAgendaImage1FileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedAgendaFile1 = input.files[0];
      console.log('Selected file:', this.selectedAgendaFile1);
      }
    }

  onAgendaImage2FileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedAgendaFile2 = input.files[0];
      console.log('Selected file:', this.selectedAgendaFile2);
      }
    }

  addPlan(): void {
    if (this.selectedBannerFile || this.selectedAgendaFile1 || this.selectedAgendaFile2 )
    {
      if (this.selectedBannerFile)
      {
        this.eventService.uploadEventBannerPhoto(this.selectedBannerFile).subscribe(event => {
              if (event.type === HttpEventType.UploadProgress)
              {
                this.uploadBannerProgress = Math.round(100 * event.loaded/(event.total || 1));
              }
              else if (event.type === HttpEventType.Response) {
                this.uploadBannerProgress = 100;
                console.log('Event banner successfuly uploaded', event.body);
                this.selectedBannerFileUrl = event.body.fileurl;

                if (this.selectedAgendaFile1)
                {
                  this.eventService.uploadEventAgendaPhoto1(this.selectedAgendaFile1).subscribe(event => {
                        if (event.type === HttpEventType.UploadProgress)
                        {
                          this.uploadAgenda1Progress = Math.round(100 * event.loaded/(event.total || 1));
                        }
                        else if (event.type === HttpEventType.Response) {
                          this.uploadAgenda1Progress = 100;
                          console.log('Event agenda1 successfuly uploaded', event.body);
                          this.selectedAgendaFile1Url = event.body.fileurl;
                          
                          if (this.selectedAgendaFile2)
                          {
                            this.eventService.uploadEventAgendaPhoto2(this.selectedAgendaFile2).subscribe(event => {
                                  if (event.type === HttpEventType.UploadProgress)
                                  {
                                    this.uploadAgenda2Progress = Math.round(100 * event.loaded/(event.total || 1));
                                  }
                                  else if (event.type === HttpEventType.Response) {
                                    this.uploadAgenda2Progress = 100;
                                    console.log('Event agenda2 successfuly uploaded', event.body);
                                    this.selectedAgendaFile2Url = event.body.fileurl;

                                    this.createPlan();
                                  }
                            });
                          }
                          else{
                            this.createPlan();
                          }
                        }
                  });
                }
                else
                {
                  this.createPlan();
                }
              }
        });
      }
      else if (this.selectedAgendaFile1)
      {
        this.eventService.uploadEventAgendaPhoto1(this.selectedAgendaFile1).subscribe(event => {
                        if (event.type === HttpEventType.UploadProgress)
                        {
                          this.uploadAgenda1Progress = Math.round(100 * event.loaded/(event.total || 1));
                        }
                        else if (event.type === HttpEventType.Response) {
                          this.uploadAgenda1Progress = 100;
                          console.log('Event agenda1 successfuly uploaded', event.body);
                          this.selectedAgendaFile1Url = event.body.fileurl;
                          
                          if (this.selectedAgendaFile2)
                          {
                            this.eventService.uploadEventAgendaPhoto2(this.selectedAgendaFile2).subscribe(event => {
                                  if (event.type === HttpEventType.UploadProgress)
                                  {
                                    this.uploadAgenda2Progress = Math.round(100 * event.loaded/(event.total || 1));
                                  }
                                  else if (event.type === HttpEventType.Response) {
                                    this.uploadAgenda2Progress = 100;
                                    console.log('Event agenda2 successfuly uploaded', event.body);
                                    this.selectedAgendaFile2Url = event.body.fileurl;

                                    this.createPlan();
                                  }
                            });
                          }
                          else{
                            this.createPlan();
                          }
                        }
                  });
      }
      else if (this.selectedAgendaFile2)
      {
        this.eventService.uploadEventAgendaPhoto2(this.selectedAgendaFile2).subscribe(event => {
                          if (event.type === HttpEventType.UploadProgress)
                          {
                            this.uploadAgenda2Progress = Math.round(100 * event.loaded/(event.total || 1));
                          }
                          else if (event.type === HttpEventType.Response) {
                            this.uploadAgenda2Progress = 100;
                            console.log('Event agenda2 successfuly uploaded', event.body);
                            this.selectedAgendaFile2Url = event.body.fileurl;

                            this.createPlan();
                          }
                    });
      }
    }
    else
    {
      this.createPlan();
    }
  }

  createPlan(): void {
    this.newEventPlan.EventBannerImageUrl = this.selectedBannerFileUrl;
    this.newEventPlan.EventAgendaImage1Url = this.selectedAgendaFile1Url;
    this.newEventPlan.EventAgendaImage2Url = this.selectedAgendaFile2Url;

    this.eventService.createPlan(this.newEventPlan).subscribe(() => {
                  this.successMsg = "Event plan created successfully";
                  this.showSuccessMsg = true;
                });
  }

  uploadBannerImage() {
      if (!this.selectedBannerFile) return;
            this.eventService.uploadEventBannerPhoto(this.selectedBannerFile).subscribe(event => {
              if (event.type === HttpEventType.UploadProgress)
              {
                this.uploadBannerProgress = Math.round(100 * event.loaded/(event.total || 1));
              }
              else if (event.type === HttpEventType.Response) {
                this.uploadBannerProgress = 100;
                console.log('Event banner successfuly uploaded', event.body);
              }
        });
      }

  uploadAgendaImage1() {
      if (!this.selectedAgendaFile1) return;
            this.eventService.uploadEventAgendaPhoto1(this.selectedAgendaFile1).subscribe(event => {
              if (event.type === HttpEventType.UploadProgress)
              {
                this.uploadAgenda1Progress = Math.round(100 * event.loaded/(event.total || 1));
              }
              else if (event.type === HttpEventType.Response) {
                this.uploadAgenda1Progress = 100;
                console.log('Event agenda1 successfuly uploaded', event.body);
              }
        });
      }

  uploadAgendaImage2() {
      if (!this.selectedAgendaFile2) return;
            this.eventService.uploadEventAgendaPhoto1(this.selectedAgendaFile2).subscribe(event => {
              if (event.type === HttpEventType.UploadProgress)
              {
                this.uploadAgenda2Progress = Math.round(100 * event.loaded/(event.total || 1));
              }
              else if (event.type === HttpEventType.Response) {
                this.uploadAgenda2Progress = 100;
                console.log('Event agenda2 successfuly uploaded', event.body);
              }
        });
      }

  addActivity(): void {
    this.digitalArchivesToAdd.push({ ActivityName: '', ActivityImage: null });
  }

  removeActivity(index: number): void {
    this.digitalArchivesToAdd.splice(index, 1);
  }

  onFileSelected(event: any, index: number){
    const fileSelected = event.target.files[0];

    if (fileSelected)
    {
      this.digitalArchivesToAdd[index].ActivityImage = fileSelected;
    }
  }

  addEvent(): void {
    this.successMsg = "Event added successfully";
    this.showSuccessMsg = true;
  }
}