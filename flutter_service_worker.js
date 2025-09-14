'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b1007a4f9078b4ffb591d2d5a98c4259",
"assets/AssetManifest.bin.json": "6bb31b3e190486bd2c9a1e79e28f0397",
"assets/AssetManifest.json": "5637127d4e5c72ca348b8a7f02643cad",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/audios/toast-fade-in.mp3": "3f6df726a5e85560dfecf4bb592d2fda",
"assets/assets/audios/toast-fade-out.mp3": "d50a44c58a93f53e2e0b51178cf01bde",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/adaptive_foreground_icon.png": "7076e2d849e7fc8103d6b7ee80a34eae",
"assets/assets/images/app_launcher_icon.png": "34bbba4620dacb382454e06acd4386e4",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Orange_and_Blue_Minimalist_Start_Your_Business_Carousel_Instagram_Post_(1).png": "1ce1614528ece537caa0a69c792a7173",
"assets/assets/images/uk.png": "7837ecdd0d5eeb2b2da0239c61b59afc",
"assets/assets/images/uk_(538_x_396_).png": "7076e2d849e7fc8103d6b7ee80a34eae",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(1).png": "9656e1abe29883818c7be2028240d769",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(2).png": "6cab563227d4c7ad175bfb84eeb330e9",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(1).gif": "c0b003da8853b1af1e7ba83f4ec0a8c8",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(10).png": "fe28ff36fedfd5457127d68df6bfee5a",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(11).png": "d5ec7350fb5489511ee20ff87b6e05e1",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(12).png": "e452c8861b757a3f45f74d92e38edd68",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(13).png": "6f4a314e5aa997328020f26e21fa928a",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(14).png": "7a5beb12d3b6358056d4c1f90ee74089",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(2).png": "db118144b6cb8c116313a4c874706a7d",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(3).png": "70204fd836c274d7c3e7a52f6e684f3f",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(5).png": "cffe0210e53350eff017a305382ca153",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(6).png": "f44b05bdd877004f7cbafbd5d819ef31",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(7).png": "e8a951a28588d41b7d8d724088e5f206",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(8).png": "8eb371d7484dd6145357922a88618219",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(275_x_170_)_(9).png": "b60a592415e581211e19382520397c66",
"assets/assets/images/uk_(538_x_396_)_(195_x_235_)_(3).png": "51aaadba87e8e353dc10231f12e07c3d",
"assets/assets/images/uk_(538_x_396_)_(2).png": "c15f85461050431b006b98d42a8544f8",
"assets/assets/images/Vector_6.png": "95f266e96cc221519e545807c183cee2",
"assets/assets/images/__(270_x_156_)_(3).png": "780b53651f08479dbfe676215905e373",
"assets/assets/images/__(270_x_156_)_(4).png": "25a1fb95aecefa5f739e83eb080cbb68",
"assets/assets/images/__(270_x_156_)_(5).png": "354aa715aeba51024c1b122914b88560",
"assets/assets/images/__(8).png": "38350134922028687da621a055e050bc",
"assets/assets/images/___(18).png": "7c6c620ce445c950dd0b108fcf257fc4",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "83c928a230d81e8365c60a7dc95a3c87",
"assets/NOTICES": "df98d5a222a9131133397836b7c3d47b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3c3e1095307c475720d04d49052bab7e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0530d7e2a1334d6c77867f98547ff2b0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1ed398cbe5e6c85bc0efabbdd79e1f43",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e497a84f0a97d609805df4e0a15512f8",
"icons/app_launcher_icon.png": "34bbba4620dacb382454e06acd4386e4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cbceffea7f16a7024ab4a903920e5786",
"/": "cbceffea7f16a7024ab4a903920e5786",
"main.dart.js": "1a35397b5736af382ef157a3aec5a625",
"uk.png": "7837ecdd0d5eeb2b2da0239c61b59afc",
"uk_(538_x_396_).png": "7076e2d849e7fc8103d6b7ee80a34eae",
"version.json": "28067189fdc581c8382136405b37f18d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
