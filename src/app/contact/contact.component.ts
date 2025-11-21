import { Component, ChangeDetectorRef } from '@angular/core';
import { NgIf } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  isSending = false;
  success?: boolean;

  // بيانات EmailJS
  private readonly serviceId = 'service_3piira4';
  private readonly templateId = 'template_lg7d3wt';
  private readonly publicKey = 'DO04oP3U2hq2jIKRb';

  // نخلي LanguageService public عشان نستخدمه في الـ template باسم lang
  constructor(
    private cdr: ChangeDetectorRef,
    public lang: LanguageService
  ) {}

  public async sendEmail(e: Event) {
    e.preventDefault();

    this.isSending = true;
    this.success = undefined;
    this.cdr.detectChanges();

    try {
      const result = await emailjs.sendForm(
        this.serviceId,
        this.templateId,
        e.target as HTMLFormElement,
        { publicKey: this.publicKey }
      );

      console.log('SUCCESS!', result.status, result.text);
      this.success = true;
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('FAILED...', (error as EmailJSResponseStatus).text);
      this.success = false;
    } finally {
      this.isSending = false;
      this.cdr.detectChanges();
    }
  }
}
