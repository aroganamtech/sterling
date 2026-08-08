import { useEffect } from 'react';

/**
 * Lightweight document-head manager — no extra dependency.
 * Sets title, description, keywords, canonical, Open Graph tags and an optional
 * JSON-LD block, and restores the previous title on unmount.
 */
function setMeta(attr, key, value) {
  if (!value) return null;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  let created = false;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
    created = true;
  }
  const prev = el.getAttribute('content');
  el.setAttribute('content', value);
  return () => {
    if (created) el.remove();
    else if (prev !== null) el.setAttribute('content', prev);
  };
}

export default function Seo({ title, description, keywords, image, type = 'website', jsonLd }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    const cleanups = [
      setMeta('name', 'description', description),
      setMeta('name', 'keywords', keywords),
      setMeta('property', 'og:title', title),
      setMeta('property', 'og:description', description),
      setMeta('property', 'og:type', type),
      setMeta('property', 'og:image', image),
      setMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary'),
    ].filter(Boolean);

    // canonical
    const url = window.location.origin + window.location.pathname;
    let link = document.head.querySelector('link[rel="canonical"]');
    let createdLink = false;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
      createdLink = true;
    }
    const prevHref = link.getAttribute('href');
    link.setAttribute('href', url);

    // structured data
    let script = null;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      cleanups.forEach((fn) => fn && fn());
      if (createdLink) link.remove();
      else if (prevHref) link.setAttribute('href', prevHref);
      if (script) script.remove();
    };
  }, [title, description, keywords, image, type, jsonLd]);

  return null;
}
