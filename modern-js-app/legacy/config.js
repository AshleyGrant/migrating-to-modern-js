//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'legacy/lib',
    paths: {
        app: '../app',
        'jquery': 'jquery-3.2.1',
    },
    shim: {
        // underscore: {
        //     exports: '_'
        // }
    }
});