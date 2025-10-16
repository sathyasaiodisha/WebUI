import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-adminheader',
  imports: [MatIconModule, MatToolbar, MatButtonModule],
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.scss'
})
export class AdminheaderComponent {
  constructor(private router: Router) {}

  goToAdmin(): void {
    this.router.navigate(['/admin']);
  }

}
