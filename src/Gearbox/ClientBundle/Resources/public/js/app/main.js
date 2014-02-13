define([
    'base/kernel',
    './config',
    'entities/User'
], function(kernel, appConfig, User) {

    // Load application configuration
    kernel.setConfig(appConfig);

    // Configure application regions
    kernel.addRegions({
        headerRegion: '#header',
        sidebarRegion: '#sidebar',
        mainRegion: '#main'
    });

    // Set default region
    kernel.defaultRegion = kernel.mainRegion;

    // handlers for setting and getting the current User
    kernel.commands.setHandler('set:currentUser', function(currentUser) {
        kernel.currentUser = new User(currentUser);
    });
    kernel.reqres.setHandler('currentUser', function() {
        if(!kernel.currentUser) {
            kernel.execute('set:currentUser', {});
        }
        return kernel.currentUser;
    });

    // Set currentUser
    kernel.on('initialize:before', function(options) {
        kernel.execute('set:currentUser', options.currentUser);
        // Remove from options (don't want it in config)
        delete options.currentUser;
    });

    // Start default modules
    kernel.on('start', function() {
        kernel.module('HeaderModule').start();
    });

    return kernel;

});