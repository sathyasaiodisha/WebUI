import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { Router } from '@angular/router';

// const hasPlayed = sessionStorage.getItem('IntroVideoPlayed');
// const targetUrl = hasPlayed ? '/home' : '/intro';

// sessionStorage.setItem('initialTarget', targetUrl);

// bootstrapApplication(AppComponent, appConfig).then(appRef => {
//   const router = appRef.injector.get(Router);
  

//   // Disable automatic initial navigation
//   router.initialNavigation(); // initialize router manually

//   // Navigate to the correct first route before showing the app

  
//   const route = sessionStorage.getItem('initialTarget')!;
//     router.navigateByUrl(route, { replaceUrl: true }).then(() => {
//       const splash = document.getElementById('pre-bootstrap-screen');
//       if (splash) splash.remove(); // remove black overlay
//     });

// })
// .catch(err => console.error(err));

if (!sessionStorage.getItem('introVideoPlayed'))
{
  const introVideo = document.createElement('video');
  introVideo.src = 'assets/videos/WhatsApp Video 2025-10-31 at 23.30.40_09c43090.mp4';
  introVideo.autoplay = true;
  introVideo.muted = true;
  introVideo.playsInline = true;
  introVideo.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:9999;background:black;';
  document.body.appendChild(introVideo);

  introVideo.onended = () => {
    document.body.removeChild(introVideo);
    sessionStorage.setItem('introVideoPlayed', 'true');
    bootstrapApplication(AppComponent, appConfig)
      .catch(err => console.error(err));
  };
}
else
{
  bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
}