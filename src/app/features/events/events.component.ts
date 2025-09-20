import { Component } from '@angular/core';
//import { inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import moment from 'moment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
})
export class EventsComponent {
  current = moment();

  mmText = '';
  dayStart = 1;
  dayEnd = 31;
  dayEndPrevious = 31;

  weeks: number[] = [];

  wdays = [
    { title: 'Sun', id: 0 },
    { title: 'Mon', id: 1 },
    { title: 'Tue', id: 2 },
    { title: 'Wed', id: 3 },
    { title: 'Thu', id: 4 },
    { title: 'Fri', id: 5 },
    { title: 'Sat', id: 6 },
  ];

  ddA: { d: number; t: string }[] = [...Array(43)];
  mmUsed = 0;

  events_fixed = [
    { title: 'Christmas', ddmm: '2512' },
    { title: "Bhagawan Sri Sathya Sai Baba's Birthday", ddmm: '2311' },
    { title: 'Convocation of SSSIHL', ddmm: '2211' },
    { title: 'Ladies Day', ddmm: '1211' },
    { title: 'Eswaramma Day', ddmm: '0605' },
    { title: 'Annual Sports & Cultural Meet', ddmm: '1101' },
    { title: 'New Year', ddmm: '0101' },
    { title: 'Makara Sankranthi', ddmm: '1401' },
    { title: 'Earth Day', ddmm: '2204' },
    { title: '	Sri Sathya Sai Aradhana Day, Human Values Day', ddmm: '2404' },
  ];
  getEvents(dd: number, weekNo?: number, WeekDay?: number) {
    const k = dd + '' + this.mm; //WeekDay + weekNo;
    var events: any = [];
    this.events_fixed.forEach((ev) => {
      if (ev.ddmm == k) events.push(ev);
    });
    return events;
  }
  genDateArray() {
    const mmDn = this.current.endOf('month').date();

    this.mmText = this.current.startOf('month').format('MMM YYYY');
    this.dayStart = this.current.startOf('month').day();
    this.dayEnd = this.current.endOf('month').daysInMonth();
    this.dayEndPrevious = this.current
      .subtract(1, 'months')
      .endOf('month')
      .daysInMonth();

    const firstDayOfMonth = this.current
      .endOf('month')
      .clone()
      .startOf('month');
    const firstDayOfWeek = firstDayOfMonth.clone().startOf('week');
    const offset = firstDayOfMonth.diff(firstDayOfWeek, 'days');
    this.weeks = Array(Math.ceil((mmDn + offset) / 7));
    console.log(
      this.current.endOf('month').date(),
      this.current.endOf('month'),
      this.current,
      offset,
      this.current.startOf('month')
    );

    for (let i = 0; i < 43; i++) {
      const dn = i - this.dayStart;
      let dd = { d: dn, t: 'i' };
      if (dn < 1) {
        dd = { d: this.dayEndPrevious - this.dayStart + i, t: 'o' };
      } else if (dn > this.dayEnd) {
        dd = { d: i - this.dayEnd - this.dayStart, t: 'o' };
      }
      this.ddA[i] = dd;
    }
  }

  constructor(private titleService: Title) {
    //this.titleService.setTitle('Events');
    this.genDateArray();
  }
  mm = '00';
  mmPreNxt(mm: number) {
    this.mmUsed += mm;
    if (mm == 0) this.mmUsed = mm;
    this.current = moment().add(this.mmUsed, 'months');
    this.mm = moment().add(this.mmUsed, 'months').format('MM');
    this.genDateArray();
  }
  showEvent(event: any) {
    alert(event.title);
  }
}
