define(['base/Controller', 'base/kernel', 'underscore'], function(Controller, kernel, _) {

    return Controller.extend({
        constructor: function(options) {
            Controller.prototype.constructor.apply(this, arguments);

            this.setupRequests();
        },

        getRequests: function() {
            var requests = [];
            if(this.requests) {
                _.each(this.requests, function(fn, key) {
                    if(_.isString(fn) && _.isFunction(this[fn])) {
                        fn = this[fn];
                    }
                    requests.push({
                        name: key,
                        fn: _.bind(fn, this)
                    });
                }, this);
            }

            return requests;
        },

        setupRequests: function() {
            var requests = this.getRequests();
            _.each(requests, function(request) {
                kernel.execute('debug', 'add repository request', request);
                kernel.reqres.setHandler(request.name, request.fn);
            }, this);
        }
    }, {
        create: function(protoDef) {
            var rep = this.extend(protoDef);

            return new rep();
        }
    });
});