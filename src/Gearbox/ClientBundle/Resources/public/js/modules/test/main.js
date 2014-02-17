define([
    'base/Module',
    'base/Router',
    './show/Controller'
],function(Module, Router, ShowController){

    var mod = Module('TestModule');

    var TestRouter = Router.extend({
        appRoutes: {
            'test': 'showPage'
        }
    });

    var API = {
        showPage: function() {
            var controller = new ShowController();
            controller.showPage();
        }
    };

    mod.addInitializer(function() {
        this.router = new TestRouter({
            controller: API
        });
    });
});