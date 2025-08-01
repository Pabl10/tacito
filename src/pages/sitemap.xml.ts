import type { APIRoute } from 'astro';
import projects from '../data/projects.json';

export const GET: APIRoute = () => {
  const baseUrl = 'https://pabl10.github.io/tacito'; // GitHub Pages URL
  
  const pages = [
    '',
    '/nosotros',
    '/proyectos', 
    '/contacto'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${projects.map(project => `
  <url>
    <loc>${baseUrl}/project/${project.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}; 