import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../app/shared/shared.module';
import { BreadcrumbComponent } from '../app/shared/components/breadcrumb.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, BreadcrumbComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'SSSO Odisha';
}
