define([
    "jquery",
    "fx/DataConnector",
    "fx/Calculator"
], function($, DataConnector, Calculator)
{
    'use strict';

    var fxApp = {};

    /**
     * Calculates from to and puts result in a label
     */
    fxApp.rate = function()
    {
        var fromCur = $(".fx1").val();
        var toCur = $(".fx2").val();
        var amountFrom = $(".fxamount").val();
        var fxRate = DataConnector.retrieveData(fromCur, toCur);
        var amountTo = Calculator.calculate(amountFrom, fxRate);
        $(".fxrate").html(fxRate);
        $(".fxresult").html(amountTo);
        return false;
    };

    return fxApp;

});