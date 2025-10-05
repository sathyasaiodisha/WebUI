import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss',
})
export class ReportComponent {
  reports = [
    {
      category: 'specialReport',
      link: 'A_Report_on_the_Trust_Initiatives_for_the_fiscal_2024-25.pdf',
      title: 'A Report on the Trust Initiatives for the fiscal 2024-25',
    },
    {
      category: 'specialReport',
      link: 'annual_report_2024-25_FINAL.pdf',
      title: 'Annual report 2024-25 FINAL',
    },
    {
      category: 'specialReport',
      link: 'PARTI_YATRA.pdf',
      title: 'PARTI YATRA',
    },
    {
      category: 'specialReport',
      link: 'Premdhara_&_Raja_celebration_2025.pdf',
      title: 'Premdhara & Raja celebration 2025',
    },
    {
      category: 'specialReport',
      link: 'Ratha_yatra_2025_1.pdf',
      title: 'Ratha yatra 2025 1',
    },
    {
      category: 'specialReport',
      link: 'Observation_of_Prematharu_Day_on_10th_July_2025-2.pdf',
      title: 'Observation of Prematharu Day on 10th July 2025-2',
    },
  ];
  Math = Math;
  perRo = 3;
  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
