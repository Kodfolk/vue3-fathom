import * as Fathom from 'fathom-client';

export default {
    install: function (
        app,
        options = {
            siteID: '',
            disabled: false,
            settings: {}
        }
    ) {
        const fathom = {};

        const noop = () => {};

        const methods = [
            'trackPageview',
            'trackEvent',
            'trackGoal',
            'enableTrackingForMe',
            'blockTrackingForMe',
            'isTrackingEnabled',
            'setSite'
        ];

        if (!options.disabled) {
            Fathom.load(options.siteID, options.settings);
            //
            // methods.forEach(method => {
            //     fathom[method] = (...args) => Fathom[method](...args);
            // });
            //
            // // This is deprecated and will be removed in a future release.
            // fathom.trackGoal = (code, cents = 0) => Fathom.trackGoal(code, cents);
        } else {
            methods.forEach(method => {
                fathom[method] = noop;
            });
        }

        // app.provide('$fathom', fathom);
    }
}
