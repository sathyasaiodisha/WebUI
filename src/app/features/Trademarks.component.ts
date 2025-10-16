import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-Trademarks',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Trademarks' | translate }}
        </h1>

        <p class="text-justify">
          The Government of India has amended the schedule to the Emblems and
          Names (Prevention of Improper Use) Act 1950 to include the following
          as protected names and emblems under the said Act:
        </p>
        <ol>
          <li>Sri Sathya Sai Central Trust</li>
          <li>The following emblems</li>
          <div class="row">
            <img class="col-auto" src="assets/images/trademark/img1.gif" />
            <img
              class="col-auto"
              src="assets/images/trademark/sarva_dharma02.gif"
            />
          </div>
          <li>Sri Sathya Sai</li>
        </ol>
        <p>
          In view of the above, no person shall use or continue to use for the
          purpose of any trade, business, calling or profession or any patent,
          trademark or design the aforementioned protected names / emblems or
          any colourable imitation thereof without the previous written
          permission of the Central Government. Any person who contravenes the
          above is liable to be proceeded against and punished under the
          provisions of the law.
        </p>
        <p>
          Any person who is using the aforementioned names and emblem in
          contravention of the provisions of the Act is hereby notified and
          required to cease and desist from using the said names/emblems with
          effect from: 22nd July 2004.
        </p>
        <p>
          Source:
          <a
            target="_blank"
            href="https://www.srisathyasai.org/pages/index.html"
            >www.srisathyasai.org</a
          >
        </p>
      </div>
    </div>
  `,
})
export class TrademarksComponent implements OnInit {
  ngOnInit(): void {}
}
