import { Injectable, signal } from '@angular/core';
import { LangCode, TRANSLATIONS } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLangSignal = signal<LangCode>('en');

  get currentLang(): LangCode {
    return this.currentLangSignal();
  }

  setLang(lang: LangCode) {
    this.currentLangSignal.set(lang);

    // عدّل خصائص الـ HTML للاتجاه
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.body.classList.toggle('rtl', lang === 'ar');
  }

  toggleLang() {
    this.setLang(this.currentLang === 'en' ? 'ar' : 'en');
  }

  // الدالة اللي هنستخدمها في الـ template
  t(key: string): string {
    const parts = key.split('.');
    let value: any = TRANSLATIONS[this.currentLang];

    for (const part of parts) {
      if (value && part in value) {
        value = value[part];
      } else {
        // fallback للإنجليزي لو مفيش ترجمة
        value = TRANSLATIONS.en;
        for (const p of parts) {
          value = value?.[p];
        }
        return typeof value === 'string' ? value : key;
      }
    }
    return typeof value === 'string' ? value : key;
  }
}
