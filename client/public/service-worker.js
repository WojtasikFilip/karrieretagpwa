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
