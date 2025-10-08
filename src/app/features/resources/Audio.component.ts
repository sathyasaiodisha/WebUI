import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-Audio',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Audio' | translate }}
        </h1>

        <div class="align-middle py-2 px-4 text-center">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    Amritadhara Audio Satsang Series-3 Janmabhoomi Re Janmaotsav
                    by Prof Hari Krishna Dash, Former SP
                  </h5>
                  <p class="card-text">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/3mvWJwPokY8?si=K23lCqqgiBa7KyJz"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    Satsang- Janmabhoomi re Janmotsav by Dr Gopi Krishna
                    Pidatala, National Incharge
                  </h5>
                  <p class="card-text">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/pFojp1FKsoo?si=iZgEHSJcmHIbbmkd"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-12"><br /></div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    Satsang- Janmabhoomi re Janmotsav by Sri Narayan Prasad Sar,
                    East Zone President
                  </h5>
                  <p class="card-text">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/SjUWS-M0UUU?si=PznK-iUj7SJHlbCh"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                    SRI SATHYA SAI KATHAMRUTAM- SATSANG BY MURALI JAJU AT SAI
                    JANANI BHUBANESWAR ON 09.09.2025
                  </h5>
                  <p class="card-text">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/hj-SnXOxFWc?si=ruGSReIPK4W-PwaU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AudioComponent implements OnInit {
  ngOnInit(): void {}
}
