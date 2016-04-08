requirejs.config({
    baseUrl: 'js',
    waitSeconds: 20,
    paths: {
        "jquery": "jquery",
        "backbone"              : "backbone",
        "underscore"            : "underscore"
    },
    //for traditional libraries not using define() we need to use a shim that allows us to declare them as AMD modules
    shim:{
        "backbone"      : {
            deps : ["jquery", "underscore"], //dependencies
            init : function($)//init method
            {
                var Backbone = this.Backbone.noConflict();
                // manually include jQuery because it is not attached to the window object
                Backbone.$ = $;
                return Backbone;
            }
        },
        "underscore"    : {
            exports : "_", // exporting _
            init    : function()
            {
                return this._.noConflict();
            }
        }
    },
    deps: ['fx/App'],

    urlArgs: "t=20160320000000" //flusing cache, do not use in production
});

