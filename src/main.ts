import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';

import { Router } from '@angular/router';

register();
bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
// if (!sessionStorage.getItem('introVideoPlayed'))
// {
//   const prelaunchVideo = document.createElement('video');
//   prelaunchVideo.src = 'assets/videos/PresiteloadVideo.mp4';
//   prelaunchVideo.autoplay = false;
//   prelaunchVideo.muted = true;
//   prelaunchVideo.playsInline = true;
//   prelaunchVideo.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:9999;background:black;';
//   document.body.appendChild(prelaunchVideo);

//   setTimeout(() => {
//     prelaunchVideo.play();
//   }, 2000);

//   prelaunchVideo.onended = () => {
//     document.body.removeChild(prelaunchVideo);
//     sessionStorage.setItem('introVideoPlayed', 'true');
//     bootstrapApplication(AppComponent, appConfig)
//       .catch(err => console.error(err));
//   };
// }
// else
// {
//   bootstrapApplication(AppComponent, appConfig)
//     .catch(err => console.error(err));
// }