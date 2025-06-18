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

import { BhajanmandaliItem, SamithiItem, DistItem, BhajanmandaliService } from '../../../../core/services/bhajanmandali.service';
import { data } from 'jquery';

@Component({
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatDividerModule, MatError, MatSelectModule, MatOptionModule],
  templateUrl: './bmentry.component.html',
  styleUrl: './bmentry.component.scss'
})
export class BmentryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['BhajanMandaliRegNo', 'BhajanMandaliName', 'Actions'];
  districts: DistItem[]= [];
  distAll: DistItem[] = [{ID: 0, DistrictName: "All"}];

  samithis: SamithiItem[]= [];
  samithiAll: SamithiItem[] = [{ID: 0, SamithiName: "All"}];
  filteredSamithis: SamithiItem[] = [];

  samithiAllDataSrc = new MatTableDataSource<SamithiItem>([]);
  samithiDataForSamithiSrc = new MatTableDataSource<SamithiItem>([]);

  bmAllDataSrc = new MatTableDataSource<BhajanmandaliItem>([]);
  bmDataFilteredSrc = new MatTableDataSource<BhajanmandaliItem>([]);

  currentlyEditingId: number | null = null;
  successMsg: string = "";
  showSuccessMsg: boolean = false;
  isDisabled : boolean = true;
  isSamiithiSelectionDisabled : boolean = true;
  //selectedDistictId: number | null = null;

  errMsg: string = "";
  showErrMsg: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  newbm: BhajanmandaliItem = {
      BhajanMandaliCode: '',
      BhajanMandaliName: '',
      BhajanMandaliRegNo: '',
      DistrictID: -1,
      SamithiID: -1
    };
  
    constructor(private itemService: BhajanmandaliService, private dialog: MatDialog) {}

    ngOnInit(): void {
      this.itemService.getDists().subscribe(data => {
        this.districts = this.distAll.concat(data);
      });
  
      this.itemService.getSamithis().subscribe(data => {
        this.samithis = this.samithiAll.concat(data);
        this.filteredSamithis = this.samithis;
      });

      this.itemService.getItems().subscribe(data => {
        this.bmAllDataSrc.data = data;
        this.bmDataFilteredSrc.data = data;
      });
    }

    ngAfterViewInit(): void {
      this.bmDataFilteredSrc.paginator = this.paginator;
    }

    onDistrictChange(districtId: number){
      this.newbm.DistrictID = districtId;
      this.newbm.SamithiID = -1;
      if (districtId == 0 || districtId == -1){
        this.bmDataFilteredSrc.data = this.bmAllDataSrc.data;
        this.bmDataFilteredSrc.paginator = this.paginator;
        this.isDisabled = true;
        this.isSamiithiSelectionDisabled = true;
        this.filteredSamithis = this.samithis;
      }
      else{
        this.itemService.getSamithisbyDistrict(districtId).subscribe(data => {
          this.filteredSamithis = this.samithiAll.concat(data);
        });

        this.itemService.getBhajanMandalisbyDistrict(districtId).subscribe(data =>
        {
          this.bmDataFilteredSrc.data = data;
          this.bmDataFilteredSrc.paginator = this.paginator;
          this.isSamiithiSelectionDisabled = false;
          this.isDisabled = true;
        });
      }
    }

    onSamithiChange(samithiId: number){
      this.newbm.SamithiID = samithiId;
      if (samithiId == 0 || samithiId == -1){
        this.bmDataFilteredSrc.data = this.bmAllDataSrc.data;
        this.bmDataFilteredSrc.paginator = this.paginator;
        this.isDisabled = true;
      }
      else{
        this.bmDataFilteredSrc.data = this.bmAllDataSrc.data.filter(item => item.SamithiID == this.newbm.SamithiID);
        this.bmDataFilteredSrc.paginator = this.paginator;
        this.isDisabled = false;
      }
    }

    onEdit(itemrow: BhajanmandaliItem) {
          const rowId = this.bmDataFilteredSrc.data.findIndex(item => item.ID === itemrow.ID);
          if (this.currentlyEditingId !== null && this.currentlyEditingId !== rowId)
          {
            const dataset = this.bmDataFilteredSrc.data;
            const prevRow = dataset[this.currentlyEditingId];
            prevRow.isEditing = false;
            dataset[this.currentlyEditingId] = JSON.parse(JSON.stringify(prevRow));
            this.bmDataFilteredSrc.data = dataset;
          }
      
          itemrow.isEditing = true;
          
          this.bmDataFilteredSrc.data[rowId] = JSON.parse(JSON.stringify(itemrow));
          this.currentlyEditingId = rowId;
        }

    onSave(itemrow: BhajanmandaliItem) {
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
          const alreadyExistingBM = this.bmAllDataSrc.data.find(bm => bm.BhajanMandaliRegNo === this.newbm.BhajanMandaliRegNo || bm.BhajanMandaliName === this.newbm.BhajanMandaliName)
      
          if (alreadyExistingBM){
              this.errMsg = "Either BhajanMandaliRegistrationNo or BhajanMandaliName already exists";
              this.showErrMsg = true;
      
              setTimeout(()=>
              {
                this.showErrMsg = false;
                this.newbm = {
                  BhajanMandaliCode: '',
                  BhajanMandaliName: '',
                  BhajanMandaliRegNo: '',
                  DistrictID: this.newbm.DistrictID,
                  SamithiID: this.newbm.SamithiID
                };
              }, 5000);
          }
          else{
          this.itemService.createItem(this.newbm).subscribe({
            next: (response) => {
              this.itemService.getItems().subscribe(data => {
                this.bmAllDataSrc.data = data;  
                
                this.successMsg = "Bhajan Mandali " + this.newbm.BhajanMandaliName + " created successfully";
              this.showSuccessMsg = true;
            
              let prevSelectedDistId = this.newbm.DistrictID
              if (!prevSelectedDistId || prevSelectedDistId < 0)
                prevSelectedDistId = -1

              let prevSelectedSamithiId = this.newbm.SamithiID
              if (!prevSelectedSamithiId || prevSelectedSamithiId < 0)
                prevSelectedSamithiId = -1

              this.newbm = {
                BhajanMandaliCode: '',
                BhajanMandaliName: '',
                BhajanMandaliRegNo: '',
                DistrictID: prevSelectedDistId,
                SamithiID: prevSelectedSamithiId
              };
              
              if (prevSelectedSamithiId != -1 && prevSelectedSamithiId != 0)
                this.bmDataFilteredSrc.data = this.bmAllDataSrc.data.filter(item => item.SamithiID == prevSelectedSamithiId);
              else if (prevSelectedDistId != -1 && prevSelectedDistId != 0)
                this.bmDataFilteredSrc.data = this.bmAllDataSrc.data.filter(item => item.DistrictID == prevSelectedDistId);
              else
                this.bmDataFilteredSrc.data = this.bmAllDataSrc.data;

              this.bmDataFilteredSrc.paginator = this.paginator;
      
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

    onCancel(itemrow: BhajanmandaliItem) {
            const oiginalBMName = this.bmDataFilteredSrc.data.find(item => item.ID === itemrow.ID)?.BhajanMandaliName;
            if (oiginalBMName)
            {
              itemrow.BhajanMandaliName = oiginalBMName;
            }
        
            itemrow.isEditing = false;
            this.currentlyEditingId = null;
          }

    onDelete(itemrow: BhajanmandaliItem) {
            const bmIdToDelete = itemrow.ID;
            if (bmIdToDelete && bmIdToDelete != 0)
            {
              const confDialog = this.dialog.open(ConfirmDialogComponent, {
                width: '300px',
                data: { item: itemrow.BhajanMandaliName }
              });
            
              confDialog.afterClosed().subscribe(result =>{
                if (result === true)
                {
                this.itemService.deleteItem(bmIdToDelete).subscribe({
                    next: (response) => {
                      this.itemService.getItems().subscribe(data => {
                        this.bmAllDataSrc.data = data;
                        this.bmDataFilteredSrc.data = data;
    
                        let prevSelectedDistId = this.newbm.DistrictID
                        if (!prevSelectedDistId || prevSelectedDistId < 0)
                          prevSelectedDistId = -1

                        let prevSelectedSamithiId = this.newbm.SamithiID
                        if (!prevSelectedSamithiId || prevSelectedSamithiId < 0)
                          prevSelectedSamithiId = -1

                        this.newbm = {
                          BhajanMandaliCode: '',
                          BhajanMandaliName: '',
                          BhajanMandaliRegNo: '',
                          DistrictID: prevSelectedDistId,
                          SamithiID: prevSelectedSamithiId
                        };
                        
                        if (prevSelectedSamithiId != -1 && prevSelectedSamithiId != 0)
                          this.bmDataFilteredSrc.data = this.bmAllDataSrc.data.filter(item => item.SamithiID == prevSelectedSamithiId);
                        else if (prevSelectedDistId != -1 && prevSelectedDistId != 0)
                          this.bmDataFilteredSrc.data = this.bmAllDataSrc.data.filter(item => item.DistrictID == prevSelectedDistId);
                        else
                          this.bmDataFilteredSrc.data = this.bmAllDataSrc.data;

                        this.bmDataFilteredSrc.paginator = this.paginator;
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