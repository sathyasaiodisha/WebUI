import { Component } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { SaiSandeshItem, SaisandeshService } from '../../../../core/services/saisandesh.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule, MatProgressBar],
  templateUrl: './saisandeshupload.component.html',
  styleUrl: './saisandeshupload.component.scss'
})
export class SaisandeshuploadComponent {
  selectedFile: File | null = null;
  uploadProgress = 0;
  isPhotoAvailable = false;

  constructor(private saisandeshService: SaisandeshService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile);
      this.isPhotoAvailable = true;
    }
  }

  uploadImage() {
      if (!this.selectedFile) return;
            this.saisandeshService.uploadSaiSandeshPhoto(this.selectedFile).subscribe(event => {
              if (event.type === HttpEventType.UploadProgress)
              {
                this.uploadProgress = Math.round(100 * event.loaded/(event.total || 1));
              }
              else if (event.type === HttpEventType.Response) {
                this.uploadProgress = 100;
                console.log('Sai Sandesh successfuly uploaded', event.body);
              }
        });
      }
}