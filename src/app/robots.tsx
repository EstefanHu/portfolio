import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dsh', '/nbx', '/prfl', '/wrt'],
    },
    sitemap: 'https://estefanhu.com/sitemap.xml',
  };
}
