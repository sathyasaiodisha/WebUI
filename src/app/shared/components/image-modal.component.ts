import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  template: `
    <div class="img-modal">
      <button class="close-btn" (click)="close()">✕</button>
      <img [src]="data.imageUrl" alt="Preview" />
    </div>
  `,
  styles: [
    `
      .img-modal {
        position: relative;
        text-align: center;
      }
      img {
        max-width: 100%;
        max-height: 80vh;
      }
      .close-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        border: none;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-size: 18px;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        cursor: pointer;
      }
    `,
  ],
})
export class ImageModalComponent {
  constructor(
    private dialogRef: MatDialogRef<ImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }
  ) {}

  close() {
    this.dialogRef.close();
  }
}
