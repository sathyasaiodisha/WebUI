import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resources',
  imports: [],
  templateUrl: './resources.component.html',
})
export class ResourcesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  video = false;
  audio = false;
  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      // 'url' contains the segments of the URL
      console.log('URL Segments:', url);
      // Perform actions based on the URL segments, e.g., load data for the page
      this.video = false;
      this.audio = false;
      if (url[1]?.path === 'videos') {
        this.video = true;
      } else if (url[1]?.path === 'audio') {
        this.audio = true;
      } else {
        this.video = false;
        this.audio = false;
        console.log('Other Page');
      }
    });
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        // 'fragment' contains the value after the '#' in the URL
        console.log('URL Fragment:', fragment);
        // Perform actions based on the fragment, e.g., scroll to an element
      }
    });
  }
}
