define(['base/kernel','./views/Sidebar'], function(kernel, SidebarView) {

    return {
        showSidebar: function() {
            var view = this.getSidebarView();
            kernel.sidebarRegion.show(view);
        },

        getSidebarView: function() {
            return new SidebarView();
        }
    };
});