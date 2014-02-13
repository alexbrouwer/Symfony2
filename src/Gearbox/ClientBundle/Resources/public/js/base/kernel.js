define(['./Application'], function(Application) {

    var kernel = new Application();
    kernel.defaultRegion = null;

    // Setup regions
    kernel.on('initialize:before', function() {
        if(_.isEmpty(kernel._regionManager._regions)) {
            throw new Error('No application regions specified');
        }
        if(!kernel.defaultRegion || _.isEmpty(kernel.defaultRegion)) {
            throw new Error('No default application region specified');
        }

        // Add handler for requesting default region
        kernel.reqres.setHandler('region', function() {
            return App.defaultRegion;
        });
    });

    // Cleanup options and store all in config
    kernel.on('initialize:after', function(options) {
        delete options.history;
        delete options.packages;
        kernel.setConfig(options);
    });

    // Start history management
    kernel.on('initialize:after', function() {
        if(kernel.history) {
            kernel.history.start(kernel.getConfig().get('history'));
        }
    });

    // Debugging
    kernel.on('initialize:before', function(options) {
        console.log('app initializing', kernel, options);
    });
    kernel.on('initialize:after', function(options) {
        console.log('app initialized', kernel, options);
    });
    kernel.on('start', function(options) {
        console.log('app started', kernel, options);
    });

    return kernel;

});