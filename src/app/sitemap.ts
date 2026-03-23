import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://foundscape.ca";
  const now = new Date();

  return [
    // Core pages
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/foundation-repair`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/basement-waterproofing`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/foundation-crack-repair`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/sump-pump-installation`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/wet-basement-calgary`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // High-intent pages
    { url: `${baseUrl}/leaking-basement-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/basement-flooding-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/foundation-repair-cost-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/emergency-foundation-repair-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/foundation-inspection-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Neighbourhood pages
    { url: `${baseUrl}/calgary-nw-foundation-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/calgary-sw-foundation-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/calgary-se-foundation-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/calgary-ne-foundation-repair`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Blog
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog/signs-you-need-foundation-repair-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/how-long-foundation-repair-take-calgary`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Company pages
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
