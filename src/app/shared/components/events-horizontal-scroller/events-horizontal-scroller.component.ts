import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-horizontal-scroller',
  imports: [CommonModule,RouterModule],
  templateUrl: './events-horizontal-scroller.component.html',
  styleUrl: './events-horizontal-scroller.component.scss'
})
export class EventsHorizontalScrollerComponent {
  items = [
    { title: 'Bhaktosavam (26th March to 14th April)', route: '/wings/youth/bhaktosavam' },
    { title: 'Summer Course Samithi Level', route: '/wings/youth/SummerCourse' },
    { title: 'Zonal level youth Retreat at Khurda district (Participants Khurda, Bhubaneswar, Puri, Nayagarh)', route: '/' },
  ];
}
