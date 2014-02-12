(function(global){
    define(['./Application', 'backbone'], function(Application, Backbone){

        var app = global.App = new Application();

        app.addRegions({
            headerRegion: '#header',
            sidebarRegion: '#sidebar',
            mainRegion: '#main'
        });

        app.on('initialize:after', function(){
            if(Backbone.history) {
                Backbone.history.start();
            }
            console.log('app initialize');
        });

        app.on('initialize:before', function(){
            console.log('app initializing');
        });

        app.on('start', function(){
            console.log('app started');
        });

        return app;

    });
})(window);