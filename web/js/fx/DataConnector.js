define([], function () {
    'use strict';

    var connector = {};
    /**
     * data retrieval to get fx rate for a given currency pair (fake)
     * @param from
     * @param to
     * @returns {number} fx rate
     */
    connector.retrieveData = function (from, to) {
        var rate = 1;
        if ("EUR" === from) {
            if ("USD" === to) {
                rate = 1.5;
            }
            else if ("GBP" === to) {
                rate = 0.5;
            } else if ("CHF" === to) {
                rate = 0.24;
            }
        } else if ("USD" === from) {
            if ("EUR" === to) {
                rate = 0.5;
            }
            else if ("GBP" === to) {
                rate = 0.25;
            } else if ("CHF" === to) {
                rate = 1.24;
            }
        } else if ("GBP" === from) {
            if ("EUR" === to) {
                rate = 1.5;
            }
            else if ("USD" === to) {
                rate = 1.75;
            } else if ("CHF" === to) {
                rate = 1.33;
            }
        } else if ("CHF" === from) {
            if ("EUR" === to) {
                rate = 1.22;
            }
            else if ("USD" === to) {
                rate = 3.75;
            } else if ("GBP" === to) {
                rate = 6.33;
            }
        }
        return rate;
    };
    return connector;
});
