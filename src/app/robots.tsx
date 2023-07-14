import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dsh', '/nbx', '/prfl', '/wrt', '/wrt/*'],
    },
    sitemap: 'https://estefanhu.com/sitemap.xml',
  };
}
