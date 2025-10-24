import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-stateCoordinators',
  imports: [SharedModule],
  template: `
    <div class="content_topgape container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'Sri Sathya Sai Seva Organisations, Odisha' | translate }}
        </h1>
        <div class="row">
          <div class="col-md-6">
            <img
              src="assets/images/odisha-sai-map-Jul2025.png"
              style="width:100%;"
            />
          </div>
          <div class="col-md-6">
            <p>
              The Sri Sathya Sai Seva Organisations, founded by Bhagawan Sri
              Sathya Sai Baba in the year 1965, is a service organisation with a
              spiritual core and base to benefit all mankind irrespective of
              religion, caste, creed or sect. The Organisation serves as a
              platform for its members to undertake service and other activities
              motivated by an urge for one's own transformation with the aim of
              realising one's inherent divinity.
            </p>
            <p>
              Without any distinction of religion, nationality, race,
              socio-economic status, either for those who work in the
              Organisation or for those who are served by it, the Organisation
              transcends all barriers leading humanity towards the ideal of
              'Fatherhood of God and Brotherhood of Man'.
            </p>
            <p>
              The concept of fees or membership subscription is alien to the Sri
              Sathya Sai Seva Organisations, for there cannot be any fee or
              subscription for one's journey towards his own self.
            </p>
          </div>
        </div>
        <p>
          The organisation functions through its primary units called as
          Samithis and Bhajan Mandalis of which individuals - from different
          strata of society, different ethnic groups pursuing different
          religions and faiths -are members bound by the dictum of “Love all,
          Serve All” and pursue their own sadhana towards self-transformation
          following the path of selfless service to humanity.
        </p>
        <p>
          At no point is an individual asked to follow a certain religion or
          rituals. On the contrary each is inspired to follow his own faith so
          as to ensure that a Hindu becomes a better Hindu, a Muslim becomes a
          better Muslim, a Christian becomes a better Christian and so on. In
          fact, this spiritual basis inspires everyone to pursue his own
          religion better by putting into practice Love and Selflessness. That
          is why the Organisation features in its emblem the symbols of the
          major religions of the world.
        </p>
        <p>
          Though there are many path-ways to God realization, yet the easiest
          among them is the path of service for it is not confined to any
          boundaries or borders and completely secular in nature thus
          propagating pure love and compassion. Service essentially is a
          spontaneous feeling for serving and helping the needy in any form. In
          other words, service is actually the true character of the human body.
          The service is rendered in communities across the globe with an
          underlying concept of “the person who serves is the person served”.
          Sri Sathya Sai Baba says, ‘Love All Serve All’, ‘Help Ever Hurt Never’
          and ‘The Hands that serve are holier than the lips that pray’.
          Encompassing this Divine concept, the service wing of the Sri Sathya
          Sai Seva Organisation, coordinates internally to help compliment the
          activities of the spiritual and educational wing as well. The
          activities conducted include – Sri Sathya Sai Village Integrated
          Programme, Sri Sathya Sai Holistic Health Care, Sri Sathya Sai
          Integrated Animal Care, Seva during Disasters / Natural calamities,
          National Narayan Seva etc. All these services are dedicated to His
          Lotus Feet to reinforce the beliefs of His followers on the master.
        </p>
        <p>
          In the years gone by, the Organisation never looked back and pursued
          the mission of Bhagawan with dedication and exemplary commitment. This
          could be only possible with Swami’s infinite Grace and blessings to
          the people of Orissa. With His holy blessing, Sri Sathya Sai Seva
          Organisation has presence in impervious wild forest of Dandaka Aranya,
          rain starved barren land of Kalahandi to coast line and Maoist
          affected tribal areas. The SAI volunteers have overcome all odds and
          be there when Swami wants His devotees to be there.
        </p>
      </div>
    </div>
  `,
})
export class SevaOrgOdishaComponent implements OnInit {
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
