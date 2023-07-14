import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://estefanhu.com',
      lastModified: new Date(),
    },
    {
      url: 'https://estefanhu.com/rsm',
      lastModified: new Date(),
    },
    {
      url: 'https://estefanhu.com/lgn',
      lastModified: new Date(),
    },
    // blg pages
    {
      url: 'https://estefanhu.com/blg',
      lastModified: new Date(),
    },
    {
      url: 'https://estefanhu.com/blg/data-visualization-and-the-monetization-of-language',
      lastModified: new Date(),
    },
    {
      url: 'https://estefanhu.com/blg/how-i-track-ideas',
      lastModified: new Date(),
    },
    // prjkt pages
    {
      url: 'https://estefanhu.com/prjkt',
      lastModified: new Date(),
    },
    {
      url: 'https://estefanhu.com/prjkt/logs',
      lastModified: new Date(),
    },
  ];
}
