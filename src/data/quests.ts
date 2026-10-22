export interface Quest {
  id: string;
  title: string;
  description: string;
  aspect: 'tall' | 'square' | 'wide';
  media?: string;
  type?: 'image' | 'video';
  poster?: string;
}

// Add media paths from public/ when your experiments are ready.
export const quests: Quest[] = [
  {
    id: '01',
    title: 'Quest placeholder 01',
    aspect: 'tall',
    description:
      'A space for an experiment in progress. Add the finished image or animation and a few words about what you explored.',
  },
  {
    id: '02',
    title: 'Quest placeholder 02',
    aspect: 'square',
    description:
      'Your next exploration goes here. Replace this placeholder with a short description and your own media.',
  },
  {
    id: '03',
    title: 'Quest placeholder 03',
    aspect: 'wide',
    description: 'A space for a small idea, prototype, or animation. This is placeholder content.',
  },
  {
    id: '04',
    title: 'Quest placeholder 04',
    aspect: 'square',
    description:
      'Document what you tried, what surprised you, and what you would explore next. This is placeholder content.',
  },
  {
    id: '05',
    title: 'Quest placeholder 05',
    aspect: 'tall',
    description:
      'Add an image or a muted looping video of your experiment. This is placeholder content.',
  },
  {
    id: '06',
    title: 'Quest placeholder 06',
    aspect: 'wide',
    description:
      'An open frame for a future exploration. Replace this text when your work is ready.',
  },
];
