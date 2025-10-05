import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SlideShowImageComponent } from '../shared/components/slideshow_image/slideshowimage.component';

@Component({
  selector: 'app-sssPrematharu',
  imports: [SharedModule, SlideShowImageComponent],
  template: `
    <div class="content container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai Prematharu' | translate }}
        </h1>
        <div class="spiritual_wrapper_top">
          <div class="carousel">
            <!--Image carousel (Each image is linked to a page)-->
            <app-slideshowimage [banner]="banner"></app-slideshowimage>
          </div>
        </div>

        <p>
          This is an Initiative to adorn mother earth with 10 million trees by
          the Birth Centenary of Bhagawan Sri Sathya Sai Baba by November 2026.
          This endeavor is not just about reaching a numerical goal but an
          expression of love, a reconnection with nature, and a collective
          aspiration to contribute to a greener, more sustainable future.
          Natural calamities like earthquakes, volcanic eruptions, droughts and
          floods are the result of disturbances in the balance of Nature caused
          by reckless exploitation of natural resources. Mankind today appears
          like a foolish man who is wielding the axe at the branch of a tree on
          which he is sitting (Sri Sathya Sai Divine Discourse, 11 February
          1997). The only solution to save the planet is by undertaking a
          plantation drive. Tharu means a tree. Prematharu envisions planting
          lakhs of saplings suffused with love (for nature) across.At the
          central level, the project envisages planting ten million (one crore)
          saplings by the Sri Sathya Sai Organizations, India as a Birth
          Centenary project. The project is not just to express our Love for the
          nature but more importantly, to reverse, in some measure, the
          ecological imbalance that is being perpetrated by mankind on Mother
          Earth.
        </p>
        <h4>
          From July 2023 to September 2025, the SSSSO has been able to plant
          3,93,208 saplings in the 35 Sai Districts.
        </h4>
        <p>
          <b>The Program:</b> The SSSSO, Odisha has seized this unique
          opportunity to implement the Prematharu project to help the people in
          the region to harness the benefits of a cleaner environment while at
          the same time inculcating in the volunteers and participants the need
          for greater environmental care. Under this initiative, the SSSSO,
          Odisha on its part has set upon itself an ambitious target of planting
          1 million (10 lakhs) saplings in the state of Odisha by the year 2026,
          by the time the Birth Centenary Celebrations of Bhagawan Baba
          culminates. imbalance that is being perpetrated by mankind on Mother
          Earth.
        </p>

        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">{{ 'Year' | translate }}</th>
              <th scope="col">{{ 'Plantation done' | translate }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023</td>
              <td>85157</td>
            </tr>
            <tr>
              <td>2024</td>
              <td>176357</td>
            </tr>
            <tr>
              <td>2025</td>
              <td>131694</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class SssPrematharuComponent implements OnInit {
  ngOnInit(): void {}
  banner = [
    { image: 'assets/images/premaTharu/b1.jpg', caption: '' },
    { image: 'assets/images/premaTharu/b2.jpg', caption: '' }
  ];
}
