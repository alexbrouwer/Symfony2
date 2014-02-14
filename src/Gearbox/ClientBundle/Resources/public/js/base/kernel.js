define(['./Application', 'underscore'], function(Application, _) {

    var kernel = new Application();
    kernel.defaultRegion = null;
    kernel.defaultRoute = '';

    var config = kernel.getConfig();
    kernel.listenTo(config, 'change:defaultRegion', function(model, value) {
        kernel.defaultRegion = value;
    });
    kernel.listenTo(config, 'change:defaultRoute', function(model, value) {
        kernel.defaultRoute = value;
    });

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
            if(_.isString(kernel.defaultRegion)) {
                kernel.defaultRegion = kernel[kernel.defaultRegion];
            }
            return kernel.defaultRegion;
        });
    });

    // Start history management
    kernel.on('initialize:after', function() {
        kernel.startHistory();
        if(!kernel.getCurrentRoute()) {
            kernel.navigate(kernel.defaultRoute, {trigger: true});
        }
    });

    kernel.commands.setHandler('debug', function() {
        if(kernel.getConfig().get('debug')) {
            console.log.apply(null, arguments);
        }
    });

    // Debugging
    kernel.on('initialize:before', function(config) {
        kernel.execute('debug', 'app initializing', kernel, config);
    });
    kernel.on('initialize:after', function(config) {
        kernel.execute('debug', 'app initialized', kernel, config);
    });
    kernel.on('start', function(config) {
        kernel.execute('debug', 'app started', kernel, config);
    });

    return kernel;

});