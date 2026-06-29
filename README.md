# Adbrix Web SDK

Adbrix Web SDK can be consumed through the hosted CDN snippet or through the
versioned npm package prepared from this repository.

The npm package exports a browser SDK proxy plus typed constants:

```ts
import adbrix, { ABEvent, ABEventProperty, ABLogLevel } from "@igaworks/adbrix-web-sdk";

await adbrix.init("APP_KEY", "WEB_SECRET_KEY", {
  logEnable: true,
  logLevel: ABLogLevel.INFO,
});

adbrix.logEvent(ABEvent.LOGIN, {
  [ABEventProperty.ORDER_ID]: "ORDER-1",
});
```

The package is browser-oriented. Importing it in Node or build tools is safe for
type checking and bundling, but SDK method execution requires browser APIs.
