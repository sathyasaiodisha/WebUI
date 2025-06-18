import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'SSSO Odisha';
}
