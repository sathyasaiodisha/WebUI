import { FormsModule, FormBuilder, FormGroup, Validators , AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
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
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatError } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

import { DataAdminItem, JurisdictionItem, DistrctItem, DataAdminService } from '../../../../core/services/dataadmin.service';

@Component({
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatDividerModule, MatError, MatSelectModule, MatOptionModule, MatCardModule, ReactiveFormsModule, MatRadioModule],
  templateUrl: './dataadminentry.component.html',
  styleUrl: './dataadminentry.component.scss'
})
export class DataadminentryComponent implements OnInit {
  
  hidePassword = true;
  hideConfirmPassword = true;
  isDisabled = true;
  isDistrictDisabled = true;
  showDistrictDropdown = false;

  successMsg: string = "";
  showSuccessMsg: boolean = false;
  errMsg: string = "";
  showErrMsg: boolean = false;
  dataAdmins: DataAdminItem[] = [];
  adminJurisdictions: JurisdictionItem[] = [];
  districts: DistrctItem[] = [];

  newDataAdmin: DataAdminItem = {
            ID: -1,
            UserName: '',
            UserEmail: '',
            UserPwd: '',
            JurisdictionID: -1,
            DistrictID: -1
        };

  confirmPassword = '';
  passwordMismatch = false;

  constructor(private itemService: DataAdminService, private dialog: MatDialog) {}

  ngOnInit(): void {
            this.itemService.getItems().subscribe(data => {
              this.dataAdmins = data;
            });
            this.itemService.getJurisdictions().subscribe(data => {
              this.adminJurisdictions = data;
            });
            this.itemService.getDistricts().subscribe(data => {
              this.districts = data;
            })
          }

  validateConfirmPassword() {
    this.passwordMismatch = this.newDataAdmin.UserPwd !== this.confirmPassword;
  }

  onJurisdictionChange(jurisdictionID: number)
  {
    if (parseInt(jurisdictionID.toString()) === 2)
    {
      this.showDistrictDropdown = true;
      this.isDisabled=true;
    }
    else
    {
      this.showDistrictDropdown = false;
      this.isDisabled=false;
    }
  }

  onDistrictChange(districtID: number)
  {
    if (parseInt(districtID.toString()) > 0)
    {
      this.isDisabled=false;
    }
    else
    {
       this.isDisabled=true;
    }
  }

  addDataAdmin() 
  {
      const alreadyExistingDataAdmin = this.dataAdmins.find(dataAdmin => dataAdmin.UserName === this.newDataAdmin.UserName)
            
      if (alreadyExistingDataAdmin){
        this.errMsg = "The Data Admin with this User Name already exists";
        this.showErrMsg = true;
        setTimeout(()=>
            {
              this.showErrMsg = false;
              this.newDataAdmin = {
                ID: -1,
                UserName: '',
                UserEmail: '',
                UserPwd: '',
                JurisdictionID: -1,
                DistrictID: -1
              };
            }, 5000);
      }
      else
      {
        this.itemService.createItem(this.newDataAdmin).subscribe({
          next: (response) => {
            this.itemService.getItems().subscribe(data => {
            this.dataAdmins = data;  
              
            this.successMsg = this.newDataAdmin.UserName + " added successfully";
            this.showSuccessMsg = true;

            this.newDataAdmin = {
                ID: -1,
                JurisdictionID: -1,
                DistrictID: -1,
                UserName: '',
                UserEmail: '',
                UserPwd: ''
            };
            
            console.log(response);
    
            setTimeout(()=>
            {
              this.showSuccessMsg = false;
            }, 5000);
            });
          },
          error: (err) => {
            console.error('Addition failed', err);
          }
        });
      }

      //alert('User registered successfully!');
  }

}