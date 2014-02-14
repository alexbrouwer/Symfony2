define(['base/Module', './list/Controller'],function(Module, ListController){

    var mod = Module('SidebarModule', {autoStart: false});

    var API = {
        show: function() {
            var controller = new ListController({
                region: mod.kernel.sidebarRegion
            });
            controller.showSidebar();
        }
    };

    mod.on('start', function(){
        API.show();
    });
});