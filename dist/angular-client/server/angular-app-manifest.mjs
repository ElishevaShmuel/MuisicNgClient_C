
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/users"
  },
  {
    "renderMode": 2,
    "route": "/songs"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 548, hash: 'eea9a9885c119170b6f03ff0e5cc7accd23b89ace3cfa343a449e12541f4de45', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: '5bddd90a5772297520978ed1a5c17c0995197f0bea3446b9a238726890d46b8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'users/index.html': {size: 10767, hash: '8111005942cce16b825527465dd55527a6a5851a2789925a2116635b38223623', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 8630, hash: 'ab230241eae690a5caf975825595beef32a6736ec4dce0fbf2cefa0b4f9d5dca', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'songs/index.html': {size: 44141, hash: '8129ff6bb18e9c5500b95c6949a214e07f977d1fbed3de676eb32455013b0d1d', text: () => import('./assets-chunks/songs_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
