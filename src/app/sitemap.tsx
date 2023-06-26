import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://estefan.me',
      lastModified: new Date(),
    },
    // blg pages
    {
      url: 'https://estefan.me/blg',
      lastModified: new Date(),
    },
    {
      url: 'https://estefan.me/blg/a-bit-about-me',
      lastModified: new Date(),
    },
    {
      url: 'https://estefan.me/blg/how-i-track-ideas',
      lastModified: new Date(),
    },
    {
      url: 'https://estefan.me/blg/stay-mean-stay-lean',
      lastModified: new Date(),
    },
    {
      url: 'https://estefan.me/blg/what-the-crud',
      lastModified: new Date(),
    },
    // prjkt pages
    {
      url: 'https://estefan.me/prjkt',
      lastModified: new Date(),
    },
    {
      url: 'https://estefan.me/prjkt/logs',
      lastModified: new Date(),
    },
  ];
}
