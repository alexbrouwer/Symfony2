define(['base/Module', './show/Controller'],function(Module, ShowController){

    var API = {
        showSidebar: function() {
            ShowController.showSidebar();
        }
    };

    var mod = new Module('HeaderModule');

    mod.on('start', function(){
        API.showSidebar();
    });
});