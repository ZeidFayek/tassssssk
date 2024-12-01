
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/tassssssk"
  }
],
  assets: new Map([
['index.csr.html', {size: 5704, hash: '829940195626c0e0cf792e312b1188dc21c60a27a5969661dac034a37ad1c9fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1202, hash: 'b0bc75489d908a12f1917e94db5e6e6b20fe30346af8a835bbfc924296f4d8b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 62609, hash: 'ead68f63d93ec5d10d35a7605aad1ef1f4bcd2f1ef6a02af122860d6a141a6f4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['main-IIO3AIVH.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main-IIO3AIVH_css.mjs').then(m => m.default)}], 
['main.server.css', {size: 26054, hash: '3KMEVki9tus', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)}], 
['styles-B3SA6HC3.css', {size: 265112, hash: 'Qc6lqRfUEFg', text: () => import('./assets-chunks/styles-B3SA6HC3_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
