import { FormsModule, FormBuilder, FormGroup, Validators , AbstractControl, ReactiveFormsModule } from '@angular/forms';
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
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule, MatError } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatDividerModule, MatError, MatSelectModule, MatOptionModule, Validators, ReactiveFormsModule],
  templateUrl: './dataadminentry.component.html',
  styleUrl: './dataadminentry.component.scss'
})
export class DataadminentryComponent {
  userForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        this.passwordStrengthValidator
      ]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // ✅ Password must be at least 6 chars, 1 uppercase, 1 number
  passwordStrengthValidator(control: AbstractControl) {
    const value = control.value;
    if (!value) return null;
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const valid = hasUpper && hasNumber && value.length >= 6;
    return valid ? null : { weakPassword: true };
  }

  // ✅ Passwords must match
  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordsMismatch: true };
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('New User Data:', this.userForm.value);
      alert('User successfully created!');
      // Here you can call your backend API (FastAPI endpoint)
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  get username() { return this.userForm.get('username'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
  get confirmPassword() { return this.userForm.get('confirmPassword'); }
}
