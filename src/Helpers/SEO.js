export function SEO(data = {}) {
  data.title = data.title || 'Electric Cars, Solar & Clean Energy | Tesla';
  data.metaDescription = data.metaDescription || 'Website Tesla Clone with React Js';

  document.title = data.title;
  document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
}