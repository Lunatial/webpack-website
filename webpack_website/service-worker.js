"use strict";var precacheConfig=[["0b0d105142966eadb6e859ce82033f4d.jpg","0b0d105142966eadb6e859ce82033f4d"],["0f029c0c9b064d369e2d86311e125c87.png","0f029c0c9b064d369e2d86311e125c87"],["0f549f4b4a0ef4e344441a017b47d2a2.png","0f549f4b4a0ef4e344441a017b47d2a2"],["2af7488b87ef45a53bef185c91b22473.jpg","2af7488b87ef45a53bef185c91b22473"],["2e6c4b40ba19a8f6363d762fcf37dcfd.jpg","2e6c4b40ba19a8f6363d762fcf37dcfd"],["361ad209c79d430a89316b0b8529b209.png","361ad209c79d430a89316b0b8529b209"],["3774d24898af6b8a8938b6be080a5529.jpg","3774d24898af6b8a8938b6be080a5529"],["3bcf6a56b34844741ab15c2689bad508.png","3bcf6a56b34844741ab15c2689bad508"],["3e278c4be5d730bdc467be515d06f3ad.jpg","3e278c4be5d730bdc467be515d06f3ad"],["50858796f945037423f180d38a647cf5.jpg","50858796f945037423f180d38a647cf5"],["531eb5882b1f44ace514c385738d28b7.png","531eb5882b1f44ace514c385738d28b7"],["66de8001c28539b2423db61bcb4e29b4.png","66de8001c28539b2423db61bcb4e29b4"],["8636b479c131fc95af2e9967722b2d7e.png","8636b479c131fc95af2e9967722b2d7e"],["8bd4c81b2df277d49a93168716768f06.png","8bd4c81b2df277d49a93168716768f06"],["942364d14e474f9816a63b26b2979aa2.png","942364d14e474f9816a63b26b2979aa2"],["98dcf372163893cb67520c0af28dff68.png","98dcf372163893cb67520c0af28dff68"],["9d58e2564c1d6799ba37724a13f7fb0c.png","9d58e2564c1d6799ba37724a13f7fb0c"],["a5ad1430bd623fd64db01f245827058a.png","a5ad1430bd623fd64db01f245827058a"],["a66fa3f59ff32c73e86100db1cc84db7.png","a66fa3f59ff32c73e86100db1cc84db7"],["a6a516eeebc9ae279ecd865d90540e6f.jpg","a6a516eeebc9ae279ecd865d90540e6f"],["a79b43cc0f301bc2ddc098d83bfff23b.jpg","a79b43cc0f301bc2ddc098d83bfff23b"],["b0abd11422f49b7a40f97ee314067620.png","b0abd11422f49b7a40f97ee314067620"],["b28ee1baaed98b66fb60ab16e3abf533.jpg","b28ee1baaed98b66fb60ab16e3abf533"],["b85fbda9516150222a6562c40164be56.jpg","b85fbda9516150222a6562c40164be56"],["bundle.js","ba04882190ee1935bbba59aa0c7f6aaf"],["c011d5b1f2d76315644badb5f2c4a074.jpg","c011d5b1f2d76315644badb5f2c4a074"],["c23d1b5db76b3603de7079118ed1e137.jpg","c23d1b5db76b3603de7079118ed1e137"],["d150e033b1ecb6b4072fe8a247659614.png","d150e033b1ecb6b4072fe8a247659614"],["e53d1bc6d0274aef5a445a666598fcd1.png","e53d1bc6d0274aef5a445a666598fcd1"],["ed7dd9e260b3f893d4a8fe78aa2b322e.jpg","ed7dd9e260b3f893d4a8fe78aa2b322e"],["fb8f1ca31c51ed5c0aa08e8a71c18f62.jpg","fb8f1ca31c51ed5c0aa08e8a71c18f62"],["index.html","2f861db632dee20fd520296a00c14e82"],["precache-manifest.c4013ad202ed50f17d9d3fab6dafcd56.js","c4013ad202ed50f17d9d3fab6dafcd56"],["service-worker.js","9768f497422617198495f4e509de4ae4"]],cacheName="sw-precache-v3-my-react-website-offline-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,n){var t=new URL(e);return n&&t.pathname.match(n)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],n=new URL(a,self.location),t=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(c=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});