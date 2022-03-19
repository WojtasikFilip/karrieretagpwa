importScripts("/precache-manifest.33738254b7a10848cce63fdb148a880e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* global workbox */
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  self.skipWaiting();
  workbox.routing.registerRoute(
    '/firmen',
    new workbox.strategies.NetworkFirst({
      cacheName: 'pwa-firmen-cache',
    }),
  );
  workbox.routing.registerRoute(
    '/vortraege',
    new workbox.strategies.NetworkFirst({
      cacheName: 'pwa-vortraege-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}

