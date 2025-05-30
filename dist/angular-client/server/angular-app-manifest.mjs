
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
    'index.csr.html': {size: 548, hash: '022a48c61eebb87e5f5cff688deee7737d56dfad61ffe35b0ac87a52d232780d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: 'cacd7dd72ac0f3600cefc0a941a3262bdfdaa23f6ef06fd74425da105088ccf4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 8630, hash: 'f859c3039cc5730247e1478f3dd3336593136e477e00989dc3347f078372da3d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 10767, hash: 'a6cb5e44c511ae1815379c3fbc36edeb107817bb210f796fc0d917164e6fedb1', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'songs/index.html': {size: 44141, hash: '95008d4fde53635e6bc025cbc55aef2f181df4b48a756ad9166bd64895a62359', text: () => import('./assets-chunks/songs_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
