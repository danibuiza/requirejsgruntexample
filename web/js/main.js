requirejs.config({
    baseUrl: 'js',
    waitSeconds: 20,
    paths: {
        "jquery": "jquery",
        "backbone": "backbone",
        "underscore": "underscore"
    },
    //for traditional libraries not using define() we need to use a shim that allows us to declare them as AMD modules
    shim: {
        "backbone": {
            "deps": ["underscore", "jquery"],
            "exports": "Backbone"  //attaches "Backbone" to the window object
        },
        "underscore": {
            exports: "_" // exporting _
        }
    },
    deps: ['fx/App'],

    urlArgs: "t=20160320000000" //flusing cache, do not use in production
});

