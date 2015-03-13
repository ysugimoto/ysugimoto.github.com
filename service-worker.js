self.addEventListener("install", function(evt) {
    console.log("Service Worker Install: ", evt);
});

self.addEventListener("activate", function(evt) {
    console.log("Service Worker Activate: ", evt);
});

self.addEventListener("fetch", function(evt) {
    console.log("Service Worker Fetch: ", evt);
});
