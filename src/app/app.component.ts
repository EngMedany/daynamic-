// import {
//   Component,
//   signal,
//   AfterViewInit,
//   inject,
// } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { PLATFORM_ID } from '@angular/core';
// import { ContactComponent } from './contact/contact.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [ContactComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent implements AfterViewInit {
//   protected readonly title = signal('call-center-landing');

//   // نستخدمه عشان نعرف إحنا على الـ browser ولا على الـ server
//   private platformId = inject(PLATFORM_ID);

//   ngAfterViewInit(): void {
//     // لو الكود شغال على السيرفر (SSR) ما نشغّلش الأنيميشن ولا الـ typing
//     if (!isPlatformBrowser(this.platformId)) {
//       return;
//     }

//     // ===== IntersectionObserver للأنيميشن (animate-up) =====
//     const animatedElements = document.querySelectorAll<HTMLElement>('.animate-up');

//     const observer = new IntersectionObserver(
//       (entries, obs) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('in-view');
//             obs.unobserve(entry.target); // نوقف المراقبة بعد أول مرة
//           }
//         });
//       },
//       {
//         threshold: 0.2, // يبدأ لما ~20% من العنصر يبقى ظاهر
//       }
//     );

//     animatedElements.forEach((el) => observer.observe(el));

//     // ===== Typing effect في الـ Hero =====
//     const typedSpan = document.getElementById('typed-text');
//     if (typedSpan) {
//       const phrases = [
//         '24/7 Customer Support',
//         'Smart Cloud Call Routing',
//         'Omni‑Channel Experience',
//       ];

//       let phraseIndex = 0;
//       let charIndex = 0;
//       let isDeleting = false;

//       const typeLoop = () => {
//         const current = phrases[phraseIndex];

//         if (!isDeleting) {
//           // كتابة
//           typedSpan.textContent = current.substring(0, charIndex + 1);
//           charIndex++;

//           if (charIndex === current.length) {
//             // خلصت الكلمة
//             isDeleting = true;
//             setTimeout(typeLoop, 1200); // استنى قبل ما تمسح
//             return;
//           }
//         } else {
//           // مسح
//           typedSpan.textContent = current.substring(0, charIndex - 1);
//           charIndex--;

//           if (charIndex === 0) {
//             isDeleting = false;
//             phraseIndex = (phraseIndex + 1) % phrases.length;
//           }
//         }

//         const speed = isDeleting ? 60 : 110;
//         setTimeout(typeLoop, speed);
//       };

//       setTimeout(typeLoop, 500); // تأخير بسيط قبل أول كلمة
//     }
//   }
// }
import {
  Component,
  signal,
  AfterViewInit,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  protected readonly title = signal('call-center-landing');

  private platformId = inject(PLATFORM_ID);
  lang = inject(LanguageService); // نستخدمه في HTML

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // لغة البداية
    this.lang.setLang('en');

    // ===== IntersectionObserver للأنيميشن =====
    const animatedElements = document.querySelectorAll<HTMLElement>('.animate-up');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));

    // ===== Typing effect في الـ Hero (تقدر تسيبه إنجليزي) =====
    const typedSpan = document.getElementById('typed-text');
    if (typedSpan) {
      const phrases = [
        '24/7 Customer Support',
        'Smart Cloud Call Routing',
        'Omni‑Channel Experience',
      ];

      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const typeLoop = () => {
        const current = phrases[phraseIndex];

        if (!isDeleting) {
          typedSpan.textContent = current.substring(0, charIndex + 1);
          charIndex++;

          if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1200);
            return;
          }
        } else {
          typedSpan.textContent = current.substring(0, charIndex - 1);
          charIndex--;

          if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
          }
        }

        const speed = isDeleting ? 60 : 110;
        setTimeout(typeLoop, speed);
      };

      setTimeout(typeLoop, 500);
    }
  }
}
