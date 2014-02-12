define(['base/kernel','./views/Header', 'base/entity/Collection'], function(kernel, HeaderView, Collection) {

    return {
        showHeader: function() {
            var links = this.getLinksCollection();

            var view = this.getSidebarView(links);
            kernel.headerRegion.show(view);
        },

        getLinksCollection: function() {
            return new Collection([
                { name: 'first', link:'#first' },
                { name: 'second', link:'#second' },
                { name: 'third', link:'#third' }
            ]);
        },

        getSidebarView: function(links) {
            return new HeaderView({
                collection: links
            });
        }
    };
});