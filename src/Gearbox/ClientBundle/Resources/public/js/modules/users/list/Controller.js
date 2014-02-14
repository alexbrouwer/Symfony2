define([
    'base/view/Controller',
    './views/Layout',
    './views/Panel',
    './views/Users',
    'underscore'
], function(ViewController, LayoutView, PanelView, UsersView, _) {

    return ViewController.extend({
        listUsers: function() {
            var users = this.request('user:entities')
            this.waitFor(users).then(_.bind(function(){
                this.layout = this.getLayoutView();

                this.listenTo(this.layout, 'show', function(){
                    this.showPanel(users);
                    this.showUsers(users);
                });

                this.show(this.layout);
            }, this));
        },

        showPanel: function(users){
            var view = this.getPanelView(users);
            this.layout.panelRegion.show(view);
        },

        showUsers: function(users) {
            var view = this.getUsersView(users);
            this.layout.usersRegion.show(view);
        },

        getPanelView: function(users) {
            return new PanelView({
                collection: users
            });
        },

        getUsersView: function(users) {
            return new UsersView({
                collection: users
            });
        },

        getLayoutView: function() {
            return new LayoutView();
        }
    });
});