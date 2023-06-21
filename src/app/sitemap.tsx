import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://estefan.me',
      lastModified: new Date(),
    },
    {
      url: 'https://estefan.me/blg',
      lastModified: new Date(),
    },
    {
      url: 'https://estefan.me/prjkt',
      lastModified: new Date(),
    },
    {
      url: 'https://estefan.me/blg/p/a-meta-modern-maker',
      lastModified: new Date(),
    },
    {
      url: 'https://estefan.me/blg/p/how-i-track-ideas',
      lastModified: new Date(),
    },
  ];
}
