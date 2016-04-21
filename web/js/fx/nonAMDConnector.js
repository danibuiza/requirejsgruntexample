
retrieveData = function (from, to) {
    var rate = 1;
    //just to show that underscore is usable here
    if (_.isEqual("EUR", from)) {
        if (_.isEqual("USD", to)) {
            rate = 1.5;
        }
        else if ("GBP" === to) {
            rate = 0.5;
        } else if ("CHF" === to) {
            rate = 0.24;
        }
    }
    else if ("USD" === from) {
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

