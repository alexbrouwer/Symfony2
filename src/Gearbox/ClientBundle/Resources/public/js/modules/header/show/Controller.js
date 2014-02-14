define([
    'base/view/Controller',
    './views/Header'
], function(ViewController, HeaderView) {

    return ViewController.extend({
        showHeader: function() {
            var view = this.getHeaderView();
            this.show(view);
        },

        getHeaderView: function() {
            return new HeaderView();
        }
    });
});