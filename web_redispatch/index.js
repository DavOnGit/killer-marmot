if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

var evt;
var isTooSoon = (window.location.hash == "#redispatch");
window.addEventListener("beforeinstallprompt", function(e) {
  evt = e;
  if (isTooSoon) {
    e.preventDefault(); // Prevents prompt display
    console.log("Delaying event!");
    // Prompt later instead:
    setTimeout(function() {
      isTooSoon = false;
      console.log("Dispatching event");
      window.dispatchEvent(e); // Shows prompt
    }, 5000);
  }
});
