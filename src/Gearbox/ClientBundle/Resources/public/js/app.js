define(['base/kernel'], function(kernel){

    kernel.addRegions({
        headerRegion: '#header',
        sidebarRegion: '#sidebar',
        mainRegion: '#main'
    });

    kernel.on('start', function(){
        kernel.module('HeaderModule').start();
    });

    return kernel;

});