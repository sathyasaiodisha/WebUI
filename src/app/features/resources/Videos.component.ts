import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-Videos',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <div class="align-middle py-2 px-4 text-center">
          <h2>Journey of Odisha with Sri Sathya Sai</h2>
          <div class="video-container">
            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/videoseries?si=ASH7XEkMiGZseUfN&amp;list=PL4F97Peh1Vy60Xewo8rRfZi_5Nj67LQpF"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/jyl5mPaauYM?si=9cSaYVhC84OelpkX"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/IccgcivS3sw?si=F01H8UqbwR12BWkJ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/-0kOeyAJVls?si=tgh_3kPaBITb-F3b"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/hJ1eDYn47pw?si=H3ydKiXM9cRmCM-_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/hOGaCDuZC5c?si=inuEASyyjnIvuJpy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/5S-Lsl1omkM?si=b-jU85Do_LvOsPud"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/AgGwyoUdKn0?si=YXQkxDLpIZwAM-HC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/ZAup33R486A?si=kzdYH6zafIuihCq6"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/9ROxmrffCiQ?si=oK9xgMUd1BB7CRmv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>

            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/lELPmj6MKW0?si=3_R-0Ksij0mnL0Wp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
            <iframe
              width="1200"
              height="675"
              src="https://www.youtube-nocookie.com/embed/Dast7hK7Lj8?si=5NS3OyV3fQoYqxzM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
          </div>
          <div class="video-container">
            <br />
            <a href="https://www.youtube.com/@sathyasaiodisha" target="_blank"
              ><h3>Sri Sathya Sai Seva Organisations, Odisha</h3></a
            >
          </div>
        </div>
      </div>
    </div>
  `,
})
export class VideosComponent implements OnInit {
  ngOnInit(): void {}
}
