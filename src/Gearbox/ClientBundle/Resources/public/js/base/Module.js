define(['./kernel', 'underscore'], function(kernel, _) {

    return function Module(name, options) {

        if(!options) {
            options = {};
        }

        _.defaults(options, {
            autoStart: true
        });

        return kernel.module(name, function(mod, kernel) {
            this.startWithParent = options.autoStart;
            this.kernel = kernel;

            this.on('start', function() {
                kernel.execute('debug', 'starting', this.moduleName);
            })
        });
    };
});