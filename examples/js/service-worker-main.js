(function() {
    "use strict";
    if ( ! ("serviceWorker" in navigator) ) {
        return alert("ServiceWorker is not Supported on you browser");
    }

    navigator.serviceWorker.register("/examples/js/service-worker.js")
        .then(function(registration) {
            console.log("Service Worker success: ", registration);
        })
        .catch(function(error) {
            console.log("Service Worker failed: ", error);
        });
})();
