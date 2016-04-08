define([
    "backbone",
    "underscore"
], function (Backbone, _) {

    'use strict';

    return Backbone.Model.extend(
        {

            initialize: function(options){
                //just to show that we can use now Backbone models in an AMD env
            },

            /**
             * very complicated calculations are part of this method
             * @param amount
             * @param rate
             * @returns {number}
             */
            calculate: function (amount, rate) {
                return amount * rate;
            }
        });
});