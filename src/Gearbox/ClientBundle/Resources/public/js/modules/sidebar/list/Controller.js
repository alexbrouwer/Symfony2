define([
    'base/view/Controller',
    './views/Sidebar'
], function(ViewController, SidebarView) {

    return ViewController.extend({
        showSidebar: function() {
            var items = this.request('nav:entities');
            var view = this.getSidebarView(items);

            this.show(view);
        },

        getSidebarView: function(items) {
            return new SidebarView({
                collection: items
            });
        }
    });
});