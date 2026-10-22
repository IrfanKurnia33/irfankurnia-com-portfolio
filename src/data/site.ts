export const site = {
  name: 'Irfan Kurnia',
  title: 'Irfan Kurnia — Product Designer',
  description:
    'Product designer and researcher based in Jakarta, designing for complex and regulated products. Explore selected work, experiments, and what I’m up to now.',
  email: 'hello@irfankurnia.com',
  availability: 'Open for full-time positions',
  updated: '2026-10-21',
  // Switch off when the placeholder content has been replaced before publishing.
  preview: true,
  links: {
    resume: 'https://drive.google.com/file/d/17gMCYyPDdTe7lJrLUO9WInuIbM_jtA83/view',
    linkedin: 'https://www.linkedin.com/in/irfankurnia33/',
    medium: 'https://irfankurnia33.medium.com',
    substack: 'https://irfankurnia33.substack.com',
    blog: 'https://my.irfankurnia.com/',
    instagram: 'https://www.instagram.com/IrfanKurnia33',
    tiktok: 'https://tiktok.com/@IrfanKurnia33',
    twitter: 'https://x.com/@IrfanKurnia33',
    threads: 'https://threads.com/@IrfanKurnia33',
  },
  testimonial: {
    quote:
      'I am proud to have worked with him—one of the best leaders in my team. Anyone who has the opportunity to work with him will find a dedicated, insightful, and highly capable professional.',
    name: 'Muhamad Hariyanto',
    role: 'Former Superior',
  },
};

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
