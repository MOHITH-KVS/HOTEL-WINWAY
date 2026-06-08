import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hotelwinway.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/rooms`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/rooms/standard-room`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/rooms/deluxe-room`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/rooms/junior-suite`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/rooms/presidential-suite`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/dining`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/dining/tiffin`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/dining/the-deck`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/dining/alfresco`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/dining/banquets-events`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/experiences`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/local-attractions`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
  ];
}
