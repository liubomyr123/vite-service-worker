export const workerInstance = new ComlinkWorker
    // <typeof import("./shared/workers/liveTimer")>
    (new URL("./shared/workers/liveTimer", import.meta.url));

// https://www.freecodecamp.org/news/how-webworkers-work-in-javascript-with-example/
// https://www.skypack.dev/view/vite-plugin-comlink
// https://dev.to/franciscomendes10866/how-to-use-service-workers-with-react-17p2?utm_source=dormosheio&utm_campaign=dormosheio
// https://github.com/GoogleChromeLabs/comlink/issues/305
// https://github.com/mathe42/vite-plugin-comlink
// https://stackblitz.com/edit/github-u56fgb?file=src%2Fmain.ts
// https://medium.com/@mucahitozcantr/web-workers-run-in-an-isolated-thread-2cce0ce8313e
// https://www.sitepoint.com/developing-faster-javascript-apps-the-ultimate-guide-to-web-workers/
// https://www.npmjs.com/package/web-worker
// https://javascript.plainenglish.io/how-to-use-web-workers-in-react-9de15a006e89