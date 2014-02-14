define(['base/Controller', 'base/kernel', 'when'], function(Controller, kernel, when) {
    return Controller.extend({

        constructor: function(options) {
            Controller.prototype.constructor.apply(this, arguments);

            this.region = kernel.request('region');
            if(this.options.region) {
                this.region = this.options.region;
            }
        },

        request: function(reqName) {
            return kernel.request.apply(kernel, arguments);
        },

        waitFor: function(entities) {
            var xhrs = _.chain([entities]).flatten().pluck('_fetch').value();
            return when.all(xhrs);
        },

        show: function(view) {
            this.region.show(view);
        }
    });
});