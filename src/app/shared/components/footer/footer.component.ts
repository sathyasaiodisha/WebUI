import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
}
