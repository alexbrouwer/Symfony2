define([
    'base/Module',
    'base/Router',
    './list/Controller'
],function(Module, Router, ListController){

    var mod = Module('UsersModule');

    var UserRouter = Router.extend({
        appRoutes: {
            'users': 'listUsers'
        }
    });

    var API = {
        listUsers: function() {
            var controller = new ListController();
            controller.listUsers();
        }
    };

    mod.addInitializer(function() {
        this.router = new UserRouter({
            controller: API
        });
    });
});