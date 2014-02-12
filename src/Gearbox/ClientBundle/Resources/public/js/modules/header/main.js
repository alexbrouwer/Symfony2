define(['base/Module', './show/Controller'],function(Module, ShowController){

    var API = {
        showHeader: function() {
            ShowController.showHeader();
        }
    };

    var mod = new Module('HeaderModule');

    mod.on('start', function(){
        API.showHeader();
    });
});