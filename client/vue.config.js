const path = require('path');
module.exports = {
  productionSourceMap: false,
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: { proxy: 'http://127.0.0.1:3000' },
  transpileDependencies: ['vuetify'],
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
    manifestOptions: {
      name: 'Karrieretag PWA',
      short_name: 'Karrieretag PWA',
      theme_color: '#8d1717',
      background_color: '#ffffff',
      icons: [
        { src: './img/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        { src: './img/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
    },
  },
};
