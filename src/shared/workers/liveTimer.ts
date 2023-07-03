/// <reference lib="webworker" />

setInterval(() => {
    self.postMessage(Date.now());
}, 1000);
