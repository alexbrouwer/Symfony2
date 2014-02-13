define([
    'base/kernel',
    './views/Header',
    'entities/nav/ItemRepository'
], function(kernel, HeaderView, itemRepository) {

    return {
        showHeader: function() {
            var links = itemRepository.all();

            var view = this.getSidebarView(links);
            kernel.headerRegion.show(view);
        },

        getSidebarView: function(links) {
            return new HeaderView({
                collection: links
            });
        }
    };
});