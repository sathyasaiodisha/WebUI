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
  import { MatOptionModule } from '@angular/material/core';
  import { MatInputModule, MatError } from '@angular/material/input';
  import { MatDividerModule } from '@angular/material/divider';
  import { MatDialog } from '@angular/material/dialog';
  import { MatCardModule } from '@angular/material/card';
  import { MatRadioModule } from '@angular/material/radio';
  import { MatTooltipModule } from '@angular/material/tooltip';
  import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
  import { FormsModule } from '@angular/forms';

  import { DistrictOfficeBearerItem, DistrictItem, DesignationItem, DistrictofficialsService } from '../../../../core/services/districtofficials.service';
  import { data } from 'jquery';

  @Component({
    standalone: true,
    imports: [MatCardModule, MatRadioModule, MatTooltipModule, MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatDividerModule, MatError, MatSelectModule, MatOptionModule],
    templateUrl: './districtofficebearersentry.component.html',
    styleUrl: './districtofficebearersentry.component.scss'
  })
  export class DistrictofficebearersentryComponent {
    displayedColumns: string[] = ['DistrictCode', 'DesignationCode', 'OfficeBearerName', 'AddressLine1', 'AddressLine2', 'AddressLine3', 'ContactNo1', 'ContactNo2', 'Email', 'Gender', 'Actions'];

    genders = ["M","F"];
    showForm = false;
    selectedDesignationName = "";
    districts: DistrictItem[] = [];
    districtAll: DistrictItem[] = [{ID: 0, DistrictName: "Select"}];
    designations: DesignationItem[] = [];
    savedPageIndex = 0;

    districtOfficials: DistrictOfficeBearerItem[]= [];

    districtOfficialsDataSrc = new MatTableDataSource<DistrictOfficeBearerItem>([]);

    currentlyEditingId: number | null = null;
    successMsg: string = "";
    showSuccessMsg: boolean = false;
    //isDisabled : boolean = true;
    //selectedDistictId: number | null = null;

    errMsg: string = "";
    showErrMsg: boolean = false;

    isDisabled : boolean = true;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    
    newDistrictofficial: DistrictOfficeBearerItem = {
        DistrictID: -1,
        DistrictCode: '',
        DesignationID: -1,
        DesignationCode: '',
        OfficeBearerName: '',
        AddressLine1: '',
        AddressLine2: '',
        AddressLine3: '',
        ContactNo1: '',
        ContactNo2: '',
        Email: '',
        Gender: ''
      };

      constructor(private itemService: DistrictofficialsService, private dialog: MatDialog) {}

      ngOnInit(): void {
            this.itemService.getDistricts().subscribe(data => {
              this.districts = this.districtAll.concat(data);
            });    
        
            this.itemService.getDistrictDesignations().subscribe(data => {
              this.designations = data;
            });
        
            this.itemService.getItems().subscribe(data => {
              this.districtOfficials = data;
              this.districtOfficialsDataSrc.data = data;
              
            });
          }
      
          ngAfterViewInit(): void {
            this.districtOfficialsDataSrc.paginator = this.paginator;
          }
      
          toggleForm(){
            this.savedPageIndex = this.paginator?.pageIndex ?? 0;
            this.showForm = true;
          }
      
          onChangeOfDesignation(desigId: number)
          {
            this.selectedDesignationName = this.designations.filter(item => { item.ID == desigId  })[0].DesignationName;
          }

          onChangeOfDistrict(districtId: number)
          {
            if (districtId == 0 || districtId == -1)
              this.isDisabled = true;
            else
              this.isDisabled = false;
          }
      
          cancelForm(){
            this.showForm = false;
            if (this.paginator)
            {
              this.paginator.pageIndex = this.savedPageIndex;
              this.districtOfficialsDataSrc.paginator = this.paginator;
            }
      
            this.newDistrictofficial = {
              DistrictID: -1,
              DesignationID: -1,
              OfficeBearerName: '',
              AddressLine1: '',
              AddressLine2: '',
              AddressLine3: '',
              ContactNo1: '',
              ContactNo2: '',
              Email: '',
              Gender: ''
            };
          }
      
          onEdit(itemrow: DistrictOfficeBearerItem) {
                    const rowId = this.districtOfficialsDataSrc.data.findIndex(item => item.ID === itemrow.ID);
                    if (this.currentlyEditingId !== null && this.currentlyEditingId !== rowId)
                    {
                      const dataset = this.districtOfficialsDataSrc.data;
                      const prevRow = dataset[this.currentlyEditingId];
                      prevRow.isEditing = false;
                      dataset[this.currentlyEditingId] = JSON.parse(JSON.stringify(prevRow));
                      this.districtOfficialsDataSrc.data = dataset;
                    }
                
                    itemrow.isEditing = true;
                    
                    this.districtOfficialsDataSrc.data[rowId] = JSON.parse(JSON.stringify(itemrow));
                    this.currentlyEditingId = rowId;
                  }
      
          onSave(itemrow: DistrictOfficeBearerItem) {
            console.log(JSON.stringify(itemrow));
                    this.itemService.updateItem(itemrow).subscribe({
                      next: (response) => {
                        itemrow.isEditing = false;
                        console.log(response);
                        this.currentlyEditingId = null;
                      },
                      error: (err) => {
                        console.error('Update failed', err);
                      }
                    });
                  }
          
          createItem() {
                const alreadyExistingStateOfficial = this.districtOfficialsDataSrc.data.find(distOfficial => distOfficial.DesignationID === this.newDistrictofficial.DesignationID &&
                                                                                                              distOfficial.DistrictID === this.newDistrictofficial.DistrictID)
            
                if (alreadyExistingStateOfficial){
                    this.errMsg = "The district office bearer with the designation already exists";
                    this.showErrMsg = true;
            
                    setTimeout(()=>
                    {
                      this.showErrMsg = false;
                      this.newDistrictofficial = {
                        DistrictCode: '',
                        DesignationCode: '',
                        OfficeBearerName: '',
                        AddressLine1: '',
                        AddressLine2: '',
                        AddressLine3: '',
                        ContactNo1: '',
                        ContactNo2: '',
                        Email: '',
                        Gender: ''
                      };
                    }, 5000);
                }
                else{
                this.itemService.createItem(this.newDistrictofficial).subscribe({
                  next: (response) => {
                    this.itemService.getItems().subscribe(data => {
                      this.districtOfficialsDataSrc.data = data;  
                      
                      this.successMsg = this.selectedDesignationName + " added successfully";
                    this.showSuccessMsg = true;
                  
                    // let prevSelectedDesignationId = this.newstateofficial.DesignationID
                    // if (!prevSelectedDesignationId || prevSelectedDesignationId < 0)
                    //   prevSelectedDesignationId = -1
      
                    this.newDistrictofficial = {
                        OfficeBearerName: '',
                        AddressLine1: '',
                        AddressLine2: '',
                        AddressLine3: '',
                        ContactNo1: '',
                        ContactNo2: '',
                        Email: '',
                        Gender: ''
                    };
                    
                    
            
                    console.log(response);
            
                    setTimeout(()=>
                    {
                      this.showSuccessMsg = false;
                      this.districtOfficialsDataSrc.paginator = this.paginator;
                      this.showForm = false;
                    }, 5000);
                    });
                  },
                  error: (err) => {
                    console.error('Addition failed', err);
                  }
                });
              }
              }
      
          onCancel(itemrow: DistrictOfficeBearerItem) {
                      const originalOfficeBearerName = this.districtOfficialsDataSrc.data.find(item => item.ID === itemrow.ID)?.OfficeBearerName;
                      const oiginalAddrLine1 = this.districtOfficialsDataSrc.data.find(item => item.ID === itemrow.ID)?.AddressLine1;
                      const oiginalAddrLine2 = this.districtOfficialsDataSrc.data.find(item => item.ID === itemrow.ID)?.AddressLine2;
                      const oiginalAddrLine3 = this.districtOfficialsDataSrc.data.find(item => item.ID === itemrow.ID)?.AddressLine3;
                      const oiginalContactNo1 = this.districtOfficialsDataSrc.data.find(item => item.ID === itemrow.ID)?.ContactNo1;
                      const oiginalContactNo2 = this.districtOfficialsDataSrc.data.find(item => item.ID === itemrow.ID)?.ContactNo2;
                      const oiginalEmail = this.districtOfficialsDataSrc.data.find(item => item.ID === itemrow.ID)?.Email;
                      const oiginalGender = this.districtOfficialsDataSrc.data.find(item => item.ID === itemrow.ID)?.Gender;
      
                      if (originalOfficeBearerName)
                      {
                        itemrow.OfficeBearerName = originalOfficeBearerName;
                      }
      
                      if (oiginalAddrLine1)
                      {
                        itemrow.AddressLine1 = oiginalAddrLine1;
                      }
      
                      if (oiginalAddrLine2)
                      {
                        itemrow.AddressLine2 = oiginalAddrLine2;
                      }
      
                      if (oiginalAddrLine3)
                      {
                        itemrow.AddressLine3 = oiginalAddrLine3;
                      }
      
                      if (oiginalContactNo1)
                      {
                        itemrow.ContactNo1 = oiginalContactNo1;
                      }
      
                      if (oiginalContactNo2)
                      {
                        itemrow.ContactNo2 = oiginalContactNo2;
                      }
      
                      if (oiginalEmail)
                      {
                        itemrow.Email = oiginalEmail;
                      }
      
                      if (oiginalGender)
                      {
                        itemrow.Gender = oiginalGender;
                      }
                  
                      itemrow.isEditing = false;
                      this.currentlyEditingId = null;
                    }
          
              onDelete(itemrow: DistrictOfficeBearerItem) {
                      const stateOfficeBearerIdToDelete = itemrow.ID;
                      if (stateOfficeBearerIdToDelete && stateOfficeBearerIdToDelete != 0)
                      {
                        const confDialog = this.dialog.open(ConfirmDialogComponent, {
                          width: '300px',
                          data: { item: itemrow.OfficeBearerName }
                        });
                      
                        confDialog.afterClosed().subscribe(result =>{
                          if (result === true)
                          {
                          this.itemService.deleteItem(stateOfficeBearerIdToDelete).subscribe({
                              next: (response) => {
                                this.itemService.getItems().subscribe(data => {
                                  this.districtOfficialsDataSrc.data = data;
              
                                  // let prevSelectedDistId = this.newbm.DistrictID
                                  // if (!prevSelectedDistId || prevSelectedDistId < 0)
                                  //   prevSelectedDistId = -1
          
                                  // let prevSelectedSamithiId = this.newbm.SamithiID
                                  // if (!prevSelectedSamithiId || prevSelectedSamithiId < 0)
                                  //   prevSelectedSamithiId = -1
          
                                  this.newDistrictofficial = {
                                                            OfficeBearerName: '',
                                                            AddressLine1: '',
                                                            AddressLine2: '',
                                                            AddressLine3: '',
                                                            ContactNo1: '',
                                                            ContactNo2: '',
                                                            Email: '',
                                                            Gender: ''
                                                        };
                                
          
                                  this.districtOfficialsDataSrc.paginator = this.paginator;
                                });
                  
                                console.error(response);
                              },
                              error: (err) => {
                                console.error('delete failed', err);
                              }
                            });
                          }
                        }
                        );
                      }
                    }
  }
