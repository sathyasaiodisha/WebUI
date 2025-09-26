import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatDividerModule} from '@angular/material/divider';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {DesignationItem, DesignationService} from '../../../../core/services/designation.service';
import {MatCheckbox} from '@angular/material/checkbox';
import {ConfirmDialogComponent} from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-designationentry',
  imports: [MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatDividerModule, MatSelectModule, MatOptionModule, MatCheckbox],
  templateUrl: './designationentry.component.html',
  styleUrl: './designationentry.component.scss'
})
export class DesignationentryComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['DesignationName', 'DesignationCode', 'OrgLevelID', 'HierarchyOrder', 'Actions'];

  designationDataSrc = new MatTableDataSource<DesignationItem>([]);
  currentlyEditingId: number | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  newDesignation  = {
    DesignationName: '',
    DesignationCode: '',
    HierarchyOrder: '',
    OrgLevelID: '',
    gentsAndLadies: false
  };

  // Dropdown options
  orgLevels = [
    { label: 'State',          value: 1 },
    { label: 'District',       value: 2 },
    { label: 'Samithi',        value: 3 },
    { label: 'Bhajan Mandali', value: 4 }
  ];
  successMsg: string = "";
  showSuccessMsg: boolean = false;

  errMsg: string = "";
  showErrMsg: boolean = false;

  constructor(private itemService: DesignationService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.designationDataSrc.data = data;
      console.log(this.designationDataSrc.data);
    });
  }

  ngAfterViewInit(): void {
    this.designationDataSrc.paginator = this.paginator;
  }


  createItem(): void {
    const duplicate = this.designationDataSrc.data.find(
      d =>
        d.DesignationCode === this.newDesignation.DesignationCode ||
        d.DesignationName === this.newDesignation.DesignationName
    );

    if (duplicate) {
      this.showError('Designation Code or Name already exists');
      return;
    }

    this.itemService.createItem(this.newDesignation).subscribe({
      next: (response ) => {
        this.itemService.getItems().subscribe(data => {
          this.designationDataSrc.data = data;
        })
        this.showSuccess(
          `Designation "${this.newDesignation.DesignationName}" created successfully`
        );
        this.resetForm();
        console.log(response)
      },
      error: err => {
        console.error('Create failed', err);
        this.showError('Failed to create designation');
      }
    });
  }

  // 🔹 Begin editing a row
  onEdit(row: DesignationItem) {
    const rowIndex = this.designationDataSrc.data.findIndex(
      d => d.ID === row.ID
    );

    // Reset previous edit row if different
    if (this.currentlyEditingId !== null && this.currentlyEditingId !== rowIndex) {
      const dataset = this.designationDataSrc.data;
      dataset[this.currentlyEditingId].isEditing = false;
    }

    row.isEditing = true;
    this.currentlyEditingId = rowIndex;
  }

  // 🔹 Save edited row
  onSave(row: DesignationItem) {
    this.itemService.updateItem(row).subscribe({
      next: () => {
        row.isEditing = false;
        this.currentlyEditingId = null;
      },
      error: err => {
        console.error('Update failed', err);
        this.showError('Failed to update designation');
      }
    });
  }

  // 🔹 Cancel editing
  onCancel(row: DesignationItem) {
    const original = this.designationDataSrc.data.find(d => d.ID === row.ID);
    if (original) {
      row.DesignationName = original.DesignationName;
      row.DesignationCode = original.DesignationCode;
      row.HierarchyOrder = original.HierarchyOrder;
      row.OrgLevelID = original.OrgLevelID;
    }
    row.isEditing = false;
    this.currentlyEditingId = null;
  }

  // 🔹 Delete row with confirmation
  onDelete(row: DesignationItem) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { item: row.DesignationName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true && row.ID) {
        this.itemService.deleteItem(row.ID).subscribe({
          next: (response) => {
            this.itemService.getItems().subscribe(data =>{
              this.designationDataSrc.data = data;
            })
            console.log(response);
          },
          error: err => {
            console.error('Delete failed', err);
            this.showError('Failed to delete designation');
          }
        });
      }
    });
  }

  // 🔹 Utility
  private resetForm() {
    this.newDesignation = {
      DesignationName: '',
      DesignationCode: '',
      HierarchyOrder: '',
      OrgLevelID: '',
      gentsAndLadies: false
    };
  }

  private showSuccess(msg: string) {
    this.successMsg = msg;
    this.showSuccessMsg = true;
    setTimeout(() => (this.showSuccessMsg = false), 4000);
  }

  private showError(msg: string) {
    this.errMsg = msg;
    this.showErrMsg = true;
    setTimeout(() => (this.showErrMsg = false), 4000);
  }

}
