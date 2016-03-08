define([], function()
{
    'use strict';

    var calculator = {};
    /**
     * very complicated calculations are part of this method
     * @param amount
     * @param rate
     * @returns {number}
     */
    calculator.calculate = function(amount, rate)
    {
        return amount * rate;
    };
    return calculator;
});