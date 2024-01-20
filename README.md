# Fathom Analytics plugin for Vue 3
Use the excellent [Fathom Analytics](https://usefathom.com/) in your Vue project.  

This is mostly a simple wrapper for [fathom-client](https://github.com/derrickreimer/fathom-client). So if you want more control, you can use that directly.

## Installation
```sh
npm i @kodfolk/vue3-fathom
```

## Usage
```js
import { createApp } from 'vue';
import VueFathom from '@kodfolk/vue3-fathom';

const app = createApp({});

app.use(VueFathom, {
    siteID: 'your-site-id', // replace with your actual site id
    disabled: false, // set to true to disable tracking
    settings: {} // additional settings for Fathom
});
```
**Now you're up and running!** Nothing more needs to be done to track page views.

## Additional functionality
```js
// Track event
this.$fathom.trackEvent('eventName', { _value: 1 });

// DEPRECATED: Track goa
this.$fathom.trackGoal('eventName', 0);

// Enable tracking for user
this.$fathom.enableTrackingForMe();

// Block tracking for user
this.$fathom.blockTrackingForMe();

// Check if tracking is enabled for user
this.$fathom.isTrackingEnabled();
```
See [fathom-client](https://github.com/derrickreimer/fathom-client?tab=readme-ov-file#api-reference) for more information regarding the API or take a look in the [code](https://github.com/Kodfolk/vue3-fathom/blob/main/lib/main.js) for available methods.

## Contributing
Feel free to open an issue or submit a pull request if you find a bug or want to add a feature.
