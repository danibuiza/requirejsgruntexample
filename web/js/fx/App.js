define([
    "jquery",
    "backbone",
    "underscore",
    "fx/DataConnector",
    "fx/Calculator"
], function ($, Backbone, _, DataConnector, Calculator) {
    'use strict';

    var fxApp = {};

/**
 * Calculates from to and puts result in a label
 */
fxApp.rate = function () {
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