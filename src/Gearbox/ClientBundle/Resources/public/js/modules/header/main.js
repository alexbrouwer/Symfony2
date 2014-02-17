define([
    'base/Module',
    './show/Controller'
],function(Module, ShowController){

    var mod = Module('HeaderModule', {autoStart: false});

    var API = {
        showHeader: function() {
            var controller = new ShowController({
                region: mod.kernel.headerRegion
            });
            controller.showHeader();
        }
    };

    mod.on('start', function(){
        API.showHeader();
    });
});