requirejs.config({
    baseUrl: 'js',
    waitSeconds: 20,
    paths: {
        "jquery": "jquery"
    },
    deps: ['fx/App'],

    urlArgs: "t=20160320000000" //flusing cache, do not use in production
});

