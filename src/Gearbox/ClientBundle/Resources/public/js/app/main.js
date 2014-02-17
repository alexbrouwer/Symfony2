(function(global) {
    define([
        'base/kernel',
        './config',
        'entities/user/User'
    ], function(kernel, appConfig, User) {

        // Load application configuration
        kernel.setConfig(appConfig);

        // Configure application regions
        kernel.addRegions({
            headerRegion: '#header',
            sidebarRegion: '#sidebar',
            breadcrumbsRegion: '#breadcrumbs',
            mainRegion: '#main'
        });

        kernel.setConfig({
            defaultRegion: 'mainRegion'
        });

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
        });

        // Start default modules
        kernel.on('start', function() {
            kernel.module('HeaderModule').start();
            kernel.module('SidebarModule').start();
        });

        global.App = kernel;

        return kernel;

    });
})(this);