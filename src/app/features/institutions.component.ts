import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-institutions',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <p>
        The Sri Sathya Sai Mission of education Baba presents a distinctive model of schooling and higher education: one that sees the formation of character, service-oriented living, spiritual awareness and academic competence as inter-linked and indispensable. <b>By embedding value-education (Educare) in the heart of the system, the mission offers an alternative to purely utilitarian approaches to education.</b>
        </p>
        <p>
          The Sri Sathya Sai Educational Mission has been a distinctive model of conventional education intertwined with human values. Aimed at nourishing the soul by transforming character and revealing the divine values latent within, this system of education is a truly holistic in nature.
        </p>
        <p>
          The state of Odisha is blessed with <b>18 Sri Satya Sai Schools affiliated to the Central Board of Secondary Education (CBSE) and Board of Secondary Education Odisha</b> selectively. Established with the inspiration of Sri Sathya Sai infusing the Sai philosophy of Education, these schools are doyens of imparting sound holistic education and true temples of learning. Each School treasures a motivated and dedicated group of management and teachers whose only objective is to lay a very strong and value based educational foundation for the overall development of the students.
        </p>     
      </div>
    </div>
  `,
})
export class InstitutionsComponent implements OnInit {
  // data: {
  //   designation: string;
  //   name: string;
  //   phoneNo: string;
  //   whatsAppNo: string;
  //   emailid: string;
  // }[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    // this.apiService.getStateCoordinators().subscribe((data) => {
    //   this.data = data;
    // });
  }
}
