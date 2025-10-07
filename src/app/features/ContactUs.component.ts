import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-ContactUs',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'ContactUs' | translate }}
        </h1>
        <div class="row">
          <div class="col-md-12">
            <p class="text-justify">
              For any queries, suggestions, feedback or to report any issues
              with the website, please feel free to contact us at the email
              address below.
            </p>
            <form>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Email</label
                >
                <div class="col-sm-10">
                  <a href="mailto:info@sathyasaiodisha.org"
                    >info&#64;sathyasaiodisha.org</a
                  >
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Name</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticEmail"
                    value="State IT coordinator, SSSSO-Odisha"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ContactUsComponent implements OnInit {
  ngOnInit(): void {}
}
