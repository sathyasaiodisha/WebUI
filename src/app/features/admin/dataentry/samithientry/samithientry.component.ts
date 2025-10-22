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
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';

import { SamithiItem, DistItem, SamithiService } from '../../../../core/services/samithi.service';
import { AuthService, UserItem } from '../../../../core/services/auth.service';
import { DataAdminItem, DataAdminService } from '../../../../core/services/dataadmin.service';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { data } from 'jquery';
import { none } from 'ol/centerconstraint';

@Component({
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatDividerModule, MatError, MatSelectModule, MatOptionModule],
  templateUrl: './samithientry.component.html',
  styleUrl: './samithientry.component.scss'
})

export class SamithientryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['SamithiRegNo', 'SamithiName', 'Actions'];
  districts: DistItem[]= [];
  distAll: DistItem[] = [{ID: 0, DistrictName: "All"}];
  loggedInUser: UserItem = {"username": "", "juris": ""};
  districtIdOfLoggedInUser: number = 0;
  districtNameOfLoggedInUser: string = "";
  showDistrictOfLoggedInUser = false;
  
  currentUserName: string = "";
  currentUserRole: number  = 0;
  
  samithiAllDataSrc = new MatTableDataSource<SamithiItem>([]);
  samithiDataForDistSrc = new MatTableDataSource<SamithiItem>([]);
  currentlyEditingId: number | null = null;
  successMsg: string = "";
  showSuccessMsg: boolean = false;
  isDisabled : boolean = true;
  //selectedDistictId: number | null = null;

  errMsg: string = "";
  showErrMsg: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  newsamithi: SamithiItem = {
    SamithiCode: '',
    SamithiName: '',
    SamithiRegNo: '',
    DistrictID: -1
  };

  constructor(private itemService: SamithiService, private authService: AuthService, private dataAdminSvc: DataAdminService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.itemService.getDists().subscribe(data => {
      this.districts = this.distAll.concat(data);
    });

    this.itemService.getItems().subscribe(data => {
      this.samithiAllDataSrc.data = data;
      this.samithiDataForDistSrc.data = data;
    });

    this.authService.getMe().subscribe(data => {
      this.loggedInUser.username = data.username;
      this.loggedInUser.juris = data.juris;

      if (this.loggedInUser.username != "" && this.loggedInUser.juris != "" && this.loggedInUser.juris =="2")
      {
        this.dataAdminSvc.getUserByUserName(this.loggedInUser.username).subscribe(dataAdmin => {
          this.districtIdOfLoggedInUser = dataAdmin.DistrictID ? dataAdmin.DistrictID : 0;
          if (this.districtIdOfLoggedInUser !=0)
          {
            this.districtNameOfLoggedInUser = this.districts.filter(dist => dist.ID == this.districtIdOfLoggedInUser)[0].DistrictName;
            this.showDistrictOfLoggedInUser = true;
            this.newsamithi.DistrictID = this.districtIdOfLoggedInUser;

            this.samithiDataForDistSrc.data = this.samithiAllDataSrc.data.filter(item => item.DistrictID == this.newsamithi.DistrictID);
            this.isDisabled = false;
          }
        });
      }
    });
  }

  ngAfterViewInit(): void {
    this.samithiDataForDistSrc.paginator = this.paginator;
  }

  onDistrictChange(districtId: number){
    this.newsamithi.DistrictID = districtId;
    if (districtId == 0 || districtId == -1){
      this.samithiDataForDistSrc.data = this.samithiAllDataSrc.data;
      this.isDisabled = true;
    }
    else{
      this.samithiDataForDistSrc.data = this.samithiAllDataSrc.data.filter(item => item.DistrictID == this.newsamithi.DistrictID);
      this.isDisabled = false;
    }
  }

  onEdit(itemrow: SamithiItem) {
      const rowId = this.samithiDataForDistSrc.data.findIndex(item => item.ID === itemrow.ID);
      if (this.currentlyEditingId !== null && this.currentlyEditingId !== rowId)
      {
        const dataset = this.samithiDataForDistSrc.data;
        const prevRow = dataset[this.currentlyEditingId];
        prevRow.isEditing = false;
        dataset[this.currentlyEditingId] = JSON.parse(JSON.stringify(prevRow));
        this.samithiDataForDistSrc.data = dataset;
      }
  
      itemrow.isEditing = true;
      
      this.samithiDataForDistSrc.data[rowId] = JSON.parse(JSON.stringify(itemrow));
      this.currentlyEditingId = rowId;
    }
  
    onSave(itemrow: SamithiItem) {
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
      const alreadyExistingSamithi = this.samithiAllDataSrc.data.find(samithi => samithi.SamithiRegNo === this.newsamithi.SamithiRegNo || samithi.SamithiName === this.newsamithi.SamithiName)
  
      if (alreadyExistingSamithi){
          this.errMsg = "Either SamithiRegistrationNo or SamithiName already exists";
          this.showErrMsg = true;
  
          setTimeout(()=>
          {
            this.showErrMsg = false;
            this.newsamithi = {
              SamithiRegNo: "",
              SamithiName: "",
              SamithiCode: "",
              DistrictID: -1
            };
          }, 5000);
      }
      else{
      this.itemService.createItem(this.newsamithi).subscribe({
        next: (response) => {
          this.itemService.getItems().subscribe(data => {
            this.samithiAllDataSrc.data = data;  
            
            this.successMsg = "Samithi " + this.newsamithi.SamithiName + " created successfully";
          this.showSuccessMsg = true;
        
          let prevSelectedDistId = this.newsamithi.DistrictID
          if (!prevSelectedDistId || prevSelectedDistId < 0)
            prevSelectedDistId = -1
          this.newsamithi = {
            SamithiRegNo: "",
            SamithiName: "",
            SamithiCode: "",
            DistrictID: prevSelectedDistId
          };
          
          if (prevSelectedDistId != -1)
            this.samithiDataForDistSrc.data = this.samithiAllDataSrc.data.filter(item => item.DistrictID == prevSelectedDistId);
          else
            this.samithiDataForDistSrc.data = this.samithiAllDataSrc.data;
  
          console.log(response);
  
          setTimeout(()=>
          {
            this.showSuccessMsg = false;
          }, 5000);
          });
        },
        error: (err) => {
          console.error('Create failed', err);
        }
      });
    }
    }

    onCancel(itemrow: SamithiItem) {
        const oiginalSamithiName = this.samithiDataForDistSrc.data.find(item => item.ID === itemrow.ID)?.SamithiName;
        if (oiginalSamithiName)
        {
          itemrow.SamithiName = oiginalSamithiName;
        }
    
        itemrow.isEditing = false;
        this.currentlyEditingId = null;
      }
    
      onDelete(itemrow: SamithiItem) {
        const samithiIdToDelete = itemrow.ID;
        if (samithiIdToDelete && samithiIdToDelete != 0)
        {
          const confDialog = this.dialog.open(ConfirmDialogComponent, {
            width: '300px',
            data: { item: itemrow.SamithiName }
          });
        
          confDialog.afterClosed().subscribe(result =>{
            if (result === true)
            {
            this.itemService.deleteItem(samithiIdToDelete).subscribe({
                next: (response) => {
                  this.itemService.getItems().subscribe(data => {
                    this.samithiAllDataSrc.data = data;
                    this.samithiDataForDistSrc.data = data;

                    let prevSelectedDistId = this.newsamithi.DistrictID
                    if (!prevSelectedDistId || prevSelectedDistId < 0)
                      prevSelectedDistId = -1
                    this.newsamithi = {
                      SamithiRegNo: "",
                      SamithiName: "",
                      SamithiCode: "",
                      DistrictID: prevSelectedDistId
                    };

                    if (prevSelectedDistId != -1)
                      this.samithiDataForDistSrc.data = this.samithiAllDataSrc.data.filter(item => item.DistrictID == prevSelectedDistId);
                    else
                      this.samithiDataForDistSrc.data = this.samithiAllDataSrc.data;
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