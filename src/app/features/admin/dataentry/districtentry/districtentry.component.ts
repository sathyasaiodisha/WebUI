import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatError } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';
import { DistictItem } from '../../../../core/models/district';


import { DistrictService } from '../../../../core/services/district.service';

@Component({
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatDividerModule, MatError],
  templateUrl: './districtentry.component.html',
  styleUrl: './districtentry.component.scss'
})

export class DistrictentryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['DistrictCode', 'DistrictName', 'Actions'];
  districtDataSrc = new MatTableDataSource<DistictItem>([]);
  currentlyEditingId: number | null = null;
  successMsg: string = "";
  showSuccessMsg: boolean = false;

  errMsg: string = "";
  showErrMsg: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  newdist: DistictItem = {
    DistrictCode: '',
    DistrictName: ''
  };

  constructor(private itemService: DistrictService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.districtDataSrc.data = data;
    });
  }

  ngAfterViewInit(): void {
    this.districtDataSrc.paginator = this.paginator;
  }

  onEdit(itemrow: DistictItem) {
    const rowId = this.districtDataSrc.data.findIndex(item => item.ID === itemrow.ID);
    if (this.currentlyEditingId !== null && this.currentlyEditingId !== rowId)
    {
      const dataset = this.districtDataSrc.data;
      const prevRow = dataset[this.currentlyEditingId];
      prevRow.isEditing = false;
      dataset[this.currentlyEditingId] = JSON.parse(JSON.stringify(prevRow));
      this.districtDataSrc.data = dataset;
    }

    itemrow.isEditing = true;
    
    this.districtDataSrc.data[rowId] = JSON.parse(JSON.stringify(itemrow));
    this.currentlyEditingId = rowId;
  }

  onSave(itemrow: DistictItem) {
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
    const alreadyExistingDist = this.districtDataSrc.data.find(dist => dist.DistrictCode === this.newdist.DistrictCode || dist.DistrictName === this.newdist.DistrictName)

    if (alreadyExistingDist){
        this.errMsg = "Either DistictCode or DistrictName already exists";
        this.showErrMsg = true;

        setTimeout(()=>
        {
          this.showErrMsg = false;
          this.newdist = {
            DistrictCode: "",
            DistrictName: ""
          };
        }, 5000);
    }
    else{
    this.itemService.createItem(this.newdist).subscribe({
      next: (response) => {
        this.itemService.getItems().subscribe(data => {
          this.districtDataSrc.data = data;
        });
        this.successMsg = "District " + this.newdist.DistrictName + " created successfully";
        this.newdist = {
          DistrictCode: "",
          DistrictName: ""
        };
        this.showSuccessMsg = true;

        console.log(response);

        setTimeout(()=>
        {
          this.showSuccessMsg = false;
        }, 5000);
      },
      error: (err) => {
        console.error('Create failed', err);
      }
    });
  }
  }

  onCancel(itemrow: DistictItem) {
    const oiginalDistName = this.districtDataSrc.data.find(item => item.ID === itemrow.ID)?.DistrictName;
    if (oiginalDistName)
    {
      itemrow.DistrictName = oiginalDistName;
    }

    itemrow.isEditing = false;
    this.currentlyEditingId = null;
  }

  onDelete(itemrow: DistictItem) {
    const distIdToDelete = itemrow.ID;
    if (distIdToDelete && distIdToDelete != 0)
    {
      const confDialog = this.dialog.open(ConfirmDialogComponent, {
        width: '300px',
        data: { item: itemrow.DistrictName }
      });
    
      confDialog.afterClosed().subscribe(result =>{
        if (result === true)
        {
        this.itemService.deleteItem(distIdToDelete).subscribe({
            next: (response) => {
              this.itemService.getItems().subscribe(data => {
                this.districtDataSrc.data = data;
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