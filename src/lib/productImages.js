/**
 * Resolves the generated product illustrations at build time.
 *
 * Files are named  <slug>-<view>.svg  in src/assets/products/.
 * Vite's import.meta.glob with `eager: true` + `query: '?url'` gives us a map of
 * module paths to final hashed URLs, so images are versioned and cache-safe.
 *
 * To swap in real photography: drop <slug>-<view>.(jpg|png|webp) into the same
 * folder and widen the glob pattern below — nothing else needs to change.
 */
const modules = import.meta.glob('../assets/products/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const VIEW_LABELS = {
  elevation: 'Elevation',
  section: 'Installed section',
  detail: 'Detail view',
};

const VIEW_ORDER = ['elevation', 'section', 'detail'];

const index = {};

Object.entries(modules).forEach(([path, url]) => {
  const file = path.split('/').pop() || '';
  const base = file.replace(/\.(svg|png|jpe?g|webp)$/i, '');
  const match = base.match(/^(.*)-(elevation|section|detail)$/);
  if (!match) return;
  const [, slug, view] = match;
  if (!index[slug]) index[slug] = {};
  index[slug][view] = url;
});

/** Ordered gallery for a product: [{ src, view, label }] */
export function galleryFor(slug, name = '') {
  const views = index[slug] || {};
  return VIEW_ORDER.filter((v) => views[v]).map((v) => ({
    view: v,
    src: views[v],
    label: VIEW_LABELS[v],
    alt: `${name} — ${VIEW_LABELS[v].toLowerCase()} technical illustration`,
  }));
}

/** Single representative image, used on cards and listings. */
export function coverFor(slug) {
  const views = index[slug] || {};
  return views.elevation || views.section || views.detail || null;
}

export default index;
