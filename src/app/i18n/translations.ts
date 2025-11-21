export type LangCode = 'en' | 'ar';

export const TRANSLATIONS: Record<LangCode, any> = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      departments: 'Departments',
      contact: 'Contact',
      switch: 'عربي',
    },
    hero: {
      title: 'Daynamic Call Center for Modern Teams',
      subtitle:
        'Powerful cloud contact center solution for sales, support, and modern remote teams.',
      cta: 'View Services',
    },
    about: {
      title: 'About Our Call Center',
      p1: 'We provide scalable cloud contact center solutions for startups and enterprises.',
      p2: 'Our platform helps your team answer more calls, close more deals, and deliver amazing customer experiences.',
    },
    services: {
      title: 'Services',
      subtitle:
        'Everything you need to run a modern, high‑performance call center.',
      inbound: {
        title: 'Inbound Support',
        text: 'Handle all your customer calls with smart routing, IVR, and real‑time monitoring.',
      },
      outbound: {
        title: 'Outbound Sales',
        text: 'Boost your sales with auto dialers, call campaigns, and live reporting.',
      },
      technical: {
        title: 'Technical Assistance',
        text: 'Give your customers reliable technical help with expert support teams.',
      },
      omni: {
        title: 'Omni‑Channel Chat',
        text: 'Manage calls, WhatsApp, SMS, and social messages from one place.',
      },
      analytics: {
        title: 'Analytics & Reports',
        text: 'Track KPIs, agent performance, and call quality with clear dashboards.',
      },
      cloud: {
        title: 'Cloud Contact Center',
        text: 'Secure, scalable, and always available in the cloud.',
      },
    },
    clients: {
      title: 'Trusted By',
      subtitle: 'Companies around the world trust Daynamic Call for their customer communication.',
    },
    departments: {
      title: 'Departments',
      subtitle:
        'Organize your contact center teams for maximum efficiency.',
      support: {
        title: 'Customer Support',
        text: 'Dedicated agents to handle customer inquiries and complaints.',
      },
      sales: {
        title: 'Sales',
        text: 'Outbound calling teams focused on closing more deals.',
      },
      quality: {
        title: 'Quality & Training',
        text: 'Monitoring calls and coaching agents to improve performance.',
      },
      it: {
        title: 'IT & Infrastructure',
        text: 'Keeping your cloud contact center fast, secure, and reliable.',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle:
        'Tell us about your call center needs and we will get back to you shortly.',
      addressLabel: 'Address',
      addressValue: '123 Cloud Street, New City, Country',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formButton: 'Submit',
      success: 'Message sent successfully.',
      error: 'Something went wrong, please try again.',
    },
    footer: {
      text: '© 2025 CALLDESK Cloud Call Center. All rights reserved.',
    },
  },

  ar: {
    navbar: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      departments: 'الأقسام',
      contact: 'تواصل معنا',
      switch: 'English',
    },
    hero: {
      title: 'مركز اتصال سحابي للفرق الحديثة',
      subtitle:
        'حل متكامل لإدارة مكالمات المبيعات والدعم عن بُعد بكفاءة عالية.',
      cta: 'عرض الخدمات',
    },
    about: {
      title: 'من نحن',
      p1: 'نقدّم حلول مراكز اتصال سحابية قابلة للتوسع للشركات الناشئة والمؤسسات.',
      p2: 'منصّتنا تساعد فريقك على استقبال المزيد من المكالمات، وإغلاق المزيد من الصفقات، وتقديم تجربة عملاء مميزة.',
    },
    services: {
      title: 'الخدمات',
      subtitle:
        'كل ما تحتاجه لتشغيل مركز اتصال حديث عالي الأداء.',
      inbound: {
        title: 'خدمة العملاء الواردة',
        text: 'إدارة مكالمات العملاء مع توجيه ذكي، و IVR، ومراقبة لحظية.',
      },
      outbound: {
        title: 'المكالمات الصادرة',
        text: 'زيادة المبيعات من خلال مناديـل آليـة وحملات اتصال وتقارير مباشرة.',
      },
      technical: {
        title: 'الدعم الفني',
        text: 'تقديم مساعدة فنية موثوقة لعملائك بواسطة فرق متخصصة.',
      },
      omni: {
        title: 'تواصل متعدد القنوات',
        text: 'إدارة المكالمات وواتساب و SMS ووسائل التواصل من مكان واحد.',
      },
      analytics: {
        title: 'التحليلات والتقارير',
        text: 'متابعة مؤشرات الأداء وجودة المكالمات عبر لوحات تحكم واضحة.',
      },
      cloud: {
        title: 'مركز اتصال سحابي',
        text: 'آمن، قابل للتوسع، ومتوفّر دائمًا على السحابة.',
      },
    },
    clients: {
      title: 'يثق بنا',
      subtitle: 'شركات حول العالم تعتمد على Daynamic Call في تواصلها مع العملاء.',
    },
    departments: {
      title: 'الأقسام',
      subtitle:
        'نظّم فرق مركز الاتصال لديك لتحصل على أعلى كفاءة.',
      support: {
        title: 'خدمة العملاء',
        text: 'وكلاء مخصّصون للتعامل مع استفسارات وشكاوى العملاء.',
      },
      sales: {
        title: 'المبيعات',
        text: 'فرق مكالمات صادرة تركز على إغلاق المزيد من الصفقات.',
      },
      quality: {
        title: 'الجودة والتدريب',
        text: 'مراقبة المكالمات وتدريب الوكلاء لتحسين الأداء.',
      },
      it: {
        title: 'تكنولوجيا المعلومات',
        text: 'الحفاظ على مركز الاتصال السحابي سريع وآمن ومستقر.',
      },
    },
    contact: {
      title: 'تواصل معنا',
      subtitle:
        'أخبرنا عن احتياجاتك في مركز الاتصال وسنعاود التواصل معك في أقرب وقت.',
      addressLabel: 'العنوان',
      addressValue: '١٢٣ شارع كلاود، مدينة جديدة، دولة',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      formName: 'الاسم',
      formEmail: 'البريد الإلكتروني',
      formMessage: 'الرسالة',
      formButton: 'إرسال',
      success: 'تم إرسال الرسالة بنجاح.',
      error: 'حدث خطأ، من فضلك حاول مرة أخرى.',
    },
    footer: {
      text: '© ٢٠٢٥ CALLDESK مركز اتصال سحابي. جميع الحقوق محفوظة.',
    },
  },
};
