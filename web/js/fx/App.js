define([
    "jquery",
    "backbone",
    "underscore",
    "fx/DataConnector",
    "fx/Calculator"
], function ($, Backbone, _, DataConnector, Calculator) {
    'use strict';

    //FxCalculator.js:10376 Uncaught TypeError: Cannot read property 'retrieveData' of undefined when using the nonAMDConnector without shim

    var fxApp = {};


    $(".fxcalculation").click(function(event)
    {
        var fromCur = $(".fx1").val();
        var toCur = $(".fx2").val();
        var amountFrom = $(".fxamount").val();
        var result = fxApp.rate(fromCur, toCur, amountFrom); //created in the wrap.start snippet
        $(".fxrate").html(result.rate);
        $(".fxresult").html(result.total);
        return false;
    });


/**
 *
 *
 * Calculates from to and puts result in a label
 */
fxApp.rate = function () {

    var SearchView = Backbone.View.extend({
        initialize: function(){
            // alert("Alerts suck.");
        },

        events: {
            "click .fxcalculation": "doSearch"
        },


        doSearch: function(){
            console.log("searching...")
        }


    });

    var search_view = new SearchView({el: $("body")});



   //backbone and underscore are now available
    console.log(Backbone);
    console.log(_);

    var fromCur = $(".fx1").val();
    var toCur = $(".fx2").val();
    var amountFrom = $(".fxamount").val();
    var fxRate = DataConnector.retrieveData(fromCur, toCur);
    //creation of objects using backbone models
    var calculator = new Calculator();
    var amountTo = calculator.calculate(amountFrom, fxRate);
    $(".fxrate").html(fxRate);
    $(".fxresult").html(amountTo);
    return false;
};

return fxApp;

});