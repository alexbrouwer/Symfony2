define([
    'base/view/Controller',
    './views/Test'
], function(ViewController, PageView) {

    return ViewController.extend({
        showPage: function() {
            var view = this.getPageView();
            this.show(view);
        },

        getPageView: function() {
            return new PageView();
        }
    });
});